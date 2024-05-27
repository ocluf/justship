import type { TSchema, SchemaOptions } from '../schema/index';
import type { TProperties } from '../object/index';
import { type TMappedResult } from '../mapped/index';
import { type TIndexPropertyKeys } from './indexed-property-keys';
import { type TIndex } from './index';
type TFromProperties<T extends TSchema, P extends TProperties> = ({
    [K2 in keyof P]: TIndex<T, TIndexPropertyKeys<P[K2]>>;
});
type TFromMappedResult<T extends TSchema, R extends TMappedResult> = (TFromProperties<T, R['properties']>);
export type TIndexFromMappedResult<T extends TSchema, R extends TMappedResult, P extends TProperties = TFromMappedResult<T, R>> = (TMappedResult<P>);
export declare function IndexFromMappedResult<T extends TSchema, R extends TMappedResult, P extends TProperties = TFromMappedResult<T, R>>(T: T, R: R, options: SchemaOptions): TMappedResult<P>;
export {};
