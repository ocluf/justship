"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
var arrayConverter = function (description, converters) {
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    var innerType = description.innerType;
    if (innerType) {
        var converter = converters[innerType.type];
        jsonSchema.items = converter(innerType, converters);
    }
    description.tests.forEach(function (test) {
        var _a, _b, _c;
        switch (test.name) {
            case "length":
                if (((_a = test.params) === null || _a === void 0 ? void 0 : _a.length) !== undefined) {
                    jsonSchema.minItems = jsonSchema.maxItems = Number(test.params.length);
                }
                break;
            case "min":
                if (((_b = test.params) === null || _b === void 0 ? void 0 : _b.min) !== undefined) {
                    jsonSchema.minItems = Number(test.params.min);
                }
                break;
            case "max":
                if (((_c = test.params) === null || _c === void 0 ? void 0 : _c.max) !== undefined) {
                    jsonSchema.maxItems = Number(test.params.max);
                }
                break;
        }
    });
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = arrayConverter;
