import isURL from 'validator/lib/isURL.js';
import isIBAN from 'validator/lib/isIBAN.js';
import isEmail from 'validator/lib/isEmail.js';
import type { FieldContext } from '../types.js';
/**
 * Collection of helpers used across the codebase to coerce
 * and type-check values from HTML forms.
 */
export declare const helpers: {
    /**
     * Returns true when value is not null and neither
     * undefined
     */
    exists(value: any): boolean;
    /**
     * Returns true when value is null or value is undefined
     */
    isMissing(value: any): boolean;
    /**
     * Returns true when the value is one of the following.
     *
     * true
     * 1
     * "1"
     * "true"
     * "on"
     */
    isTrue(value: any): boolean;
    /**
     * Returns true when the value is one of the following.
     *
     * false
     * 0
     * "0"
     * "false"
     */
    isFalse(value: any): boolean;
    /**
     * Check if the value is a valid string. This method narrows
     * the type of value to string.
     */
    isString(value: unknown): value is string;
    /**
     * Check if the value is a plain JavaScript object. This method
     * filters out null and Arrays and does not consider them as Objects.
     */
    isObject<Value>(value: unknown): value is Record<PropertyKey, Value>;
    /**
     * Check if an object has all the mentioned keys
     */
    hasKeys(value: Record<string, any>, keys: string[]): boolean;
    /**
     * Check if the value is an Array.
     */
    isArray<Value_1>(value: unknown): value is Value_1[];
    /**
     * Check if the value is a number or a string representation of a number.
     */
    isNumeric(value: any): boolean;
    /**
     * Casts the value to a number using the Number method.
     * Returns NaN when unable to cast.
     */
    asNumber(value: any): number;
    /**
     * Casts the value to a boolean.
     *
     * - [true, 1, "1", "true", "on"] will be converted to true.
     * - [false, 0, "0", "false"] will be converted to false.
     * - Everything else will return null. So make sure to handle that case.
     */
    asBoolean(value: any): boolean | null;
    isEmail: typeof isEmail.default;
    isURL: typeof isURL.default;
    isAlpha: typeof import("validator").isAlpha;
    isAlphaNumeric: typeof import("validator").isAlphanumeric;
    isIP: typeof import("validator").isIP;
    isUUID: typeof import("validator").isUUID;
    isAscii: typeof import("validator").isAscii;
    isCreditCard: typeof import("validator").isCreditCard;
    isIBAN: typeof isIBAN.default;
    isJWT: typeof import("validator").isJWT;
    isLatLong: typeof import("validator").isLatLong;
    isMobilePhone: typeof import("validator").isMobilePhone;
    isPassportNumber: typeof import("validator").isPassportNumber;
    isPostalCode: typeof import("validator").isPostalCode;
    isSlug: typeof import("validator").isSlug;
    isDecimal: typeof import("validator").isDecimal;
    mobileLocales: import("validator").MobilePhoneLocale[];
    postalCountryCodes: import("validator").PostalCodeLocale[];
    passportCountryCodes: readonly ["AM", "AR", "AT", "AU", "AZ", "BE", "BG", "BR", "BY", "CA", "CH", "CY", "CZ", "DE", "DK", "DZ", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IN", "ID", "IR", "IS", "IT", "JM", "JP", "KR", "KZ", "LI", "LT", "LU", "LV", "LY", "MT", "MZ", "MY", "MX", "NL", "NZ", "PH", "PK", "PL", "PT", "RO", "RU", "SE", "SL", "SK", "TH", "TR", "UA", "US"];
    /**
     * Check if the value is a valid color hexcode
     */
    isHexColor: (value: string) => boolean;
    /**
     * Check if a URL has valid `A` or `AAAA` DNS records
     */
    isActiveURL: (url: string) => Promise<boolean>;
    /**
     * Check if all the elements inside the dataset are unique.
     *
     * In case of an array of objects, you must provide one or more keys
     * for the fields that must be unique across the objects.
     *
     * ```ts
     * helpers.isDistinct([1, 2, 4, 5]) // true
     *
     * // Null and undefined values are ignored
     * helpers.isDistinct([1, null, 2, null, 4, 5]) // true
     *
     * helpers.isDistinct([
     *   {
     *     email: 'foo@bar.com',
     *     name: 'foo'
     *   },
     *   {
     *     email: 'baz@bar.com',
     *     name: 'baz'
     *   }
     * ], 'email') // true
     *
     * helpers.isDistinct([
     *   {
     *     email: 'foo@bar.com',
     *     tenant_id: 1,
     *     name: 'foo'
     *   },
     *   {
     *     email: 'foo@bar.com',
     *     tenant_id: 2,
     *     name: 'baz'
     *   }
     * ], ['email', 'tenant_id']) // true
     * ```
     */
    isDistinct: (dataSet: any[], fields?: string | string[]) => boolean;
    /**
     * Returns the nested value from the field root
     * object or the sibling value from the field
     * parent object
     */
    getNestedValue(key: string, field: FieldContext): any;
};
