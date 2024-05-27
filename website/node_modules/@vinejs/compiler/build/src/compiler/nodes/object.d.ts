import { BaseNode } from './base.js';
import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { CompilerField, CompilerParent, ObjectNode } from '../../types.js';
/**
 * Compiles an object schema node to JS string output.
 */
export declare class ObjectNodeCompiler extends BaseNode {
    #private;
    constructor(node: ObjectNode, buffer: CompilerBuffer, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    compile(): void;
}
