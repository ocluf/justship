// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commonConverter = (description, converters) => {
    const jsonSchema = {};
    jsonSchema.type = description.type;
    if (description.nullable) {
        jsonSchema.type = [jsonSchema.type, 'null'];
    }
    if (description.oneOf?.length > 0) {
        jsonSchema.enum = description.oneOf;
    }
    if (description.notOneOf?.length > 0) {
        jsonSchema.not = {
            enum: description.notOneOf
        };
    }
    if (description.label) {
        jsonSchema.title = description.label;
    }
    if (description.default !== undefined) {
        // @ts-expect-error default is unknown
        jsonSchema.default = description.default;
    }
    return jsonSchema;
};
export default commonConverter;
