"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var crypto_1 = tslib_1.__importDefault(require("crypto"));
var tmpPath = path_1.default.resolve(os_1.default.tmpdir(), "esbuild-runner-cache");
if (!fs_1.default.existsSync(tmpPath))
    fs_1.default.mkdirSync(tmpPath, { recursive: true });
function clear() {
    if (fs_1.default.existsSync(tmpPath)) {
        fs_1.default.rmdirSync(tmpPath, { recursive: true });
        fs_1.default.mkdirSync(tmpPath, { recursive: true });
    }
}
function get(filename, transpiler) {
    var hash = crypto_1.default
        .createHash("md5")
        .update(path_1.default.resolve(filename))
        .update(process.version)
        .digest("hex");
    var compiledPath = path_1.default.resolve(tmpPath, "".concat(hash, ".js"));
    if (!fs_1.default.existsSync(compiledPath) ||
        fs_1.default.statSync(compiledPath).mtime < fs_1.default.statSync(filename).mtime) {
        var code = transpiler();
        fs_1.default.writeFileSync(compiledPath, code, { encoding: "utf8" });
        return code;
    }
    return fs_1.default.readFileSync(compiledPath, { encoding: "utf8" });
}
exports.default = { get: get, clear: clear, tmpPath: tmpPath };
//# sourceMappingURL=cache.js.map