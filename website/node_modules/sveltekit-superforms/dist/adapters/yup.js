import { createAdapter } from './adapters.js';
import { splitPath } from '../stringPath.js';
import { memoize } from '../memoize.js';
import { convertSchema } from './yup-to-json-schema/index.js';
const modules = async () => {
    const { ValidationError } = await import(/* webpackIgnore: true */ 'yup');
    return { ValidationError };
};
const fetchModule = /* @__PURE__ */ memoize(modules);
/* @__NO_SIDE_EFFECTS__ */
export function yupToJSONSchema(schema) {
    return convertSchema(schema, {
        converters: {
            date: (desc, options) => {
                return options.string(desc, options);
            }
        }
    });
}
async function validate(schema, data) {
    const { ValidationError } = await fetchModule();
    try {
        return {
            success: true,
            data: await schema.validate(data, { strict: true, abortEarly: false })
        };
    }
    catch (error) {
        if (!(error instanceof ValidationError))
            throw error;
        return {
            success: false,
            issues: error.inner.map((error) => ({
                message: error.message,
                path: error.path !== null && error.path !== undefined ? splitPath(error.path) : undefined
            }))
        };
    }
}
/* @__NO_SIDE_EFFECTS__ */
function _yup(schema, options) {
    return createAdapter({
        superFormValidationLibrary: 'yup',
        validate: async (data) => validate(schema, data),
        jsonSchema: options?.jsonSchema ?? yupToJSONSchema(schema),
        defaults: options?.defaults
    });
}
function _yupClient(schema) {
    return {
        superFormValidationLibrary: 'yup',
        validate: async (data) => validate(schema, data)
    };
}
export const yup = /* @__PURE__ */ memoize(_yup);
export const yupClient = /* @__PURE__ */ memoize(_yupClient);
