"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var esbuild_1 = require("./esbuild");
require("./register");
function process(src, filename) {
    return { code: (0, esbuild_1.transpile)(src, filename, { type: "transform" }) };
}
exports.default = { process: process };
//# sourceMappingURL=jest.js.map