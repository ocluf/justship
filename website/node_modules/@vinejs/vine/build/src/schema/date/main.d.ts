import { BaseLiteralType } from '../base/literal.js';
import { IS_OF_TYPE, UNIQUE_NAME } from '../../symbols.js';
import type { Validation, FieldOptions, FieldContext, DateFieldOptions, DateEqualsOptions } from '../../types.js';
/**
 * VineDate represents a Date object created by parsing a
 * string or number value as a date.
 */
export declare class VineDate extends BaseLiteralType<Date, Date> {
    /**
     * Available VineDate rules
     */
    static rules: {
        equals: (options: {
            expectedValue: string | ((field: FieldContext) => string);
        } & DateEqualsOptions) => Validation<{
            expectedValue: string | ((field: FieldContext) => string);
        } & DateEqualsOptions>;
        after: (options: {
            expectedValue: (string & {
                _?: undefined;
            }) | "today" | "tomorrow" | ((field: FieldContext) => string);
        } & DateEqualsOptions) => Validation<{
            expectedValue: (string & {
                _?: undefined;
            }) | "today" | "tomorrow" | ((field: FieldContext) => string);
        } & DateEqualsOptions>;
        afterOrEqual: (options: {
            expectedValue: "today" | "tomorrow" | (string & {
                _?: undefined;
            }) | ((field: FieldContext) => string);
        } & DateEqualsOptions) => Validation<{
            expectedValue: "today" | "tomorrow" | (string & {
                _?: undefined;
            }) | ((field: FieldContext) => string);
        } & DateEqualsOptions>;
        before: (options: {
            expectedValue: "today" | (string & {
                _?: undefined;
            }) | "yesterday" | ((field: FieldContext) => string);
        } & DateEqualsOptions) => Validation<{
            expectedValue: "today" | (string & {
                _?: undefined;
            }) | "yesterday" | ((field: FieldContext) => string);
        } & DateEqualsOptions>;
        beforeOrEqual: (options: {
            expectedValue: "today" | "yesterday" | (string & {
                _?: undefined;
            }) | ((field: FieldContext) => string);
        } & DateEqualsOptions) => Validation<{
            expectedValue: "today" | "yesterday" | (string & {
                _?: undefined;
            }) | ((field: FieldContext) => string);
        } & DateEqualsOptions>;
        sameAs: (options: {
            otherField: string;
        } & DateEqualsOptions) => Validation<{
            otherField: string;
        } & DateEqualsOptions>;
        notSameAs: (options: {
            otherField: string;
        } & DateEqualsOptions) => Validation<{
            otherField: string;
        } & DateEqualsOptions>;
        afterField: (options: {
            otherField: string;
        } & DateEqualsOptions) => Validation<{
            otherField: string;
        } & DateEqualsOptions>;
        afterOrSameAs: (options: {
            otherField: string;
        } & DateEqualsOptions) => Validation<{
            otherField: string;
        } & DateEqualsOptions>;
        beforeField: (options: {
            otherField: string;
        } & DateEqualsOptions) => Validation<{
            otherField: string;
        } & DateEqualsOptions>;
        beforeOrSameAs: (options: {
            otherField: string;
        } & DateEqualsOptions) => Validation<{
            otherField: string;
        } & DateEqualsOptions>;
        weekend: (options?: undefined) => Validation<undefined>;
        weekday: (options?: undefined) => Validation<undefined>;
    };
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of date type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    protected options: FieldOptions & DateFieldOptions;
    constructor(options?: Partial<FieldOptions> & DateFieldOptions, validations?: Validation<any>[]);
    /**
     * The equals rule compares the input value to be same
     * as the expected value.
     *
     * By default, the comparions of day, month and years are performed.
     */
    equals(expectedValue: string | ((field: FieldContext) => string), options?: DateEqualsOptions): this;
    /**
     * The after rule compares the input value to be after
     * the expected value.
     *
     * By default, the comparions of day, month and years are performed.
     */
    after(expectedValue: 'today' | 'tomorrow' | (string & {
        _?: never;
    }) | ((field: FieldContext) => string), options?: DateEqualsOptions): this;
    /**
     * The after or equal rule compares the input value to be
     * after or equal to the expected value.
     *
     * By default, the comparions of day, month and years are performed.
     */
    afterOrEqual(expectedValue: 'today' | 'tomorrow' | (string & {
        _?: never;
    }) | ((field: FieldContext) => string), options?: DateEqualsOptions): this;
    /**
     * The before rule compares the input value to be before
     * the expected value.
     *
     * By default, the comparions of day, month and years are performed.
     */
    before(expectedValue: 'today' | 'yesterday' | (string & {
        _?: never;
    }) | ((field: FieldContext) => string), options?: DateEqualsOptions): this;
    /**
     * The before rule compares the input value to be before
     * the expected value.
     *
     * By default, the comparions of day, month and years are performed.
     */
    beforeOrEqual(expectedValue: 'today' | 'yesterday' | (string & {
        _?: never;
    }) | ((field: FieldContext) => string), options?: DateEqualsOptions): this;
    /**
     * The sameAs rule expects the input value to be same
     * as the value of the other field.
     *
     * By default, the comparions of day, month and years are performed
     */
    sameAs(otherField: string, options?: DateEqualsOptions): this;
    /**
     * The notSameAs rule expects the input value to be different
     * from the other field's value
     *
     * By default, the comparions of day, month and years are performed
     */
    notSameAs(otherField: string, options?: DateEqualsOptions): this;
    /**
     * The afterField rule expects the input value to be after
     * the other field's value.
     *
     * By default, the comparions of day, month and years are performed
     */
    afterField(otherField: string, options?: DateEqualsOptions): this;
    /**
     * The afterOrSameAs rule expects the input value to be after
     * or equal to the other field's value.
     *
     * By default, the comparions of day, month and years are performed
     */
    afterOrSameAs(otherField: string, options?: DateEqualsOptions): this;
    /**
     * The beforeField rule expects the input value to be before
     * the other field's value.
     *
     * By default, the comparions of day, month and years are performed
     */
    beforeField(otherField: string, options?: DateEqualsOptions): this;
    /**
     * The beforeOrSameAs rule expects the input value to be before
     * or same as the other field's value.
     *
     * By default, the comparions of day, month and years are performed
     */
    beforeOrSameAs(otherField: string, options?: DateEqualsOptions): this;
    /**
     * The weekend rule ensures the date falls on a weekend
     */
    weekend(): this;
    /**
     * The weekday rule ensures the date falls on a weekday
     */
    weekday(): this;
    /**
     * Clones the VineDate schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
