"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("./common"));
var dateConverter = function (description, converters) {
    var jsonSchema = common_1.default(description, converters);
    var meta = description.meta || {};
    jsonSchema.type = "string";
    jsonSchema.format = "date-time";
    return Object.assign(jsonSchema, meta.jsonSchema);
};
exports.default = dateConverter;
