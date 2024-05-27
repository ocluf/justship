import type { SuperValidateOptions } from './superValidate.js';
import type { JSONSchema } from './index.js';
type ParsedData = {
    id: string | undefined;
    posted: boolean;
    data: Record<string, unknown> | null | undefined;
};
export declare function parseRequest<T extends Record<string, unknown>>(data: unknown, schemaData: JSONSchema, options?: SuperValidateOptions<T>): Promise<ParsedData>;
export declare function parseSearchParams<T extends Record<string, unknown>>(data: URL | URLSearchParams, schemaData: JSONSchema, options?: SuperValidateOptions<T>): ParsedData;
export declare function parseFormData<T extends Record<string, unknown>>(formData: FormData, schemaData: JSONSchema, options?: SuperValidateOptions<T>): ParsedData;
export {};
