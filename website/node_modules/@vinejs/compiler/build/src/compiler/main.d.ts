import { CompilerBuffer } from './buffer.js';
import type { Refs, RootNode, CompilerField, CompilerNodes, CompilerParent, CompilerOptions, ErrorReporterContract, MessagesProviderContact } from '../types.js';
/**
 * Compiler is used to compile an array of schema nodes into a re-usable
 * JavaScript.
 */
export declare class Compiler {
    #private;
    /**
     * Variables counter is used to generate unique variable
     * names with a counter suffix.
     */
    variablesCounter: number;
    constructor(rootNode: RootNode, options?: CompilerOptions);
    /**
     * Converts a node to a field. Optionally accepts a parent node to create
     * a field for a specific parent type.
     */
    createFieldFor(node: CompilerNodes, parent: CompilerParent): CompilerField;
    /**
     * Compiles a given compiler node
     */
    compileNode(node: CompilerNodes, buffer: CompilerBuffer, parent: CompilerParent, parentField?: CompilerField): void;
    /**
     * Compile schema nodes to an async function
     */
    compile(): (data: any, meta: Record<string, any>, refs: Refs, messagesProvider: MessagesProviderContact, errorReporter: ErrorReporterContract) => Promise<Record<string, any>>;
}
