import commonConverter from './common.js';
const booleanConverter = (description, converters) => {
    const jsonSchema = commonConverter(description, converters);
    const meta = description.meta || {};
    return Object.assign(jsonSchema, meta.jsonSchema);
};
export default booleanConverter;
