/// <reference types="svelte" />
import type { SvelteRenderTag } from "../../ast";
import type { Context } from "../../context";
import type * as Compiler from "svelte/compiler";
/** Convert for RenderTag */
export declare function convertRenderTag(node: Compiler.RenderTag, parent: SvelteRenderTag["parent"], ctx: Context): SvelteRenderTag;
