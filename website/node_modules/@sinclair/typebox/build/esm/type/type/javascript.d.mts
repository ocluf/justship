import { JsonTypeBuilder } from './json.mjs';
import { type TAsyncIterator } from '../async-iterator/index.mjs';
import { type TAwaited } from '../awaited/index.mjs';
import { type TBigInt, type BigIntOptions } from '../bigint/index.mjs';
import { type TConstructor } from '../constructor/index.mjs';
import { type TConstructorParameters } from '../constructor-parameters/index.mjs';
import { type TDate, type DateOptions } from '../date/index.mjs';
import { type TFunction } from '../function/index.mjs';
import { type TInstanceType } from '../instance-type/index.mjs';
import { type TIterator } from '../iterator/index.mjs';
import { type TParameters } from '../parameters/index.mjs';
import { type TPromise } from '../promise/index.mjs';
import { type TRegExp, RegExpOptions } from '../regexp/index.mjs';
import { type TReturnType } from '../return-type/index.mjs';
import { type TSchema, type SchemaOptions } from '../schema/index.mjs';
import { type TSymbol } from '../symbol/index.mjs';
import { type TUint8Array, type Uint8ArrayOptions } from '../uint8array/index.mjs';
import { type TUndefined } from '../undefined/index.mjs';
import { type TVoid } from '../void/index.mjs';
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
