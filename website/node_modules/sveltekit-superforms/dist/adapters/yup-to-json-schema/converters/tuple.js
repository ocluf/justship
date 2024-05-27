import commonConverter from './common.js';
// @ts-expect-error description is known
const tupleConverter = (description, converters) => {
    const jsonSchema = commonConverter(description, converters);
    const meta = description.meta || {};
    jsonSchema.type = 'array';
    jsonSchema.items = description.innerType.map((description) => {
        const converter = converters[description.type];
        return converter(description, converters);
    });
    jsonSchema.minItems = jsonSchema.items.length;
    jsonSchema.maxItems = jsonSchema.items.length;
    return Object.assign(jsonSchema, meta.jsonSchema);
};
export default tupleConverter;
