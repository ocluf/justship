import type { SuperStruct } from '../superStruct.js';
import type { JSONSchema } from './index.js';
export type InputConstraint = Partial<{
    pattern: string;
    min: number | string;
    max: number | string;
    required: boolean;
    step: number | 'any';
    minlength: number;
    maxlength: number;
}>;
export type InputConstraints<T> = SuperStruct<T, InputConstraint>;
export declare function constraints<T>(schema: JSONSchema): InputConstraints<T>;
