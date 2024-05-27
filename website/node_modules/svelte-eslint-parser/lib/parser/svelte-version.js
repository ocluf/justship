"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svelteVersion = void 0;
const compiler_1 = require("svelte/compiler");
const verStrings = compiler_1.VERSION.split(".");
exports.svelteVersion = {
    gte(v) {
        return Number(verStrings[0]) >= v;
    },
    hasRunes: Number(verStrings[0]) >= 5,
};
