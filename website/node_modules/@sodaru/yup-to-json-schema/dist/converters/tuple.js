"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
// @ts-expect-error description is known
var tupleConverter = function (description, converters) {
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    jsonSchema.type = "array";
    jsonSchema.items = description.innerType.map(function (description) {
        var converter = converters[description.type];
        return converter(description, converters);
    });
    jsonSchema.minItems = jsonSchema.items.length;
    jsonSchema.maxItems = jsonSchema.items.length;
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = tupleConverter;
