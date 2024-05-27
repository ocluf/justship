import { createAdapter } from './adapters.js';
import { memoize } from '../memoize.js';
// From https://github.com/sinclairzx81/typebox/tree/ca4d771b87ee1f8e953036c95a21da7150786d3e/example/formats
const Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
async function modules() {
    const { TypeCompiler } = await import(/* webpackIgnore: true */ '@sinclair/typebox/compiler');
    const { FormatRegistry } = await import(/* webpackIgnore: true */ '@sinclair/typebox');
    return { TypeCompiler, FormatRegistry };
}
const fetchModule = /* @__PURE__ */ memoize(modules);
async function validate(schema, data) {
    const { TypeCompiler, FormatRegistry } = await fetchModule();
    if (!compiled.has(schema)) {
        compiled.set(schema, TypeCompiler.Compile(schema));
    }
    if (!FormatRegistry.Has('email')) {
        FormatRegistry.Set('email', (value) => Email.test(value));
    }
    const validator = compiled.get(schema);
    const errors = [...(validator?.Errors(data) ?? [])];
    if (!errors.length) {
        return { success: true, data: data };
    }
    return {
        success: false,
        issues: errors.map((issue) => ({
            path: issue.path.substring(1).split('/'),
            message: issue.message
        }))
    };
}
function _typebox(schema) {
    return createAdapter({
        superFormValidationLibrary: 'typebox',
        validate: async (data) => validate(schema, data),
        jsonSchema: schema
    });
}
function _typeboxClient(schema) {
    return {
        superFormValidationLibrary: 'typebox',
        validate: async (data) => validate(schema, data)
    };
}
export const typebox = /* @__PURE__ */ memoize(_typebox);
export const typeboxClient = /* @__PURE__ */ memoize(_typeboxClient);
const compiled = new WeakMap();
