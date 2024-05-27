import { CompilerOptions } from '../types.js';
/**
 * Returns JS fragment for inline error messages for errors raised
 * by the compiler.
 */
export declare function defineInlineErrorMessages(messages: Required<Exclude<CompilerOptions['messages'], undefined>>): string;
