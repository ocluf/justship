import commonConverter from './common.js';
const arrayConverter = (description, converters) => {
    const jsonSchema = commonConverter(description, converters);
    const meta = description.meta || {};
    const { innerType } = description;
    if (innerType) {
        const converter = converters[innerType.type];
        jsonSchema.items = converter(innerType, converters);
    }
    description.tests.forEach((test) => {
        switch (test.name) {
            case 'length':
                if (test.params?.length !== undefined) {
                    jsonSchema.minItems = jsonSchema.maxItems = Number(test.params.length);
                }
                break;
            case 'min':
                if (test.params?.min !== undefined) {
                    jsonSchema.minItems = Number(test.params.min);
                }
                break;
            case 'max':
                if (test.params?.max !== undefined) {
                    jsonSchema.maxItems = Number(test.params.max);
                }
                break;
        }
    });
    return Object.assign(jsonSchema, meta.jsonSchema);
};
export default arrayConverter;
