"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaScriptTypeBuilder = void 0;
const json_1 = require("./json");
const index_1 = require("../async-iterator/index");
const index_2 = require("../awaited/index");
const index_3 = require("../bigint/index");
const index_4 = require("../constructor/index");
const index_5 = require("../constructor-parameters/index");
const index_6 = require("../date/index");
const index_7 = require("../function/index");
const index_8 = require("../instance-type/index");
const index_9 = require("../iterator/index");
const index_10 = require("../parameters/index");
const index_11 = require("../promise/index");
const index_12 = require("../regexp/index");
const index_13 = require("../return-type/index");
const index_14 = require("../symbol/index");
const index_15 = require("../uint8array/index");
const index_16 = require("../undefined/index");
const index_17 = require("../void/index");
/** JavaScript Type Builder with Static Resolution for TypeScript */
class JavaScriptTypeBuilder extends json_1.JsonTypeBuilder {
    /** `[JavaScript]` Creates a AsyncIterator type */
    AsyncIterator(items, options = {}) {
        return (0, index_1.AsyncIterator)(items, options);
    }
    /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
    Awaited(schema, options = {}) {
        return (0, index_2.Awaited)(schema, options);
    }
    /** `[JavaScript]` Creates a BigInt type */
    BigInt(options = {}) {
        return (0, index_3.BigInt)(options);
    }
    /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
    ConstructorParameters(schema, options = {}) {
        return (0, index_5.ConstructorParameters)(schema, options);
    }
    /** `[JavaScript]` Creates a Constructor type */
    Constructor(parameters, returns, options) {
        return (0, index_4.Constructor)(parameters, returns, options);
    }
    /** `[JavaScript]` Creates a Date type */
    Date(options = {}) {
        return (0, index_6.Date)(options);
    }
    /** `[JavaScript]` Creates a Function type */
    Function(parameters, returns, options) {
        return (0, index_7.Function)(parameters, returns, options);
    }
    /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
    InstanceType(schema, options = {}) {
        return (0, index_8.InstanceType)(schema, options);
    }
    /** `[JavaScript]` Creates an Iterator type */
    Iterator(items, options = {}) {
        return (0, index_9.Iterator)(items, options);
    }
    /** `[JavaScript]` Extracts the Parameters from the given Function type */
    Parameters(schema, options = {}) {
        return (0, index_10.Parameters)(schema, options);
    }
    /** `[JavaScript]` Creates a Promise type */
    Promise(item, options = {}) {
        return (0, index_11.Promise)(item, options);
    }
    /** `[JavaScript]` Creates a RegExp type */
    RegExp(unresolved, options = {}) {
        return (0, index_12.RegExp)(unresolved, options);
    }
    /** `[JavaScript]` Extracts the ReturnType from the given Function type */
    ReturnType(schema, options = {}) {
        return (0, index_13.ReturnType)(schema, options);
    }
    /** `[JavaScript]` Creates a Symbol type */
    Symbol(options) {
        return (0, index_14.Symbol)(options);
    }
    /** `[JavaScript]` Creates a Undefined type */
    Undefined(options = {}) {
        return (0, index_16.Undefined)(options);
    }
    /** `[JavaScript]` Creates a Uint8Array type */
    Uint8Array(options = {}) {
        return (0, index_15.Uint8Array)(options);
    }
    /** `[JavaScript]` Creates a Void type */
    Void(options = {}) {
        return (0, index_17.Void)(options);
    }
}
exports.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
