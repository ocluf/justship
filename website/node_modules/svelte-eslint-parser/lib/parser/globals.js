"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalsForSvelteScript = exports.globals = exports.globalsForRunes = void 0;
const svelte_version_1 = require("./svelte-version");
const globalsForSvelte4 = ["$$slots", "$$props", "$$restProps"];
exports.globalsForRunes = [
    "$state",
    "$derived",
    "$effect",
    "$props",
    "$bindable",
    "$inspect",
    "$host",
];
const globalsForSvelte5 = [...globalsForSvelte4, ...exports.globalsForRunes];
exports.globals = svelte_version_1.svelteVersion.gte(5)
    ? globalsForSvelte5
    : globalsForSvelte4;
exports.globalsForSvelteScript = svelte_version_1.svelteVersion.gte(5)
    ? exports.globalsForRunes
    : [];
