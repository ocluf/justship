import { createAdapter } from './adapters.js';
import { memoize } from '../memoize.js';
import convert from './joi-to-json-schema/index.js';
async function validate(schema, data) {
    const result = schema.validate(data, { abortEarly: false });
    if (result.error == null) {
        return {
            data: result.value,
            success: true
        };
    }
    return {
        issues: result.error.details.map(({ message, path }) => ({
            message,
            path
        })),
        success: false
    };
}
/* @__NO_SIDE_EFFECTS__ */
function _joi(schema, options) {
    return createAdapter({
        superFormValidationLibrary: 'joi',
        jsonSchema: options?.jsonSchema ?? convert(schema),
        defaults: options?.defaults,
        validate: async (data) => validate(schema, data)
    });
}
function _joiClient(schema) {
    return {
        superFormValidationLibrary: 'joi',
        validate: async (data) => validate(schema, data)
    };
}
export const joi = /* @__PURE__ */ memoize(_joi);
export const joiClient = /* @__PURE__ */ memoize(_joiClient);
