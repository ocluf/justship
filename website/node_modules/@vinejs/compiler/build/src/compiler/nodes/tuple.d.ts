import { BaseNode } from './base.js';
import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { CompilerField, CompilerParent, TupleNode } from '../../types.js';
/**
 * Compiles a tuple schema node to JS string output.
 */
export declare class TupleNodeCompiler extends BaseNode {
    #private;
    constructor(node: TupleNode, buffer: CompilerBuffer, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    compile(): void;
}
