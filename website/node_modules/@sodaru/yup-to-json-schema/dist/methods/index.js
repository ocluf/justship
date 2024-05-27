"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendSchema = void 0;
function addMethod(yup, name) {
    yup.addMethod(yup.Schema, name, function (value) {
        var _a;
        var meta = this.describe().meta || {};
        return this.meta(__assign(__assign({}, meta), { jsonSchema: __assign(__assign({}, meta.jsonSchema), (_a = {}, _a[name] = value, _a)) }));
    });
}
function extendSchema(yup) {
    addMethod(yup, "example");
    addMethod(yup, "examples");
    addMethod(yup, "description");
    yup.addMethod(yup.Schema, "jsonSchema", function (callback) {
        var meta = this.describe().meta || {};
        return this.meta(__assign(__assign({}, meta), { jsonSchema: callback(meta.jsonSchema || {}) }));
    });
}
exports.extendSchema = extendSchema;
