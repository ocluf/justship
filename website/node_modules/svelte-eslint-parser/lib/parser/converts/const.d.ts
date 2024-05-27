/// <reference types="svelte" />
import type { SvelteConstTag } from "../../ast";
import type { Context } from "../../context";
import type * as SvAST from "../svelte-ast-types";
import type * as Compiler from "svelte/compiler";
/** Convert for ConstTag */
export declare function convertConstTag(node: SvAST.ConstTag | Compiler.ConstTag, parent: SvelteConstTag["parent"], ctx: Context): SvelteConstTag;
