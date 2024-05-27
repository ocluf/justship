"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSchema = void 0;
var string_1 = __importDefault(require("./string"));
var number_1 = __importDefault(require("./number"));
var boolean_1 = __importDefault(require("./boolean"));
var date_1 = __importDefault(require("./date"));
var array_1 = __importDefault(require("./array"));
var object_1 = __importDefault(require("./object"));
var tuple_1 = __importDefault(require("./tuple"));
var mixed_1 = __importDefault(require("./mixed"));
var lazy_1 = __importDefault(require("./lazy"));
function convertSchema(yupSchema, options) {
    var _a = options || {}, converters = _a.converters, resolveOptions = __rest(_a, ["converters"]);
    var allConverters = __assign({ string: string_1.default, number: number_1.default, boolean: boolean_1.default, date: date_1.default, array: array_1.default, object: object_1.default, tuple: tuple_1.default, mixed: mixed_1.default, lazy: lazy_1.default }, converters);
    var description = yupSchema.describe(resolveOptions);
    var converter = allConverters[description.type];
    return converter(description, allConverters);
}
exports.convertSchema = convertSchema;
