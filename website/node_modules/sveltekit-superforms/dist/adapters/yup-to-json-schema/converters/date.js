import commonConverter from './common.js';
const dateConverter = (description, converters) => {
    const jsonSchema = commonConverter(description, converters);
    const meta = description.meta || {};
    jsonSchema.type = 'string';
    jsonSchema.format = 'date-time';
    return Object.assign(jsonSchema, meta.jsonSchema);
};
export default dateConverter;
