import commonConverter from './common.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getType = (item) => {
    switch (typeof item) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'object':
            if (Array.isArray(item)) {
                return 'array';
            }
            else if (item === null) {
                return 'null';
            }
            else if (item instanceof Date) {
                return 'string';
            }
            else {
                return 'object';
            }
        default:
            return 'null';
    }
};
const mixedConverter = (description, converters) => {
    const jsonSchema = commonConverter(description, converters);
    const meta = description.meta || {};
    let types = Array.isArray(description.type) ? description.type : [description.type];
    types = types.filter((type) => type !== 'mixed');
    if (description.oneOf?.length > 0) {
        description.oneOf.forEach((item) => {
            types.push(getType(item));
        });
    }
    if (description.default !== undefined) {
        types.push(getType(description.default));
    }
    types = types.filter((type, index, self) => self.indexOf(type) === index);
    jsonSchema.type = types;
    return Object.assign(jsonSchema, meta.jsonSchema);
};
export default mixedConverter;
