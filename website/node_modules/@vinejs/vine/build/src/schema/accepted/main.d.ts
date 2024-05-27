import { BaseLiteralType } from '../base/literal.js';
import type { FieldOptions, Validation } from '../../types.js';
/**
 * VineAccepted represents a checkbox input that must be checked
 */
export declare class VineAccepted extends BaseLiteralType<true, true> {
    /**
     * Default collection of accepted rules
     */
    static rules: {
        accepted: (options?: undefined) => Validation<undefined>;
    };
    constructor(options?: Partial<FieldOptions>, validations?: Validation<any>[]);
    /**
     * Clones the VineAccepted schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
