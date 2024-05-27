"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
/* lazy is kind on an intermediate type. If you call schema.describe() with any argument, even schema.describe({}) which this library does by default, then the lazy functions always try to resolve to their return types. Because we always call schema.describe({}) or schema.describe(ResolveOptions) this is mostly unused but should still be here and return an empty type if it does exist in the schema description for some reason */
var lazyConverter = function (description, converters) {
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = lazyConverter;
