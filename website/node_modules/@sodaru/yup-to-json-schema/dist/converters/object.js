"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
// @ts-expect-error description is known
var objectConverter = function (description, converters) {
    /*   Yup automatically adds an object where each key is undefined as the deafault in its description. So objects automatically get a default :(. The developer should use jsonSchema({ default: undefined }) to remedy this */
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    var properties = {};
    var required = [];
    Object.keys(description.fields).forEach(function (fieldName) {
        var fieldDescription = description.fields[fieldName];
        var converter = converters[fieldDescription.type];
        properties[fieldName] = converter(fieldDescription, converters);
        if (!fieldDescription.optional) {
            required.push(fieldName);
        }
    });
    if (Object.keys(properties).length > 0) {
        jsonSchema.properties = properties;
    }
    if (Object.keys(required).length > 0) {
        jsonSchema.required = required;
    }
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = objectConverter;
