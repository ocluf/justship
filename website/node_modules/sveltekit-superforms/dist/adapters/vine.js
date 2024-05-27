import { createAdapter, createJsonSchema } from './adapters.js';
import { memoize } from '../memoize.js';
async function modules() {
    const { Vine, errors } = await import(/* webpackIgnore: true */ '@vinejs/vine');
    return { Vine, errors };
}
const fetchModule = /* @__PURE__ */ memoize(modules);
async function validate(schema, data) {
    const { Vine, errors } = await fetchModule();
    try {
        const output = await new Vine().validate({ schema, data });
        return {
            success: true,
            data: output
        };
    }
    catch (e) {
        if (e instanceof errors.E_VALIDATION_ERROR) {
            return {
                success: false,
                issues: e.messages.map((m) => ({
                    path: m.field.split('.'),
                    message: m.message
                }))
            };
        }
        else {
            return { success: false, issues: [] };
        }
    }
}
function _vine(schema, options) {
    return createAdapter({
        superFormValidationLibrary: 'vine',
        validate: async (data) => validate(schema, data),
        jsonSchema: createJsonSchema(options),
        defaults: options.defaults
    });
}
function _vineClient(schema) {
    return {
        superFormValidationLibrary: 'vine',
        validate: async (data) => validate(schema, data)
    };
}
export const vine = /* @__PURE__ */ memoize(_vine);
export const vineClient = /* @__PURE__ */ memoize(_vineClient);
