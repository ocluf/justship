import { TransformKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsTransform } from '../guard/kind.mjs';
// ------------------------------------------------------------------
// TransformBuilders
// ------------------------------------------------------------------
export class TransformDecodeBuilder {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
    }
}
// prettier-ignore
export class TransformEncodeBuilder {
    schema;
    decode;
    constructor(schema, decode) {
        this.schema = schema;
        this.decode = decode;
    }
    EncodeTransform(encode, schema) {
        const Encode = (value) => schema[TransformKind].Encode(encode(value));
        const Decode = (value) => this.decode(schema[TransformKind].Decode(value));
        const Codec = { Encode: Encode, Decode: Decode };
        return { ...schema, [TransformKind]: Codec };
    }
    EncodeSchema(encode, schema) {
        const Codec = { Decode: this.decode, Encode: encode };
        return { ...schema, [TransformKind]: Codec };
    }
    Encode(encode) {
        const schema = CloneType(this.schema);
        return (IsTransform(schema) ? this.EncodeTransform(encode, schema) : this.EncodeSchema(encode, schema));
    }
}
/** `[Json]` Creates a Transform type */
export function Transform(schema) {
    return new TransformDecodeBuilder(schema);
}
