import type { FieldContext } from '../../types.js';
/**
 * Validates the value to be required when a certain condition
 * is matched
 */
export declare const requiredWhen: (options: (field: FieldContext) => boolean) => import("../../types.js").Validation<(field: FieldContext) => boolean>;
