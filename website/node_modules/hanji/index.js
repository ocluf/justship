"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onTerminate = exports.renderWithTask = exports.render = exports.TaskTerminal = exports.TaskView = exports.Terminal = exports.deferred = exports.SelectState = exports.Prompt = void 0;
const readline_1 = require("./readline");
const sisteransi_1 = require("sisteransi");
const utils_1 = require("./utils");
const lodash_throttle_1 = __importDefault(require("lodash.throttle"));
class Prompt {
    constructor() {
        this.attachCallbacks = [];
        this.detachCallbacks = [];
        this.inputCallbacks = [];
    }
    requestLayout() {
        this.terminal.requestLayout();
    }
    on(type, callback) {
        if (type === "attach") {
            this.attachCallbacks.push(callback);
        }
        else if (type === "detach") {
            this.detachCallbacks.push(callback);
        }
        else if (type === "input") {
            this.inputCallbacks.push(callback);
        }
    }
    attach(terminal) {
        this.terminal = terminal;
        this.attachCallbacks.forEach((it) => it(terminal));
    }
    detach(terminal) {
        this.detachCallbacks.forEach((it) => it(terminal));
        this.terminal = undefined;
    }
    input(str, key) {
        this.inputCallbacks.forEach((it) => it(str, key));
    }
}
exports.Prompt = Prompt;
class SelectState {
    constructor(items) {
        this.items = items;
        this.selectedIdx = 0;
    }
    bind(prompt) {
        prompt.on("input", (str, key) => {
            const invalidate = this.consume(str, key);
            if (invalidate)
                prompt.requestLayout();
        });
    }
    consume(str, key) {
        if (!key)
            return false;
        if (key.name === "down") {
            this.selectedIdx = (this.selectedIdx + 1) % this.items.length;
            return true;
        }
        if (key.name === "up") {
            this.selectedIdx -= 1;
            this.selectedIdx =
                this.selectedIdx < 0 ? this.items.length - 1 : this.selectedIdx;
            return true;
        }
        return false;
    }
}
exports.SelectState = SelectState;
const deferred = () => {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return {
        resolve,
        reject,
        promise,
    };
};
exports.deferred = deferred;
class Terminal {
    constructor(view, stdin, stdout, closable) {
        this.view = view;
        this.stdin = stdin;
        this.stdout = stdout;
        this.closable = closable;
        this.text = "";
        this.status = "idle";
        if (this.stdin.isTTY)
            this.stdin.setRawMode(true);
        const keypress = (str, key) => {
            // console.log(str, key);
            if (key.name === "c" && key.ctrl === true) {
                this.requestLayout();
                this.view.detach(this);
                this.tearDown(keypress);
                if (terminateHandler) {
                    terminateHandler(this.stdin, this.stdout);
                    return;
                }
                this.stdout.write(`\n^C\n`);
                process.exit(1);
            }
            if (key.name === "escape") {
                // this.stdout.write(beep);
                // this.stdout.write("\n");
                this.status = "aborted";
                this.requestLayout();
                this.view.detach(this);
                this.tearDown(keypress);
                this.resolve({ status: "aborted", data: undefined });
                return;
            }
            if (key.name === "return") {
                this.status = "submitted";
                this.requestLayout();
                this.view.detach(this);
                this.tearDown(keypress);
                this.resolve({ status: "submitted", data: this.view.result() });
                return;
            }
            view.input(str, key);
        };
        this.stdin.on("keypress", keypress);
        this.view.attach(this);
        const { resolve, promise } = (0, exports.deferred)();
        this.resolve = resolve;
        this.promise = promise;
        this.renderFunc = (0, lodash_throttle_1.default)((str) => {
            this.stdout.write(str);
        });
    }
    tearDown(keypress) {
        this.stdout.write(sisteransi_1.cursor.show);
        this.stdin.removeListener("keypress", keypress);
        if (this.stdin.isTTY)
            this.stdin.setRawMode(false);
        this.closable.close();
    }
    result() {
        return this.promise;
    }
    toggleCursor(state) {
        if (state === "hide") {
            this.stdout.write(sisteransi_1.cursor.hide);
        }
        else {
            this.stdout.write(sisteransi_1.cursor.show);
        }
    }
    requestLayout() {
        const string = this.view.render(this.status);
        const clearPrefix = this.text ? (0, utils_1.clear)(this.text, this.stdout.columns) : "";
        this.text = string;
        this.renderFunc(`${clearPrefix}${string}`);
    }
}
exports.Terminal = Terminal;
class TaskView {
    constructor() {
        this.attachCallbacks = [];
        this.detachCallbacks = [];
    }
    requestLayout() {
        this.terminal.requestLayout();
    }
    attach(terminal) {
        this.terminal = terminal;
        this.attachCallbacks.forEach((it) => it(terminal));
    }
    detach(terminal) {
        this.detachCallbacks.forEach((it) => it(terminal));
        this.terminal = undefined;
    }
    on(type, callback) {
        if (type === "attach") {
            this.attachCallbacks.push(callback);
        }
        else if (type === "detach") {
            this.detachCallbacks.push(callback);
        }
    }
}
exports.TaskView = TaskView;
class TaskTerminal {
    constructor(view, stdout) {
        this.view = view;
        this.stdout = stdout;
        this.text = "";
        this.view.attach(this);
    }
    requestLayout() {
        const string = this.view.render("pending");
        const clearPrefix = this.text ? (0, utils_1.clear)(this.text, this.stdout.columns) : "";
        this.text = string;
        this.stdout.write(`${clearPrefix}${string}`);
    }
    clear() {
        const string = this.view.render("done");
        this.view.detach(this);
        const clearPrefix = this.text ? (0, utils_1.clear)(this.text, this.stdout.columns) : "";
        this.stdout.write(`${clearPrefix}${string}`);
    }
}
exports.TaskTerminal = TaskTerminal;
function render(view) {
    const { stdin, stdout, closable } = (0, readline_1.prepareReadLine)();
    if (view instanceof Prompt) {
        const terminal = new Terminal(view, stdin, stdout, closable);
        terminal.requestLayout();
        return terminal.result();
    }
    stdout.write(`${view}\n`);
    closable.close();
    return;
}
exports.render = render;
function renderWithTask(view, task) {
    return __awaiter(this, void 0, void 0, function* () {
        const terminal = new TaskTerminal(view, process.stdout);
        terminal.requestLayout();
        const result = yield task;
        terminal.clear();
        return result;
    });
}
exports.renderWithTask = renderWithTask;
let terminateHandler;
function onTerminate(callback) {
    terminateHandler = callback;
}
exports.onTerminate = onTerminate;
