/**
 * Simple JSON Schema generator for validation libraries without introspection.
 */
export function simpleSchema(value) {
    if (value === null || value === undefined) {
        return {};
    }
    switch (typeof value) {
        case 'object': {
            if (value instanceof Date) {
                return { type: 'integer', format: 'unix-time' };
            }
            const output = { type: 'array' };
            if (Array.isArray(value)) {
                if (value.length)
                    output.items = simpleSchema(value[0]);
                return output;
            }
            else {
                const obj = value;
                return {
                    type: 'object',
                    properties: Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, simpleSchema(value)])),
                    required: Object.keys(obj).filter((key) => (!obj[key] && obj[key] !== undefined && obj[key] !== null) ||
                        (Array.isArray(obj[key]) && !obj[key].length)),
                    additionalProperties: false
                };
            }
        }
    }
    return { type: typeof value };
}
