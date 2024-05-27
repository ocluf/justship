/** `[Json]` Omits compositing symbols from this schema. */
export function Strict(schema) {
    return JSON.parse(JSON.stringify(schema));
}
