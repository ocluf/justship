import * as AST from "./ast";
import { traverseNodes } from "./traverse";
import { ParseError } from "./errors";
export { parseForESLint, StyleContext, StyleContextNoStyleElement, StyleContextParseError, StyleContextSuccess, StyleContextUnknownLang, } from "./parser";
export * as meta from "./meta";
export { name } from "./meta";
export { AST, ParseError };
export declare const VisitorKeys: import("eslint").SourceCode.VisitorKeys;
export { traverseNodes };
