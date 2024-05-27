import { type ValidationAdapter, type Infer, type InferIn, type ClientValidationAdapter } from './adapters.js';
import type { TSchema } from '@sinclair/typebox';
export declare const typebox: <T extends TSchema>(schema: T) => ValidationAdapter<Infer<T>, InferIn<T>>;
export declare const typeboxClient: <T extends TSchema>(schema: T) => ClientValidationAdapter<Infer<T>, InferIn<T>>;
