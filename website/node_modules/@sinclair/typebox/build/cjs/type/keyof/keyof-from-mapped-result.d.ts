import type { SchemaOptions } from '../schema/index';
import type { Ensure, Evaluate } from '../helpers/index';
import type { TProperties } from '../object/index';
import { type TMappedResult } from '../mapped/index';
import { type TKeyOf } from './keyof';
type TFromProperties<K extends TProperties> = ({
    [K2 in keyof K]: TKeyOf<K[K2]>;
});
type TFromMappedResult<R extends TMappedResult> = (Evaluate<TFromProperties<R['properties']>>);
export type TKeyOfFromMappedResult<R extends TMappedResult, P extends TProperties = TFromMappedResult<R>> = (Ensure<TMappedResult<P>>);
export declare function KeyOfFromMappedResult<R extends TMappedResult, P extends TProperties = TFromMappedResult<R>>(R: R, options: SchemaOptions): TMappedResult<P>;
export {};
