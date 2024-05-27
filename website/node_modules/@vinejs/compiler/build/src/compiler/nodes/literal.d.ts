import { BaseNode } from './base.js';
import type { Compiler } from '../main.js';
import type { CompilerBuffer } from '../buffer.js';
import type { LiteralNode, CompilerParent, CompilerField } from '../../types.js';
/**
 * Compiles a literal schema node to JS string output.
 */
export declare class LiteralNodeCompiler extends BaseNode {
    #private;
    constructor(node: LiteralNode, buffer: CompilerBuffer, compiler: Compiler, parent: CompilerParent, parentField?: CompilerField);
    compile(): void;
}
