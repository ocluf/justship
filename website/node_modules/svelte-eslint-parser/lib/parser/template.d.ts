/// <reference types="svelte" />
import type * as Compiler from "svelte/compiler";
import type * as SvAST from "./svelte-ast-types";
import type { Context } from "../context";
import type { SvelteProgram } from "../ast";
import type { NormalizedParserOptions } from "./parser-options";
/**
 * Parse for template
 */
export declare function parseTemplate(code: string, ctx: Context, parserOptions: NormalizedParserOptions): {
    ast: SvelteProgram;
    svelteAst: Compiler.Root | SvAST.AstLegacy;
};
