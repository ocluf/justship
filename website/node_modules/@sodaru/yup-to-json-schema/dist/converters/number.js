"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
var numberConverter = function (description, converters) {
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    description.tests.forEach(function (test) {
        var _a, _b, _c, _d;
        switch (test.name) {
            case "min":
                if (((_a = test.params) === null || _a === void 0 ? void 0 : _a.min) !== undefined) {
                    jsonSchema.minimum = Number(test.params.min);
                }
                if (((_b = test.params) === null || _b === void 0 ? void 0 : _b.more) !== undefined) {
                    jsonSchema.exclusiveMinimum = Number(test.params.more);
                }
                break;
            case "max":
                if (((_c = test.params) === null || _c === void 0 ? void 0 : _c.max) !== undefined) {
                    jsonSchema.maximum = Number(test.params.max);
                }
                if (((_d = test.params) === null || _d === void 0 ? void 0 : _d.less) !== undefined) {
                    jsonSchema.exclusiveMaximum = Number(test.params.less);
                }
                break;
            case "integer":
                if (jsonSchema.type === "number") {
                    jsonSchema.type = "integer";
                }
                else {
                    // @ts-expect-error type is known
                    jsonSchema.type = __spreadArrays(jsonSchema.type, ["integer"]).filter(function (type) { return type !== "number"; });
                }
        }
    });
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = numberConverter;
