import type { FieldContext } from '@vinejs/compiler/types';
import type { AlphaOptions, MobileOptions, PassportOptions, CreditCardOptions, PostalCodeOptions } from '../../types.js';
/**
 * Validates the value to be a string
 */
export declare const stringRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Validates the value to be a valid email address
 */
export declare const emailRule: (options?: import("validator/lib/isEmail.js").IsEmailOptions | undefined) => import("../../types.js").Validation<import("validator/lib/isEmail.js").IsEmailOptions | undefined>;
/**
 * Validates the value to be a valid mobile number
 */
export declare const mobileRule: (options?: MobileOptions | ((field: FieldContext) => MobileOptions | undefined) | undefined) => import("../../types.js").Validation<MobileOptions | ((field: FieldContext) => MobileOptions | undefined) | undefined>;
/**
 * Validates the value to be a valid IP address.
 */
export declare const ipAddressRule: (options?: {
    version: 4 | 6;
} | undefined) => import("../../types.js").Validation<{
    version: 4 | 6;
} | undefined>;
/**
 * Validates the value against a regular expression
 */
export declare const regexRule: (options: RegExp) => import("../../types.js").Validation<RegExp>;
/**
 * Validates the value to be a valid hex color code
 */
export declare const hexCodeRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Validates the value to be a valid URL
 */
export declare const urlRule: (options?: import("validator/lib/isURL.js").IsURLOptions | undefined) => import("../../types.js").Validation<import("validator/lib/isURL.js").IsURLOptions | undefined>;
/**
 * Validates the value to be an active URL
 */
export declare const activeUrlRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Validates the value to contain only letters
 */
export declare const alphaRule: (options?: AlphaOptions | undefined) => import("../../types.js").Validation<AlphaOptions | undefined>;
/**
 * Validates the value to contain only letters and numbers
 */
export declare const alphaNumericRule: (options?: AlphaOptions | undefined) => import("../../types.js").Validation<AlphaOptions | undefined>;
/**
 * Enforce a minimum length on a string field
 */
export declare const minLengthRule: (options: {
    min: number;
}) => import("../../types.js").Validation<{
    min: number;
}>;
/**
 * Enforce a maximum length on a string field
 */
export declare const maxLengthRule: (options: {
    max: number;
}) => import("../../types.js").Validation<{
    max: number;
}>;
/**
 * Enforce a fixed length on a string field
 */
export declare const fixedLengthRule: (options: {
    size: number;
}) => import("../../types.js").Validation<{
    size: number;
}>;
/**
 * Ensure the value ends with the pre-defined substring
 */
export declare const endsWithRule: (options: {
    substring: string;
}) => import("../../types.js").Validation<{
    substring: string;
}>;
/**
 * Ensure the value starts with the pre-defined substring
 */
export declare const startsWithRule: (options: {
    substring: string;
}) => import("../../types.js").Validation<{
    substring: string;
}>;
/**
 * Ensure the field's value under validation is the same as the other field's value
 */
export declare const sameAsRule: (options: {
    otherField: string;
}) => import("../../types.js").Validation<{
    otherField: string;
}>;
/**
 * Ensure the field's value under validation is different from another field's value
 */
export declare const notSameAsRule: (options: {
    otherField: string;
}) => import("../../types.js").Validation<{
    otherField: string;
}>;
/**
 * Ensure the field under validation is confirmed by
 * having another field with the same name
 */
export declare const confirmedRule: (options?: {
    confirmationField: string;
} | undefined) => import("../../types.js").Validation<{
    confirmationField: string;
} | undefined>;
/**
 * Trims whitespaces around the string value
 */
export declare const trimRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Normalizes the email address
 */
export declare const normalizeEmailRule: (options?: import("validator").NormalizeEmailOptions | undefined) => import("../../types.js").Validation<import("validator").NormalizeEmailOptions | undefined>;
/**
 * Converts the field value to UPPERCASE.
 */
export declare const toUpperCaseRule: (options?: string | string[] | undefined) => import("../../types.js").Validation<string | string[] | undefined>;
/**
 * Converts the field value to lowercase.
 */
export declare const toLowerCaseRule: (options?: string | string[] | undefined) => import("../../types.js").Validation<string | string[] | undefined>;
/**
 * Converts the field value to camelCase.
 */
export declare const toCamelCaseRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Escape string for HTML entities
 */
export declare const escapeRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Normalize a URL
 */
export declare const normalizeUrlRule: (options?: import("normalize-url").Options | undefined) => import("../../types.js").Validation<import("normalize-url").Options | undefined>;
/**
 * Ensure the field's value under validation is a subset of the pre-defined list.
 */
export declare const inRule: (options: {
    choices: string[] | ((field: FieldContext) => string[]);
}) => import("../../types.js").Validation<{
    choices: string[] | ((field: FieldContext) => string[]);
}>;
/**
 * Ensure the field's value under validation is not inside the pre-defined list.
 */
export declare const notInRule: (options: {
    list: string[] | ((field: FieldContext) => string[]);
}) => import("../../types.js").Validation<{
    list: string[] | ((field: FieldContext) => string[]);
}>;
/**
 * Validates the value to be a valid credit card number
 */
export declare const creditCardRule: (options?: CreditCardOptions | ((field: FieldContext) => CreditCardOptions | void | undefined) | undefined) => import("../../types.js").Validation<CreditCardOptions | ((field: FieldContext) => CreditCardOptions | void | undefined) | undefined>;
/**
 * Validates the value to be a valid passport number
 */
export declare const passportRule: (options: PassportOptions | ((field: FieldContext) => PassportOptions)) => import("../../types.js").Validation<PassportOptions | ((field: FieldContext) => PassportOptions)>;
/**
 * Validates the value to be a valid postal code
 */
export declare const postalCodeRule: (options?: PostalCodeOptions | ((field: FieldContext) => PostalCodeOptions | void | undefined) | undefined) => import("../../types.js").Validation<PostalCodeOptions | ((field: FieldContext) => PostalCodeOptions | void | undefined) | undefined>;
/**
 * Validates the value to be a valid UUID
 */
export declare const uuidRule: (options?: {
    version?: (1 | 2 | 4 | 3 | 5)[] | undefined;
} | undefined) => import("../../types.js").Validation<{
    version?: (1 | 2 | 4 | 3 | 5)[] | undefined;
} | undefined>;
/**
 * Validates the value contains ASCII characters only
 */
export declare const asciiRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Validates the value to be a valid IBAN number
 */
export declare const ibanRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Validates the value to be a valid JWT token
 */
export declare const jwtRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Ensure the value is a string with latitude and longitude coordinates
 */
export declare const coordinatesRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
