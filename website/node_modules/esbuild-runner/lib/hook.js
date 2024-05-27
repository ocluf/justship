"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = exports.findUp = void 0;
var tslib_1 = require("tslib");
var module_1 = tslib_1.__importDefault(require("module"));
var esbuild_1 = require("./esbuild");
var source_map_support_1 = require("source-map-support");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var Module = module_1.default;
function findUp(name, cwd) {
    if (cwd === void 0) { cwd = process.cwd(); }
    var up = path_1.default.resolve(cwd);
    do {
        cwd = up;
        var p = path_1.default.resolve(cwd, name);
        if (fs_1.default.existsSync(p))
            return p;
        up = path_1.default.resolve(cwd, "..");
    } while (up !== cwd);
}
exports.findUp = findUp;
function loadConfig() {
    var configFile = findUp("esbuild-runner.config.js");
    if (configFile) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
            var ret = require(configFile);
            return ret;
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.error("[esbuild-runner] could not load \"esbuild-runner.config.js\"\n");
            throw error;
        }
    }
}
function install(options) {
    options = tslib_1.__assign(tslib_1.__assign({}, loadConfig()), options);
    (0, source_map_support_1.install)({ hookRequire: true });
    var defaultLoaderJS = Module._extensions[".js"];
    var _loop_1 = function (ext) {
        var defaultLoader = Module._extensions[ext] || defaultLoaderJS;
        Module._extensions[ext] = function (mod, filename) {
            if ((0, esbuild_1.supports)(filename)) {
                var defaultCompile_1 = mod._compile;
                mod._compile = function (code) {
                    mod._compile = defaultCompile_1;
                    return mod._compile((0, esbuild_1.transpile)(code, filename, options), filename);
                };
            }
            defaultLoader(mod, filename);
        };
    };
    for (var ext in esbuild_1.loaders) {
        _loop_1(ext);
    }
}
exports.install = install;
//# sourceMappingURL=hook.js.map