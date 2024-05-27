import { BaseNode } from './base.js';
import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { CompilerField, CompilerParent, ArrayNode } from '../../types.js';
/**
 * Compiles an array schema node to JS string output.
 */
export declare class ArrayNodeCompiler extends BaseNode {
    #private;
    constructor(node: ArrayNode, buffer: CompilerBuffer, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    compile(): void;
}
