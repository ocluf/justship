import { BaseNode } from './base.js';
import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { CompilerField, CompilerParent, RecordNode } from '../../types.js';
/**
 * Compiles a record schema node to JS string output.
 */
export declare class RecordNodeCompiler extends BaseNode {
    #private;
    constructor(node: RecordNode, buffer: CompilerBuffer, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    compile(): void;
}
