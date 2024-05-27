import type { DateEqualsOptions, DateFieldOptions, FieldContext } from '../../types.js';
export declare const DEFAULT_DATE_FORMATS: string[];
/**
 * Validates the value to be a string or number formatted
 * as per the expected date-time format.
 */
export declare const dateRule: (options: Partial<DateFieldOptions>) => import("../../types.js").Validation<Partial<DateFieldOptions>>;
/**
 * The equals rule compares the input value to be same
 * as the expected value.
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const equalsRule: (options: {
    expectedValue: string | ((field: FieldContext) => string);
} & DateEqualsOptions) => import("../../types.js").Validation<{
    expectedValue: string | ((field: FieldContext) => string);
} & DateEqualsOptions>;
/**
 * The after rule compares the input value to be after
 * the expected value.
 *
 * By default, the comparions of day, month and years are performed.
 */
export declare const afterRule: (options: {
    expectedValue: (string & {
        _?: undefined;
    }) | "today" | "tomorrow" | ((field: FieldContext) => string);
} & DateEqualsOptions) => import("../../types.js").Validation<{
    expectedValue: (string & {
        _?: undefined;
    }) | "today" | "tomorrow" | ((field: FieldContext) => string);
} & DateEqualsOptions>;
/**
 * The after or equal rule compares the input value to be
 * after or equal to the expected value.
 *
 * By default, the comparions of day, month and years are performed.
 */
export declare const afterOrEqualRule: (options: {
    expectedValue: "today" | "tomorrow" | (string & {
        _?: undefined;
    }) | ((field: FieldContext) => string);
} & DateEqualsOptions) => import("../../types.js").Validation<{
    expectedValue: "today" | "tomorrow" | (string & {
        _?: undefined;
    }) | ((field: FieldContext) => string);
} & DateEqualsOptions>;
/**
 * The before rule compares the input value to be before
 * the expected value.
 *
 * By default, the comparions of day, month and years are performed.
 */
export declare const beforeRule: (options: {
    expectedValue: "today" | (string & {
        _?: undefined;
    }) | "yesterday" | ((field: FieldContext) => string);
} & DateEqualsOptions) => import("../../types.js").Validation<{
    expectedValue: "today" | (string & {
        _?: undefined;
    }) | "yesterday" | ((field: FieldContext) => string);
} & DateEqualsOptions>;
/**
 * The before or equal rule compares the input value to be
 * before or equal to the expected value.
 *
 * By default, the comparions of day, month and years are performed.
 */
export declare const beforeOrEqualRule: (options: {
    expectedValue: "today" | "yesterday" | (string & {
        _?: undefined;
    }) | ((field: FieldContext) => string);
} & DateEqualsOptions) => import("../../types.js").Validation<{
    expectedValue: "today" | "yesterday" | (string & {
        _?: undefined;
    }) | ((field: FieldContext) => string);
} & DateEqualsOptions>;
/**
 * The sameAs rule expects the input value to be same
 * as the value of the other field.
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const sameAsRule: (options: {
    otherField: string;
} & DateEqualsOptions) => import("../../types.js").Validation<{
    otherField: string;
} & DateEqualsOptions>;
/**
 * The notSameAs rule expects the input value to be different
 * from the other field's value
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const notSameAsRule: (options: {
    otherField: string;
} & DateEqualsOptions) => import("../../types.js").Validation<{
    otherField: string;
} & DateEqualsOptions>;
/**
 * The afterField rule expects the input value to be after
 * the other field's value.
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const afterFieldRule: (options: {
    otherField: string;
} & DateEqualsOptions) => import("../../types.js").Validation<{
    otherField: string;
} & DateEqualsOptions>;
/**
 * The afterOrSameAs rule expects the input value to be after
 * or same as the other field's value.
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const afterOrSameAsRule: (options: {
    otherField: string;
} & DateEqualsOptions) => import("../../types.js").Validation<{
    otherField: string;
} & DateEqualsOptions>;
/**
 * The beforeField rule expects the input value to be before
 * the other field's value.
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const beforeFieldRule: (options: {
    otherField: string;
} & DateEqualsOptions) => import("../../types.js").Validation<{
    otherField: string;
} & DateEqualsOptions>;
/**
 * The beforeOrSameAs rule expects the input value to be before
 * or same as the other field's value.
 *
 * By default, the comparions of day, month and years are performed
 */
export declare const beforeOrSameAsRule: (options: {
    otherField: string;
} & DateEqualsOptions) => import("../../types.js").Validation<{
    otherField: string;
} & DateEqualsOptions>;
/**
 * The weekend rule ensures the date falls on a weekend
 */
export declare const weekendRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * The weekday rule ensures the date falls on a weekday
 */
export declare const weekdayRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
