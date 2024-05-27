"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareReadLine = void 0;
const prepareReadLine = () => {
    const stdin = process.stdin;
    const stdout = process.stdout;
    const readline = require("readline");
    const rl = readline.createInterface({
        input: stdin,
        escapeCodeTimeout: 50,
    });
    readline.emitKeypressEvents(stdin, rl);
    return {
        stdin,
        stdout,
        closable: rl,
    };
};
exports.prepareReadLine = prepareReadLine;
