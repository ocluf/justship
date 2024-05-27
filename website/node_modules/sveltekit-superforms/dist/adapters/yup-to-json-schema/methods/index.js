/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
function addMethod(yup, name) {
    yup.addMethod(yup.Schema, name, function (value) {
        const meta = this.describe().meta || {};
        return this.meta({
            ...meta,
            jsonSchema: {
                ...meta.jsonSchema,
                [name]: value
            }
        });
    });
}
export function extendSchema(yup) {
    addMethod(yup, 'example');
    addMethod(yup, 'examples');
    addMethod(yup, 'description');
    yup.addMethod(yup.Schema, 'jsonSchema', function (callback) {
        const meta = this.describe().meta || {};
        return this.meta({
            ...meta,
            jsonSchema: callback(meta.jsonSchema || {})
        });
    });
}
