"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var commonConverter = function (description, converters) {
    var _a, _b;
    var jsonSchema = {};
    jsonSchema.type = description.type;
    if (description.nullable) {
        jsonSchema.type = [jsonSchema.type, "null"];
    }
    if (((_a = description.oneOf) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        jsonSchema.enum = description.oneOf;
    }
    if (((_b = description.notOneOf) === null || _b === void 0 ? void 0 : _b.length) > 0) {
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
exports.default = commonConverter;
