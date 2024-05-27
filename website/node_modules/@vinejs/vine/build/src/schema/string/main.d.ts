import { BaseLiteralType } from '../base/literal.js';
import { IS_OF_TYPE, UNIQUE_NAME } from '../../symbols.js';
import type { Validation, AlphaOptions, FieldContext, FieldOptions, AlphaNumericOptions, NormalizeEmailOptions } from '../../types.js';
import { urlRule, uuidRule, emailRule, mobileRule, passportRule, creditCardRule, postalCodeRule, normalizeUrlRule } from './rules.js';
/**
 * VineString represents a string value in the validation schema.
 */
export declare class VineString extends BaseLiteralType<string, string> {
    static rules: {
        in: (options: {
            choices: string[] | ((field: FieldContext) => string[]);
        }) => Validation<{
            choices: string[] | ((field: FieldContext) => string[]);
        }>;
        jwt: (options?: undefined) => Validation<undefined>;
        url: (options?: import("validator/lib/isURL.js").IsURLOptions | undefined) => Validation<import("validator/lib/isURL.js").IsURLOptions | undefined>;
        iban: (options?: undefined) => Validation<undefined>;
        uuid: (options?: {
            version?: (1 | 2 | 4 | 3 | 5)[] | undefined;
        } | undefined) => Validation<{
            version?: (1 | 2 | 4 | 3 | 5)[] | undefined;
        } | undefined>;
        trim: (options?: undefined) => Validation<undefined>;
        email: (options?: import("validator/lib/isEmail.js").IsEmailOptions | undefined) => Validation<import("validator/lib/isEmail.js").IsEmailOptions | undefined>;
        alpha: (options?: AlphaOptions | undefined) => Validation<AlphaOptions | undefined>;
        ascii: (options?: undefined) => Validation<undefined>;
        notIn: (options: {
            list: string[] | ((field: FieldContext) => string[]);
        }) => Validation<{
            list: string[] | ((field: FieldContext) => string[]);
        }>;
        regex: (options: RegExp) => Validation<RegExp>;
        escape: (options?: undefined) => Validation<undefined>;
        sameAs: (options: {
            otherField: string;
        }) => Validation<{
            otherField: string;
        }>;
        mobile: (options?: import("../../types.js").MobileOptions | ((field: FieldContext) => import("../../types.js").MobileOptions | undefined) | undefined) => Validation<import("../../types.js").MobileOptions | ((field: FieldContext) => import("../../types.js").MobileOptions | undefined) | undefined>;
        string: (options?: undefined) => Validation<undefined>;
        hexCode: (options?: undefined) => Validation<undefined>;
        passport: (options: import("../../types.js").PassportOptions | ((field: FieldContext) => import("../../types.js").PassportOptions)) => Validation<import("../../types.js").PassportOptions | ((field: FieldContext) => import("../../types.js").PassportOptions)>;
        endsWith: (options: {
            substring: string;
        }) => Validation<{
            substring: string;
        }>;
        confirmed: (options?: {
            confirmationField: string;
        } | undefined) => Validation<{
            confirmationField: string;
        } | undefined>;
        activeUrl: (options?: undefined) => Validation<undefined>;
        minLength: (options: {
            min: number;
        }) => Validation<{
            min: number;
        }>;
        notSameAs: (options: {
            otherField: string;
        }) => Validation<{
            otherField: string;
        }>;
        maxLength: (options: {
            max: number;
        }) => Validation<{
            max: number;
        }>;
        ipAddress: (options?: {
            version: 4 | 6;
        } | undefined) => Validation<{
            version: 4 | 6;
        } | undefined>;
        creditCard: (options?: import("../../types.js").CreditCardOptions | ((field: FieldContext) => void | import("../../types.js").CreditCardOptions | undefined) | undefined) => Validation<import("../../types.js").CreditCardOptions | ((field: FieldContext) => void | import("../../types.js").CreditCardOptions | undefined) | undefined>;
        postalCode: (options?: import("../../types.js").PostalCodeOptions | ((field: FieldContext) => void | import("../../types.js").PostalCodeOptions | undefined) | undefined) => Validation<import("../../types.js").PostalCodeOptions | ((field: FieldContext) => void | import("../../types.js").PostalCodeOptions | undefined) | undefined>;
        startsWith: (options: {
            substring: string;
        }) => Validation<{
            substring: string;
        }>;
        toUpperCase: (options?: string | string[] | undefined) => Validation<string | string[] | undefined>;
        toLowerCase: (options?: string | string[] | undefined) => Validation<string | string[] | undefined>;
        toCamelCase: (options?: undefined) => Validation<undefined>;
        fixedLength: (options: {
            size: number;
        }) => Validation<{
            size: number;
        }>;
        coordinates: (options?: undefined) => Validation<undefined>;
        normalizeUrl: (options?: import("normalize-url").Options | undefined) => Validation<import("normalize-url").Options | undefined>;
        alphaNumeric: (options?: AlphaOptions | undefined) => Validation<AlphaOptions | undefined>;
        normalizeEmail: (options?: import("validator").NormalizeEmailOptions | undefined) => Validation<import("validator").NormalizeEmailOptions | undefined>;
    };
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of string type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Validates the value to be a valid URL
     */
    url(...args: Parameters<typeof urlRule>): this;
    /**
     * Validates the value to be an active URL
     */
    activeUrl(): this;
    /**
     * Validates the value to be a valid email address
     */
    email(...args: Parameters<typeof emailRule>): this;
    /**
     * Validates the value to be a valid mobile number
     */
    mobile(...args: Parameters<typeof mobileRule>): this;
    /**
     * Validates the value to be a valid IP address.
     */
    ipAddress(version?: 4 | 6): this;
    /**
     * Validates the value to be a valid hex color code
     */
    hexCode(): this;
    /**
     * Validates the value to be an active URL
     */
    regex(expression: RegExp): this;
    /**
     * Validates the value to contain only letters
     */
    alpha(options?: AlphaOptions): this;
    /**
     * Validates the value to contain only letters and
     * numbers
     */
    alphaNumeric(options?: AlphaNumericOptions): this;
    /**
     * Enforce a minimum length on a string field
     */
    minLength(expectedLength: number): this;
    /**
     * Enforce a maximum length on a string field
     */
    maxLength(expectedLength: number): this;
    /**
     * Enforce a fixed length on a string field
     */
    fixedLength(expectedLength: number): this;
    /**
     * Ensure the field under validation is confirmed by
     * having another field with the same name.
     */
    confirmed(options?: {
        confirmationField: string;
    }): this;
    /**
     * Trims whitespaces around the string value
     */
    trim(): this;
    /**
     * Normalizes the email address
     */
    normalizeEmail(options?: NormalizeEmailOptions): this;
    /**
     * Converts the field value to UPPERCASE.
     */
    toUpperCase(): this;
    /**
     * Converts the field value to lowercase.
     */
    toLowerCase(): this;
    /**
     * Converts the field value to camelCase.
     */
    toCamelCase(): this;
    /**
     * Escape string for HTML entities
     */
    escape(): this;
    /**
     * Normalize a URL
     */
    normalizeUrl(...args: Parameters<typeof normalizeUrlRule>): this;
    /**
     * Ensure the value starts with the pre-defined substring
     */
    startsWith(substring: string): this;
    /**
     * Ensure the value ends with the pre-defined substring
     */
    endsWith(substring: string): this;
    /**
     * Ensure the value ends with the pre-defined substring
     */
    sameAs(otherField: string): this;
    /**
     * Ensure the value ends with the pre-defined substring
     */
    notSameAs(otherField: string): this;
    /**
     * Ensure the field's value under validation is a subset of the pre-defined list.
     */
    in(choices: string[] | ((field: FieldContext) => string[])): this;
    /**
     * Ensure the field's value under validation is not inside the pre-defined list.
     */
    notIn(list: string[] | ((field: FieldContext) => string[])): this;
    /**
     * Validates the value to be a valid credit card number
     */
    creditCard(...args: Parameters<typeof creditCardRule>): this;
    /**
     * Validates the value to be a valid passport number
     */
    passport(...args: Parameters<typeof passportRule>): this;
    /**
     * Validates the value to be a valid postal code
     */
    postalCode(...args: Parameters<typeof postalCodeRule>): this;
    /**
     * Validates the value to be a valid UUID
     */
    uuid(...args: Parameters<typeof uuidRule>): this;
    /**
     * Validates the value contains ASCII characters only
     */
    ascii(): this;
    /**
     * Validates the value to be a valid IBAN number
     */
    iban(): this;
    /**
     * Validates the value to be a valid JWT token
     */
    jwt(): this;
    /**
     * Ensure the value is a string with latitude and longitude coordinates
     */
    coordinates(): this;
    /**
     * Clones the VineString schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
