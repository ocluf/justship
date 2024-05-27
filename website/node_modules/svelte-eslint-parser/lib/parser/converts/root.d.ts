/// <reference types="svelte" />
import type * as SvAST from "../svelte-ast-types";
import type * as Compiler from "svelte/compiler";
import type { SvelteProgram } from "../../ast";
import type { Context } from "../../context";
/**
 * Convert root
 */
export declare function convertSvelteRoot(svelteAst: Compiler.Root | SvAST.AstLegacy, ctx: Context): SvelteProgram;
