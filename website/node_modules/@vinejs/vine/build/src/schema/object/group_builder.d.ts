import { ObjectGroup } from './group.js';
import { OTYPE, COTYPE } from '../../symbols.js';
import { CamelCase } from '../camelcase_types.js';
import { GroupConditional } from './conditional.js';
import type { FieldContext, SchemaTypes } from '../../types.js';
/**
 * Create an object group. Groups are used to conditionally merge properties
 * to an existing object.
 */
export declare function group<Conditional extends GroupConditional<any, any, any>>(conditionals: Conditional[]): ObjectGroup<Conditional>;
export declare namespace group {
    var _a: <Properties extends Record<string, SchemaTypes>>(conditon: (value: Record<string, unknown>, field: FieldContext) => any, properties: Properties) => GroupConditional<Properties, { [K in keyof Properties]: Properties[K][typeof OTYPE]; }, { [K_1 in keyof Properties as CamelCase<K_1 & string>]: Properties[K_1][typeof COTYPE]; }>;
    var _b: <Properties extends Record<string, SchemaTypes>>(properties: Properties) => GroupConditional<Properties, { [K in keyof Properties]: Properties[K][typeof OTYPE]; }, { [K_1 in keyof Properties as CamelCase<K_1 & string>]: Properties[K_1][typeof COTYPE]; }>;
    export { _a as if, _b as else };
}
