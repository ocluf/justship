"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var getType = function (item) {
    switch (typeof item) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "object":
            if (Array.isArray(item)) {
                return "array";
            }
            else if (item === null) {
                return "null";
            }
            else if (item instanceof Date) {
                return "string";
            }
            else {
                return "object";
            }
        default:
            return "null";
    }
};
var mixedConverter = function (description, converters) {
    var _a;
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    var types = Array.isArray(description.type)
        ? description.type
        : [description.type];
    types = types.filter(function (type) { return type !== "mixed"; });
    if (((_a = description.oneOf) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        description.oneOf.forEach(function (item) {
            types.push(getType(item));
        });
    }
    if (description.default !== undefined) {
        types.push(getType(description.default));
    }
    types = types.filter(function (type, index, self) { return self.indexOf(type) === index; });
    jsonSchema.type = types;
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = mixedConverter;
