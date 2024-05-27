import { BaseLiteralType } from '../base/literal.js';
import type { FieldOptions, Validation } from '../../types.js';
/**
 * VineAny represents a value that can be anything
 */
export declare class VineAny extends BaseLiteralType<any, any> {
    constructor(options?: Partial<FieldOptions>, validations?: Validation<any>[]);
    /**
     * Clones the VineAny schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
