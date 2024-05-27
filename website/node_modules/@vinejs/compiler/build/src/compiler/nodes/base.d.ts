import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { CompilerField, CompilerNodes, CompilerParent } from '../../types.js';
export declare abstract class BaseNode {
    #private;
    protected field: CompilerField;
    constructor(node: CompilerNodes, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    protected defineField(buffer: CompilerBuffer): void;
}
