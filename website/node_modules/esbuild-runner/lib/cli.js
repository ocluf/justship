"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var tslib_1 = require("tslib");
/* eslint-disable no-process-exit */
var fs_1 = tslib_1.__importDefault(require("fs"));
var module_1 = tslib_1.__importDefault(require("module"));
var path_1 = tslib_1.__importDefault(require("path"));
var cache_1 = tslib_1.__importDefault(require("./cache"));
var hook_1 = require("./hook");
function help() {
    // eslint-disable-next-line no-console
    console.log("Usage: esr [options] <source-file> [file-options]\n\n  --cache       Transform on a file per file basis and cache code\n  --clearCache  Clear transform cache\n  --help|-h     Display this help message\n  ");
    process.exit(1);
}
function parseArgs(args) {
    if (args === void 0) { args = process.argv; }
    var nodePath = args[0];
    // Remove node path
    args.shift();
    // Remove esr path
    args.shift();
    var options = { debug: false, cache: false };
    for (var a = 0; a < args.length; a++) {
        var arg = args[a];
        switch (arg) {
            case "--help":
            case "-h": {
                help();
                continue;
            }
            case "--clearCache":
            case "--clear-cache": {
                cache_1.default.clear();
                // eslint-disable-next-line no-console
                console.log("Cleared ".concat(cache_1.default.tmpPath));
                process.exit(0);
                continue;
            }
            case "--cache": {
                options.cache = true;
                continue;
            }
            case "--debug": {
                options.debug = true;
                continue;
            }
            default: {
                args = args.slice(a);
                args.unshift(nodePath);
                return { options: options, args: args };
            }
        }
    }
    return { options: options, args: [nodePath] };
}
function main() {
    var _a = parseArgs(), options = _a.options, args = _a.args;
    if (args.length >= 2 && fs_1.default.existsSync(args[1])) {
        process.argv = args;
        process.argv[1] = path_1.default.resolve(process.argv[1]);
        (0, hook_1.install)({
            type: options.cache ? "transform" : "bundle",
            debug: options.debug,
        });
        module_1.default.runMain();
    }
    else {
        help();
    }
}
exports.main = main;
//# sourceMappingURL=cli.js.map