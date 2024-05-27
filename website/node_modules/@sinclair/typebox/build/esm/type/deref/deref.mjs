import { CloneType, CloneRest } from '../clone/type.mjs';
import { Discard } from '../discard/index.mjs';
import { IsUndefined } from '../guard/value.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsConstructor, IsFunction, IsIntersect, IsUnion, IsTuple, IsArray, IsObject, IsPromise, IsAsyncIterator, IsIterator, IsRef } from '../guard/kind.mjs';
function FromRest(schema, references) {
    return schema.map((schema) => Deref(schema, references));
}
// prettier-ignore
function FromProperties(properties, references) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(properties)) {
        Acc[K] = Deref(properties[K], references);
    }
    return Acc;
}
// prettier-ignore
function FromConstructor(schema, references) {
    schema.parameters = FromRest(schema.parameters, references);
    schema.returns = Deref(schema.returns, references);
    return schema;
}
// prettier-ignore
function FromFunction(schema, references) {
    schema.parameters = FromRest(schema.parameters, references);
    schema.returns = Deref(schema.returns, references);
    return schema;
}
// prettier-ignore
function FromIntersect(schema, references) {
    schema.allOf = FromRest(schema.allOf, references);
    return schema;
}
// prettier-ignore
function FromUnion(schema, references) {
    schema.anyOf = FromRest(schema.anyOf, references);
    return schema;
}
// prettier-ignore
function FromTuple(schema, references) {
    if (IsUndefined(schema.items))
        return schema;
    schema.items = FromRest(schema.items, references);
    return schema;
}
// prettier-ignore
function FromArray(schema, references) {
    schema.items = Deref(schema.items, references);
    return schema;
}
// prettier-ignore
function FromObject(schema, references) {
    schema.properties = FromProperties(schema.properties, references);
    return schema;
}
// prettier-ignore
function FromPromise(schema, references) {
    schema.item = Deref(schema.item, references);
    return schema;
}
// prettier-ignore
function FromAsyncIterator(schema, references) {
    schema.items = Deref(schema.items, references);
    return schema;
}
// prettier-ignore
function FromIterator(schema, references) {
    schema.items = Deref(schema.items, references);
    return schema;
}
// prettier-ignore
function FromRef(schema, references) {
    const target = references.find(remote => remote.$id === schema.$ref);
    if (target === undefined)
        throw Error(`Unable to dereference schema with $id ${schema.$ref}`);
    const discard = Discard(target, ['$id']);
    return Deref(discard, references);
}
// prettier-ignore
function DerefResolve(schema, references) {
    return (IsConstructor(schema) ? FromConstructor(schema, references) :
        IsFunction(schema) ? FromFunction(schema, references) :
            IsIntersect(schema) ? FromIntersect(schema, references) :
                IsUnion(schema) ? FromUnion(schema, references) :
                    IsTuple(schema) ? FromTuple(schema, references) :
                        IsArray(schema) ? FromArray(schema, references) :
                            IsObject(schema) ? FromObject(schema, references) :
                                IsPromise(schema) ? FromPromise(schema, references) :
                                    IsAsyncIterator(schema) ? FromAsyncIterator(schema, references) :
                                        IsIterator(schema) ? FromIterator(schema, references) :
                                            IsRef(schema) ? FromRef(schema, references) :
                                                schema);
}
// ------------------------------------------------------------------
// TDeref
// ------------------------------------------------------------------
/** `[Json]` Creates a dereferenced type */
export function Deref(schema, references) {
    return DerefResolve(CloneType(schema), CloneRest(references));
}
