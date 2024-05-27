import { BaseLiteralType } from '../base/literal.js';
import { IS_OF_TYPE, UNIQUE_NAME } from '../../symbols.js';
import type { FieldOptions, Validation } from '../../types.js';
/**
 * VineBoolean represents a boolean value in the validation schema.
 */
export declare class VineBoolean extends BaseLiteralType<boolean, boolean> {
    /**
     * Default collection of boolean rules
     */
    static rules: {
        boolean: (options: {
            strict?: boolean | undefined;
        }) => Validation<{
            strict?: boolean | undefined;
        }>;
    };
    protected options: FieldOptions & {
        strict?: boolean;
    };
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of boolean type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(options?: Partial<FieldOptions> & {
        strict?: boolean;
    }, validations?: Validation<any>[]);
    /**
     * Clones the VineBoolean schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
