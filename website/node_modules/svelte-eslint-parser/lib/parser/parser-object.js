"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTSESLintParserObject = exports.maybeTSESLintParserObject = exports.isBasicParserObject = exports.isEnhancedParserObject = exports.isParserObject = void 0;
/** Checks whether given object is ParserObject */
function isParserObject(value) {
    return isEnhancedParserObject(value) || isBasicParserObject(value);
}
exports.isParserObject = isParserObject;
/** Checks whether given object is EnhancedParserObject */
function isEnhancedParserObject(value) {
    return Boolean(value && typeof value.parseForESLint === "function");
}
exports.isEnhancedParserObject = isEnhancedParserObject;
/** Checks whether given object is BasicParserObject */
function isBasicParserObject(value) {
    return Boolean(value && typeof value.parse === "function");
}
exports.isBasicParserObject = isBasicParserObject;
/** Checks whether given object maybe "@typescript-eslint/parser" */
function maybeTSESLintParserObject(value) {
    return (isEnhancedParserObject(value) &&
        isBasicParserObject(value) &&
        typeof value.createProgram === "function" &&
        typeof value.clearCaches === "function" &&
        typeof value.version === "string");
}
exports.maybeTSESLintParserObject = maybeTSESLintParserObject;
/** Checks whether given object is "@typescript-eslint/parser" */
function isTSESLintParserObject(value) {
    if (!isEnhancedParserObject(value))
        return false;
    try {
        const result = value.parseForESLint("", {});
        const services = result.services;
        return Boolean(services &&
            services.esTreeNodeToTSNodeMap &&
            services.tsNodeToESTreeNodeMap);
    }
    catch (_a) {
        return false;
    }
}
exports.isTSESLintParserObject = isTSESLintParserObject;
