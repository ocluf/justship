import { constraints as schemaConstraints } from '../jsonSchema/constraints.js';
import { defaultValues } from '../jsonSchema/schemaDefaults.js';
import { schemaShape } from '../jsonSchema/schemaShape.js';
import { schemaHash } from '../jsonSchema/schemaHash.js';
import { SuperFormError } from '../errors.js';
import { simpleSchema } from './simple-schema/index.js';
/**
 * If the adapter options doesn't have a "defaults" or "jsonSchema" fields,
 * this is a convenient function for creating a JSON schema.
 * If no transformer exist for the adapter, use RequiredDefaultsOptions.
 * @see {AdapterOptions}
 * @see {RequiredDefaultsOptions}
 * @__NO_SIDE_EFFECTS__
 */
export function createJsonSchema(options, transformer) {
    return 'jsonSchema' in options && options.jsonSchema
        ? options.jsonSchema
        : !transformer && 'defaults' in options && options.defaults
            ? simpleSchema(options.defaults)
            : transformer
                ? /* @__PURE__ */ transformer()
                : () => {
                    throw new SuperFormError('The "defaults" option is required for this adapter.');
                };
}
/* @__NO_SIDE_EFFECTS__ */
export function createAdapter(adapter, jsonSchema) {
    if (!adapter || !('superFormValidationLibrary' in adapter)) {
        throw new SuperFormError('Superforms v2 requires a validation adapter for the schema. ' +
            'Import one of your choice from "sveltekit-superforms/adapters" and wrap the schema with it.');
    }
    if (!jsonSchema)
        jsonSchema = adapter.jsonSchema;
    return {
        ...adapter,
        constraints: adapter.constraints ?? schemaConstraints(jsonSchema),
        defaults: adapter.defaults ?? defaultValues(jsonSchema),
        shape: schemaShape(jsonSchema),
        id: schemaHash(jsonSchema)
    };
}
