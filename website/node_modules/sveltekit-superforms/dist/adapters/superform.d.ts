import type { ClientValidationAdapter } from './adapters.js';
import type { MaybePromise } from '../utils.js';
export type Validators<T extends Record<string, unknown>> = {
    [P in keyof T]?: T extends any ? T[P] extends Record<string, unknown> ? Validators<T[P]> : NonNullable<T[P]> extends (infer A)[] ? A extends Record<string, unknown> ? Validators<A> : Validator<T[P]> : Validator<T[P]> : never;
};
export type Validator<V> = (value?: V) => MaybePromise<string | string[] | null | undefined>;
/**
 * @deprecated This adapter requires you to do error-prone type checking yourself. If possible, use one of the supported validation libraries instead.
 */
export declare const superformClient: <T extends Record<string, unknown>, T2 extends Partial<T> = Partial<T>>(schema: Validators<T2>) => ClientValidationAdapter<T>;
