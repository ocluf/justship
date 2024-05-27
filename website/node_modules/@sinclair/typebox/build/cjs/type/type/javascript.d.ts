import { JsonTypeBuilder } from './json';
import { type TAsyncIterator } from '../async-iterator/index';
import { type TAwaited } from '../awaited/index';
import { type TBigInt, type BigIntOptions } from '../bigint/index';
import { type TConstructor } from '../constructor/index';
import { type TConstructorParameters } from '../constructor-parameters/index';
import { type TDate, type DateOptions } from '../date/index';
import { type TFunction } from '../function/index';
import { type TInstanceType } from '../instance-type/index';
import { type TIterator } from '../iterator/index';
import { type TParameters } from '../parameters/index';
import { type TPromise } from '../promise/index';
import { type TRegExp, RegExpOptions } from '../regexp/index';
import { type TReturnType } from '../return-type/index';
import { type TSchema, type SchemaOptions } from '../schema/index';
import { type TSymbol } from '../symbol/index';
import { type TUint8Array, type Uint8ArrayOptions } from '../uint8array/index';
import { type TUndefined } from '../undefined/index';
import { type TVoid } from '../void/index';
/** JavaScript Type Builder with Static Resolution for TypeScript */
export declare class JavaScriptTypeBuilder extends JsonTypeBuilder {
    /** `[JavaScript]` Creates a AsyncIterator type */
    AsyncIterator<T extends TSchema>(items: T, options?: SchemaOptions): TAsyncIterator<T>;
    /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
    Awaited<T extends TSchema>(schema: T, options?: SchemaOptions): TAwaited<T>;
    /** `[JavaScript]` Creates a BigInt type */
    BigInt(options?: BigIntOptions): TBigInt;
    /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
    ConstructorParameters<T extends TConstructor<TSchema[], TSchema>>(schema: T, options?: SchemaOptions): TConstructorParameters<T>;
    /** `[JavaScript]` Creates a Constructor type */
    Constructor<T extends TSchema[], U extends TSchema>(parameters: [...T], returns: U, options?: SchemaOptions): TConstructor<T, U>;
    /** `[JavaScript]` Creates a Date type */
    Date(options?: DateOptions): TDate;
    /** `[JavaScript]` Creates a Function type */
    Function<T extends TSchema[], U extends TSchema>(parameters: [...T], returns: U, options?: SchemaOptions): TFunction<T, U>;
    /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
    InstanceType<T extends TConstructor<any[], any>>(schema: T, options?: SchemaOptions): TInstanceType<T>;
    /** `[JavaScript]` Creates an Iterator type */
    Iterator<T extends TSchema>(items: T, options?: SchemaOptions): TIterator<T>;
    /** `[JavaScript]` Extracts the Parameters from the given Function type */
    Parameters<T extends TFunction<TSchema[], TSchema>>(schema: T, options?: SchemaOptions): TParameters<T>;
    /** `[JavaScript]` Creates a Promise type */
    Promise<T extends TSchema>(item: T, options?: SchemaOptions): TPromise<T>;
    /** `[JavaScript]` Creates a RegExp type */
    RegExp(pattern: string, options?: RegExpOptions): TRegExp;
    /** `[JavaScript]` Creates a RegExp type */
    RegExp(regex: RegExp, options?: RegExpOptions): TRegExp;
    /** `[JavaScript]` Extracts the ReturnType from the given Function type */
    ReturnType<T extends TFunction<any[], any>>(schema: T, options?: SchemaOptions): TReturnType<T>;
    /** `[JavaScript]` Creates a Symbol type */
    Symbol(options?: SchemaOptions): TSymbol;
    /** `[JavaScript]` Creates a Undefined type */
    Undefined(options?: SchemaOptions): TUndefined;
    /** `[JavaScript]` Creates a Uint8Array type */
    Uint8Array(options?: Uint8ArrayOptions): TUint8Array;
    /** `[JavaScript]` Creates a Void type */
    Void(options?: SchemaOptions): TVoid;
}
