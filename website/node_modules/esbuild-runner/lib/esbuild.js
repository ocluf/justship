"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.transpile = exports.supports = exports.loaders = void 0;
var tslib_1 = require("tslib");
var esbuild_1 = require("esbuild");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var cache_1 = tslib_1.__importDefault(require("./cache"));
var defaultOptions = { type: "bundle", debug: false };
var commonOptions = {
    format: "cjs",
    logLevel: "error",
    target: ["node".concat(process.version.slice(1))],
    minify: false,
    sourcemap: "inline",
};
var pkgPath = path_1.default.resolve(".", "package.json");
var externals = [];
if (fs_1.default.existsSync(pkgPath)) {
    var pkg = JSON.parse(fs_1.default.readFileSync(pkgPath, { encoding: "utf8" }));
    externals = tslib_1.__spreadArray(tslib_1.__spreadArray([], Object.keys((_a = pkg.dependencies) !== null && _a !== void 0 ? _a : {}), true), Object.keys((_b = pkg.devDependencies) !== null && _b !== void 0 ? _b : {}), true);
}
exports.loaders = {
    ".js": "js",
    ".mjs": "js",
    ".cjs": "js",
    ".jsx": "jsx",
    ".ts": "ts",
    ".tsx": "tsx",
    // ".css": "css",
    ".json": "json",
    // ".txt": "text",
};
function supports(filename) {
    if (filename.includes("node_modules"))
        return false;
    return path_1.default.extname(filename) in exports.loaders;
}
exports.supports = supports;
function _transform(code, filename, options) {
    var loaders = getLoaders(options);
    var ret = (0, esbuild_1.transformSync)(code, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, commonOptions), options.esbuild), { loader: loaders[path_1.default.extname(filename)], sourcefile: filename }));
    return ret.code;
}
function getLoaders(options) {
    var _a;
    var ret = tslib_1.__assign({}, exports.loaders);
    if (typeof ((_a = options.esbuild) === null || _a === void 0 ? void 0 : _a.loader) == "object") {
        for (var _i = 0, _b = Object.entries(options.esbuild.loader); _i < _b.length; _i++) {
            var _c = _b[_i], e = _c[0], l = _c[1];
            ret[e] = l;
        }
    }
    return ret;
}
function _bundle(code, filename, options) {
    var _a, _b;
    var ext = path_1.default.extname(filename);
    var loaders = getLoaders(options);
    return (0, esbuild_1.buildSync)(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, commonOptions), { platform: "node" }), options.esbuild), { loader: loaders, bundle: true, stdin: {
            sourcefile: filename,
            contents: code,
            resolveDir: path_1.default.dirname(filename),
            loader: loaders[ext],
        }, external: tslib_1.__spreadArray(tslib_1.__spreadArray([], externals, true), ((_b = (_a = options === null || options === void 0 ? void 0 : options.esbuild) === null || _a === void 0 ? void 0 : _a.external) !== null && _b !== void 0 ? _b : []), true), write: false }))
        .outputFiles.map(function (f) { return f.text; })
        .join("\n");
}
function transpile(code, filename, _options) {
    var options = tslib_1.__assign(tslib_1.__assign({}, defaultOptions), _options);
    if (options.type == "bundle") {
        // eslint-disable-next-line no-console
        if (options.debug)
            console.log("\uD83D\uDCE6 ".concat(filename));
        return _bundle(code, filename, options);
    }
    else if (options.type == "transform") {
        return cache_1.default.get(filename, function () {
            // eslint-disable-next-line no-console
            if (options.debug)
                console.log("\uD83D\uDCE6 ".concat(filename));
            return _transform(code, filename, options);
        });
    }
    throw new Error("Invalid transpilation option ".concat(options.type));
}
exports.transpile = transpile;
//# sourceMappingURL=esbuild.js.map