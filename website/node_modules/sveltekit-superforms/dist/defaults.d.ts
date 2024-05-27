import type { ValidationAdapter, ClientValidationAdapter } from './adapters/adapters.js';
import type { SuperValidateOptions, SuperValidated } from './superValidate.js';
type SuperSchemaData<T extends Record<string, unknown>> = Partial<T> | null | undefined;
type SuperSchemaOptions<T extends Record<string, unknown>> = Pick<SuperValidateOptions<T>, 'id' | 'defaults'>;
export declare function defaults<Out extends Record<string, unknown>, M = App.Superforms.Message extends never ? any : App.Superforms.Message, In extends Record<string, unknown> = Out>(adapter: ValidationAdapter<Out, In>, options?: SuperSchemaOptions<Out>): SuperValidated<Out, M, In>;
export declare function defaults<Out extends Record<string, unknown>, M = App.Superforms.Message extends never ? any : App.Superforms.Message, In extends Record<string, unknown> = Out>(defaults: SuperSchemaData<Out>, adapter: ValidationAdapter<Out, In>, options?: SuperSchemaOptions<Out>): SuperValidated<Out, M, In>;
export declare function defaults<Out extends Record<string, unknown>, M = App.Superforms.Message extends never ? any : App.Superforms.Message, In extends Record<string, unknown> = Out>(defaults: Out, adapter: ClientValidationAdapter<Out, In>, options?: SuperSchemaOptions<Out>): SuperValidated<Out, M, In>;
export declare function defaultValues<T extends Record<string, unknown>>(adapter: ValidationAdapter<T, Record<string, unknown>>): T;
export {};
