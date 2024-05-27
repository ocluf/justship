import { HasTransform, TransformDecode, TransformEncode, TransformDecodeCheckError, TransformEncodeCheckError } from '../transform/index.mjs';
import { Mutate as MutateValue } from '../mutate/index.mjs';
import { Hash as HashValue } from '../hash/index.mjs';
import { Equal as EqualValue } from '../equal/index.mjs';
import { Cast as CastValue } from '../cast/index.mjs';
import { Clone as CloneValue } from '../clone/index.mjs';
import { Convert as ConvertValue } from '../convert/index.mjs';
import { Create as CreateValue } from '../create/index.mjs';
import { Clean as CleanValue } from '../clean/index.mjs';
import { Check as CheckValue } from '../check/index.mjs';
import { Default as DefaultValue } from '../default/index.mjs';
import { Diff as DiffValue, Patch as PatchValue } from '../delta/index.mjs';
import { Errors as ValueErrors } from '../../errors/index.mjs';
/** Casts a value into a given type. The return value will retain as much information of the original value as possible. */
export function Cast(...args) {
    return CastValue.apply(CastValue, args);
}
/** Creates a value from the given type */
export function Create(...args) {
    return CreateValue.apply(CreateValue, args);
}
/** Returns true if the value matches the given type */
export function Check(...args) {
    return CheckValue.apply(CheckValue, args);
}
/** `[Mutable]` Removes excess properties from a value and returns the result. This function does not check the value and returns an unknown type. You should Check the result before use. Clean is a mutable operation. To avoid mutation, Clone the value first. */
export function Clean(...args) {
    return CleanValue.apply(CleanValue, args);
}
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
export function Convert(...args) {
    return ConvertValue.apply(ConvertValue, args);
}
/** Returns a structural clone of the given value */
export function Clone(value) {
    return CloneValue(value);
}
/** Decodes a value or throws if error */
export function Decode(...args) {
    const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
    if (!Check(schema, references, value))
        throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
    return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
/** `[Mutable]` Generates missing properties on a value using default schema annotations if available. This function does not check the value and returns an unknown type. You should Check the result before use. Default is a mutable operation. To avoid mutation, Clone the value first. */
export function Default(...args) {
    return DefaultValue.apply(DefaultValue, args);
}
/** Encodes a value or throws if error */
export function Encode(...args) {
    const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
    const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
    if (!Check(schema, references, encoded))
        throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
    return encoded;
}
/** Returns an iterator for each error in this value. */
export function Errors(...args) {
    return ValueErrors.apply(ValueErrors, args);
}
/** Returns true if left and right values are structurally equal */
export function Equal(left, right) {
    return EqualValue(left, right);
}
/** Returns edits to transform the current value into the next value */
export function Diff(current, next) {
    return DiffValue(current, next);
}
/** Returns a FNV1A-64 non cryptographic hash of the given value */
export function Hash(value) {
    return HashValue(value);
}
/** Returns a new value with edits applied to the given value */
export function Patch(current, edits) {
    return PatchValue(current, edits);
}
/** `[Mutable]` Performs a deep mutable value assignment while retaining internal references. */
export function Mutate(current, next) {
    MutateValue(current, next);
}
