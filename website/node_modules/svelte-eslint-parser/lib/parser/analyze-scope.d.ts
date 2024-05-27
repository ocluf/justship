import type ESTree from "estree";
import type { ScopeManager } from "eslint-scope";
import type { SvelteScriptElement, SvelteSnippetBlock } from "../ast";
import type { NormalizedParserOptions } from "./parser-options";
/**
 * Analyze scope
 */
export declare function analyzeScope(node: ESTree.Node, parserOptions: NormalizedParserOptions): ScopeManager;
/** Analyze reactive scope */
export declare function analyzeReactiveScope(scopeManager: ScopeManager): void;
/**
 * Analyze store scope. e.g. $count
 */
export declare function analyzeStoreScope(scopeManager: ScopeManager): void;
/** Transform props exports */
export declare function analyzePropsScope(body: SvelteScriptElement, scopeManager: ScopeManager): void;
/** Analyze snippets in component scope */
export declare function analyzeSnippetsScope(snippets: SvelteSnippetBlock[], scopeManager: ScopeManager): void;
