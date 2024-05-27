import type { SchemaOptions } from '../schema/index.mjs';
import type { Ensure, Evaluate } from '../helpers/index.mjs';
import type { TProperties } from '../object/index.mjs';
import { type TMappedResult } from '../mapped/index.mjs';
import { type TOmit } from './omit.mjs';
type TFromProperties<P extends TProperties, K extends PropertyKey[]> = ({
    [K2 in keyof P]: TOmit<P[K2], K>;
});
type TFromMappedResult<R extends TMappedResult, K extends PropertyKey[]> = (Evaluate<TFromProperties<R['properties'], K>>);
export type TOmitFromMappedResult<T extends TMappedResult, K extends PropertyKey[], P extends TProperties = TFromMappedResult<T, K>> = (Ensure<TMappedResult<P>>);
export declare function OmitFromMappedResult<R extends TMappedResult, K extends PropertyKey[], P extends TProperties = TFromMappedResult<R, K>>(R: R, K: [...K], options: SchemaOptions): TMappedResult<P>;
export {};
