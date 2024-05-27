import { BaseLiteralType } from '../base/literal.js';
import type { FieldOptions, Validation } from '../../types.js';
/**
 * VineLiteral represents a type that matches an exact value
 */
export declare class VineLiteral<Value> extends BaseLiteralType<Value, Value> {
    #private;
    /**
     * Default collection of literal rules
     */
    static rules: {
        equals: (options: {
            expectedValue: any;
        }) => Validation<{
            expectedValue: any;
        }>;
    };
    constructor(value: Value, options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Clones the VineLiteral schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
