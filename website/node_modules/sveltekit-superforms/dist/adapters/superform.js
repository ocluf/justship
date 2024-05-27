import { traversePath, traversePaths } from '../traversal.js';
import { memoize } from '../memoize.js';
function _superform(schema) {
    return {
        superFormValidationLibrary: 'superform',
        async validate(data) {
            // Add top-level validator fields to non-existing data fields
            // so they will be validated even if the field doesn't exist
            if (!data || typeof data !== 'object')
                data = {};
            else
                data = { ...data };
            const newData = data;
            for (const [key, value] of Object.entries(schema)) {
                if (typeof value === 'function' && !(key in newData)) {
                    // Setting undefined fields so they will be validated based on field existance.
                    newData[key] = undefined;
                }
            }
            const output = [];
            function mapErrors(path, errors) {
                if (!errors)
                    return;
                if (typeof errors === 'string')
                    errors = [errors];
                errors.forEach((message) => {
                    output.push({
                        path,
                        message
                    });
                });
            }
            const queue = [];
            traversePaths(newData, async ({ value, path }) => {
                // Filter out array indices, the validator structure doesn't contain these.
                const validationPath = path.filter((p) => /\D/.test(String(p)));
                const maybeValidator = traversePath(schema, validationPath);
                if (typeof maybeValidator?.value === 'function') {
                    const check = maybeValidator.value;
                    queue.push({ path, errors: check(value) });
                }
            });
            const errors = await Promise.all(queue.map((check) => check.errors));
            for (let i = 0; i < errors.length; i++) {
                mapErrors(queue[i].path, errors[i]);
            }
            //console.log('Validating', newData);
            //console.log(output);
            return output.length
                ? {
                    success: false,
                    issues: output
                }
                : {
                    success: true,
                    data: data
                };
        }
    };
}
/**
 * @deprecated This adapter requires you to do error-prone type checking yourself. If possible, use one of the supported validation libraries instead.
 */
export const superformClient = /* @__PURE__ */ memoize(_superform);
