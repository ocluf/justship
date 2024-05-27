/**
 * Compiler buffer to collect JS fragments in memory
 */
export declare class CompilerBuffer {
    #private;
    /**
     * The character used to create a new line
     */
    newLine: string;
    /**
     * Write statement ot the output
     */
    writeStatement(statement: string): void;
    /**
     * Creates a child buffer
     */
    child(): CompilerBuffer;
    /**
     * Returns the buffer contents as string
     */
    toString(): string;
    /**
     * Flush in-memory string
     */
    flush(): void;
}
