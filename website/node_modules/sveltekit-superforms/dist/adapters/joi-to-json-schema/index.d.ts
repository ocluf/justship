import type { JSONSchema } from '../../jsonSchema/index.js';
type Joi = Record<string, any>;
type Transformer = (schema: JSONSchema, joi: Joi, transformer?: Transformer) => JSONSchema;
/**
 * Converts the supplied joi validation object into a JSON schema object,
 * optionally applying a transformation.
 *
 * @param {JoiValidation} joi
 * @param {TransformFunction} [transformer=null]
 * @returns {JSONSchema}
 */
declare function convert(joi: Record<string, any>, transformer?: Transformer): JSONSchema;
declare namespace convert {
    var TYPES: Record<string, Transformer>;
}
export default convert;
/**
 * Joi Validation Object
 * @typedef {object} JoiValidation
 */
/**
 * Transformation Function - applied just before `convert()` returns and called as `function(object):object`
 * @typedef {function} TransformFunction
 */
/**
 * JSON Schema Object
 * @typedef {object} JSONSchema
 */
