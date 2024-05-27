"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeclaratorFromConstTag = exports.getCatchFromAwaitBlock = exports.getThenFromAwaitBlock = exports.getPendingFromAwaitBlock = exports.getFallbackFromEachBlock = exports.getBodyFromEachBlock = exports.getAlternateFromIfBlock = exports.getConsequentFromIfBlock = exports.getTestFromIfBlock = exports.getModifiers = exports.getFragment = exports.trimChildren = exports.getChildren = exports.getOptionsFromRoot = exports.getModuleFromRoot = exports.getInstanceFromRoot = exports.getFragmentFromRoot = void 0;
// Root
function getFragmentFromRoot(svelteAst) {
    var _a;
    return ((_a = svelteAst.fragment) !== null && _a !== void 0 ? _a : svelteAst.html);
}
exports.getFragmentFromRoot = getFragmentFromRoot;
function getInstanceFromRoot(svelteAst) {
    return svelteAst.instance;
}
exports.getInstanceFromRoot = getInstanceFromRoot;
function getModuleFromRoot(svelteAst) {
    return svelteAst.module;
}
exports.getModuleFromRoot = getModuleFromRoot;
function getOptionsFromRoot(svelteAst) {
    const root = svelteAst;
    if (root.options) {
        return {
            type: "SvelteOptions",
            name: "svelte:options",
            attributes: root.options.attributes,
            fragment: {
                type: "Fragment",
                nodes: [],
                transparent: true,
            },
            start: root.options.start,
            end: root.options.end,
            parent: null,
        };
    }
    return null;
}
exports.getOptionsFromRoot = getOptionsFromRoot;
function getChildren(fragment) {
    var _a;
    return ((_a = fragment.nodes) !== null && _a !== void 0 ? _a : fragment.children);
}
exports.getChildren = getChildren;
function trimChildren(children) {
    if (!startsWithWhitespace(children[0]) &&
        !endsWithWhitespace(children[children.length - 1])) {
        return children;
    }
    const nodes = [...children];
    while (isWhitespace(nodes[0])) {
        nodes.shift();
    }
    const first = nodes[0];
    if (startsWithWhitespace(first)) {
        nodes[0] = Object.assign(Object.assign({}, first), { data: first.data.trimStart() });
    }
    while (isWhitespace(nodes[nodes.length - 1])) {
        nodes.pop();
    }
    const last = nodes[nodes.length - 1];
    if (endsWithWhitespace(last)) {
        nodes[nodes.length - 1] = Object.assign(Object.assign({}, last), { data: last.data.trimEnd() });
    }
    return nodes;
    function startsWithWhitespace(child) {
        if (!child) {
            return false;
        }
        return child.type === "Text" && child.data.trimStart() !== child.data;
    }
    function endsWithWhitespace(child) {
        if (!child) {
            return false;
        }
        return child.type === "Text" && child.data.trimEnd() !== child.data;
    }
    function isWhitespace(child) {
        if (!child) {
            return false;
        }
        return child.type === "Text" && child.data.trim() === "";
    }
}
exports.trimChildren = trimChildren;
function getFragment(element) {
    if (element.fragment) {
        return element.fragment;
    }
    return element;
}
exports.getFragment = getFragment;
function getModifiers(node) {
    var _a;
    return (_a = node.modifiers) !== null && _a !== void 0 ? _a : [];
}
exports.getModifiers = getModifiers;
// IfBlock
function getTestFromIfBlock(block) {
    var _a;
    return ((_a = block.expression) !== null && _a !== void 0 ? _a : block.test);
}
exports.getTestFromIfBlock = getTestFromIfBlock;
function getConsequentFromIfBlock(block) {
    var _a;
    return (_a = block.consequent) !== null && _a !== void 0 ? _a : block;
}
exports.getConsequentFromIfBlock = getConsequentFromIfBlock;
function getAlternateFromIfBlock(block) {
    var _a;
    if (block.alternate) {
        return block.alternate;
    }
    return (_a = block.else) !== null && _a !== void 0 ? _a : null;
}
exports.getAlternateFromIfBlock = getAlternateFromIfBlock;
// EachBlock
function getBodyFromEachBlock(block) {
    if (block.body) {
        return block.body;
    }
    return block;
}
exports.getBodyFromEachBlock = getBodyFromEachBlock;
function getFallbackFromEachBlock(block) {
    var _a;
    if (block.fallback) {
        return block.fallback;
    }
    return (_a = block.else) !== null && _a !== void 0 ? _a : null;
}
exports.getFallbackFromEachBlock = getFallbackFromEachBlock;
// AwaitBlock
function getPendingFromAwaitBlock(block) {
    const pending = block.pending;
    if (!pending) {
        return null;
    }
    if (pending.type === "Fragment") {
        return pending;
    }
    return pending.skip ? null : pending;
}
exports.getPendingFromAwaitBlock = getPendingFromAwaitBlock;
function getThenFromAwaitBlock(block) {
    const then = block.then;
    if (!then) {
        return null;
    }
    if (then.type === "Fragment") {
        return then;
    }
    return then.skip ? null : then;
}
exports.getThenFromAwaitBlock = getThenFromAwaitBlock;
function getCatchFromAwaitBlock(block) {
    const catchFragment = block.catch;
    if (!catchFragment) {
        return null;
    }
    if (catchFragment.type === "Fragment") {
        return catchFragment;
    }
    return catchFragment.skip ? null : catchFragment;
}
exports.getCatchFromAwaitBlock = getCatchFromAwaitBlock;
// ConstTag
function getDeclaratorFromConstTag(node) {
    var _a, _b, _c;
    return ((_c = (_b = (_a = node.declaration) === null || _a === void 0 ? void 0 : _a.declarations) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : node.expression);
}
exports.getDeclaratorFromConstTag = getDeclaratorFromConstTag;
