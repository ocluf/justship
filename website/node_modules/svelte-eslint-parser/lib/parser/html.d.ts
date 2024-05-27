/// <reference types="svelte" />
import type * as Compiler from "svelte/compiler";
/** Parse HTML attributes */
export declare function parseAttributes(code: string, startIndex: number): {
    attributes: Compiler.Attribute[];
    index: number;
};
