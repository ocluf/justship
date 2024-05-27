import { BaseNode } from './base.js';
import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { CompilerField, CompilerParent, UnionNode } from '../../types.js';
/**
 * Compiles a union schema node to JS string output.
 */
export declare class UnionNodeCompiler extends BaseNode {
    #private;
    constructor(node: UnionNode, buffer: CompilerBuffer, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    compile(): void;
}
