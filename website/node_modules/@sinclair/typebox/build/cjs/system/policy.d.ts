export declare namespace TypeSystemPolicy {
    /** Shared assertion routines used by the value and errors modules */
    /** Sets whether TypeBox should assert optional properties using the TypeScript `exactOptionalPropertyTypes` assertion policy. The default is `false` */
    let ExactOptionalPropertyTypes: boolean;
    /** Sets whether arrays should be treated as a kind of objects. The default is `false` */
    let AllowArrayObject: boolean;
    /** Sets whether `NaN` or `Infinity` should be treated as valid numeric values. The default is `false` */
    let AllowNaN: boolean;
    /** Sets whether `null` should validate for void types. The default is `false` */
    let AllowNullVoid: boolean;
    /** Asserts this value using the ExactOptionalPropertyTypes policy */
    function IsExactOptionalProperty(value: Record<keyof any, unknown>, key: string): boolean;
    /** Asserts this value using the AllowArrayObjects policy */
    function IsObjectLike(value: unknown): value is Record<keyof any, unknown>;
    /** Asserts this value as a record using the AllowArrayObjects policy */
    function IsRecordLike(value: unknown): value is Record<keyof any, unknown>;
    /** Asserts this value using the AllowNaN policy */
    function IsNumberLike(value: unknown): value is number;
    /** Asserts this value using the AllowVoidNull policy */
    function IsVoidLike(value: unknown): value is void;
}
