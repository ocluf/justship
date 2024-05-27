import { createRule } from './create_rule.js';
import { SchemaBuilder } from '../schema/builder.js';
import { VineValidator } from './validator.js';
import type { Infer, SchemaTypes, MetaDataValidator, ValidationOptions, ErrorReporterContract, MessagesProviderContact } from '../types.js';
/**
 * Validate user input with type-safety using a pre-compiled schema.
 */
export declare class Vine extends SchemaBuilder {
    /**
     * Messages provider to use on the validator
     */
    messagesProvider: MessagesProviderContact;
    /**
     * Error reporter to use on the validator
     */
    errorReporter: () => ErrorReporterContract;
    /**
     * Control whether or not to convert empty strings to null
     */
    convertEmptyStringsToNull: boolean;
    /**
     * Helpers to perform type-checking or cast types keeping
     * HTML forms serialization behavior in mind.
     */
    helpers: {
        exists(value: any): boolean;
        isMissing(value: any): boolean;
        isTrue(value: any): boolean;
        isFalse(value: any): boolean;
        isString(value: unknown): value is string;
        isObject<Value>(value: unknown): value is Record<PropertyKey, Value>;
        hasKeys(value: Record<string, any>, keys: string[]): boolean;
        isArray<Value_1>(value: unknown): value is Value_1[];
        isNumeric(value: any): boolean;
        asNumber(value: any): number;
        asBoolean(value: any): boolean | null;
        isEmail: typeof import("validator/lib/isEmail.js").default;
        isURL: typeof import("validator/lib/isURL.js").default;
        isAlpha: typeof import("validator").isAlpha;
        isAlphaNumeric: typeof import("validator").isAlphanumeric;
        isIP: typeof import("validator").isIP;
        isUUID: typeof import("validator").isUUID;
        isAscii: typeof import("validator").isAscii;
        isCreditCard: typeof import("validator").isCreditCard;
        isIBAN: typeof import("validator/lib/isIBAN.js").default;
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
        isHexColor: (value: string) => boolean;
        isActiveURL: (url: string) => Promise<boolean>;
        isDistinct: (dataSet: any[], fields?: string | string[] | undefined) => boolean;
        getNestedValue(key: string, field: import("@vinejs/compiler/types").FieldContext): any;
    };
    /**
     * Convert a validation function to a Vine schema rule
     */
    createRule: typeof createRule;
    /**
     * Pre-compiles a schema into a validation function.
     *
     * ```ts
     * const validate = vine.compile(schema)
     * await validate({ data })
     * ```
     */
    compile<Schema extends SchemaTypes>(schema: Schema): VineValidator<Schema, Record<string, any> | undefined>;
    /**
     * Define a callback to validate the metadata given to the validator
     * at runtime
     */
    withMetaData<MetaData extends Record<string, any>>(callback?: MetaDataValidator): {
        compile: <Schema extends SchemaTypes>(schema: Schema) => VineValidator<Schema, MetaData>;
    };
    /**
     * Validate data against a schema. Optionally, you can define
     * error messages, fields, a custom messages provider,
     * or an error reporter.
     *
     * ```ts
     * await vine.validate({ schema, data })
     * await vine.validate({ schema, data, messages, fields })
     *
     * await vine.validate({ schema, data, messages, fields }, {
     *   errorReporter
     * })
     * ```
     */
    validate<Schema extends SchemaTypes>(options: {
        /**
         * Schema to use for validation
         */
        schema: Schema;
        /**
         * Data to validate
         */
        data: any;
    } & ValidationOptions<Record<string, any> | undefined>): Promise<Infer<Schema>>;
}
