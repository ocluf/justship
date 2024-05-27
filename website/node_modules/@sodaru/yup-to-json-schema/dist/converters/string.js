"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidRegExPattern = void 0;
var common_1 = __importDefault(require("./common"));
exports.uuidRegExPattern = "^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$";
var stringConverter = function (description, converters) {
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    description.tests.forEach(function (test) {
        var _a, _b, _c, _d;
        switch (test.name) {
            case "length":
                if (((_a = test.params) === null || _a === void 0 ? void 0 : _a.length) !== undefined) {
                    jsonSchema.minLength = Number(test.params.length);
                    jsonSchema.maxLength = Number(test.params.length);
                }
                break;
            case "min":
                if (((_b = test.params) === null || _b === void 0 ? void 0 : _b.min) !== undefined) {
                    jsonSchema.minLength = Number(test.params.min);
                }
                break;
            case "max":
                if (((_c = test.params) === null || _c === void 0 ? void 0 : _c.max) !== undefined) {
                    jsonSchema.maxLength = Number(test.params.max);
                }
                break;
            case "matches":
                if ((_d = test.params) === null || _d === void 0 ? void 0 : _d.regex) {
                    jsonSchema.pattern = test.params.regex
                        .toString()
                        .replace(/^\/(.*)\/[gimusy]*$/, "$1");
                }
                break;
            case "email":
                jsonSchema.format = "email";
                break;
            case "url":
                jsonSchema.format = "uri";
                break;
            case "uuid":
                jsonSchema.format = "uuid";
                jsonSchema.pattern = exports.uuidRegExPattern;
                break;
        }
    });
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = stringConverter;
