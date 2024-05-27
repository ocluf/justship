/// <reference types="svelte" />
import { type Readable, type Updater, type Writable } from 'svelte/store';
import type { InputConstraint } from '../jsonSchema/constraints.js';
import { type FormPath, type FormPathLeaves, type FormPathType } from '../stringPath.js';
import type { FormPathArrays } from '../stringPath.js';
import type { SuperForm, TaintOption } from './superForm.js';
import type { IsAny, Prettify } from '../utils.js';
export type ProxyOptions = {
    taint?: TaintOption;
};
type FormPaths<T extends Record<string, unknown>, Type = any> = FormPath<T, Type> | FormPathLeaves<T, Type>;
type CorrectProxyType<In, Out, T extends Record<string, unknown>, Path extends FormPaths<T>> = NonNullable<FormPathType<T, Path>> extends In ? Writable<Out> : never;
type PathType<Type, T, Path extends string> = IsAny<Type> extends true ? FormPathType<T, Path> : Type;
type Nullable<T extends Record<string, unknown>, Path extends FormPaths<T> | FormPathArrays<T> | FormPathLeaves<T>> = null extends FormPathType<T, Path> ? null : never;
type Optional<T extends Record<string, unknown>, Path extends FormPaths<T> | FormPathArrays<T> | FormPathLeaves<T>> = [undefined] extends [FormPathType<T, Path>] ? undefined : never;
type DefaultOptions = {
    trueStringValue: string;
    dateFormat: 'date' | 'datetime' | 'time' | 'date-utc' | 'datetime-utc' | 'time-utc' | 'date-local' | 'datetime-local' | 'time-local' | 'iso';
    delimiter?: '.' | ',';
    empty?: 'null' | 'undefined' | 'zero';
    initiallyEmptyIfZero?: boolean;
    taint?: TaintOption;
};
export declare function booleanProxy<T extends Record<string, unknown>, Path extends FormPaths<T>>(form: Writable<T> | SuperForm<T>, path: Path, options?: Prettify<Pick<DefaultOptions, 'trueStringValue' | 'taint'>>): CorrectProxyType<boolean, string, T, Path>;
export declare function intProxy<T extends Record<string, unknown>, Path extends FormPaths<T>>(form: Writable<T> | SuperForm<T>, path: Path, options?: Prettify<Pick<DefaultOptions, 'empty' | 'initiallyEmptyIfZero' | 'taint'>>): CorrectProxyType<number, string, T, Path>;
export declare function numberProxy<T extends Record<string, unknown>, Path extends FormPaths<T>>(form: Writable<T> | SuperForm<T>, path: Path, options?: Prettify<Pick<DefaultOptions, 'empty' | 'delimiter' | 'initiallyEmptyIfZero' | 'taint'>>): CorrectProxyType<number, string, T, Path>;
export declare function dateProxy<T extends Record<string, unknown>, Path extends FormPaths<T>>(form: Writable<T> | SuperForm<T>, path: Path, options?: {
    format?: DefaultOptions['dateFormat'];
    empty?: Exclude<DefaultOptions['empty'], 'zero'>;
    taint?: TaintOption;
}): CorrectProxyType<Date, string, T, Path>;
export declare function stringProxy<T extends Record<string, unknown>, Path extends FormPaths<T>>(form: Writable<T> | SuperForm<T>, path: Path, options: {
    empty: NonNullable<Exclude<DefaultOptions['empty'], 'zero'>>;
    taint?: TaintOption;
}): Writable<string>;
export declare function fileFieldProxy<T extends Record<string, unknown>, Path extends FormPathLeaves<T, File>>(form: SuperForm<T>, path: Path, options?: ProxyOptions & {
    empty?: 'null' | 'undefined';
}): FormFieldProxy<FileList | File | Nullable<T, Path> | Optional<T, Path>, Path>;
export declare function fileProxy<T extends Record<string, unknown>, Path extends FormPathLeaves<T, File>>(form: Writable<T> | SuperForm<T>, path: Path, options?: ProxyOptions & {
    empty?: 'null' | 'undefined';
}): {
    subscribe(this: void, run: (value: FileList) => void): import("svelte/store").Unsubscriber;
    set(this: void, file: FileList | File | Nullable<T, Path> | Optional<T, Path>): void;
    update(this: void): never;
};
export declare function filesFieldProxy<T extends Record<string, unknown>, Path extends FormPathArrays<T, File[]>>(form: SuperForm<T>, path: Path, options?: ProxyOptions): {
    values: {
        subscribe(run: (value: FileList) => void): import("svelte/store").Unsubscriber;
        set(files: FileList | File[] | Nullable<T, Path> | Optional<T, Path>): void;
        update(updater: Updater<File[] | Nullable<T, Path> | Optional<T, Path>>): void;
    };
    path: Path;
    errors: Writable<string[] | undefined>;
    valueErrors: Writable<ValueErrors>;
};
export declare function filesProxy<T extends Record<string, unknown>, Path extends FormPathArrays<T, File[]>>(form: Writable<T> | SuperForm<T>, path: Path, options?: ProxyOptions): {
    subscribe(run: (value: FileList) => void): import("svelte/store").Unsubscriber;
    set(files: FileList | File[] | Nullable<T, Path> | Optional<T, Path>): void;
    update(updater: Updater<File[] | Nullable<T, Path> | Optional<T, Path>>): void;
};
type ValueErrors = any[];
export type ArrayProxy<T, Path = string, Errors = ValueErrors, ExtraValues = never> = {
    path: Path;
    values: Writable<(T[] & unknown[]) | ExtraValues>;
    errors: Writable<string[] | undefined>;
    valueErrors: Writable<Errors>;
};
export declare function arrayProxy<T extends Record<string, unknown>, Path extends FormPathArrays<T, ArrType>, ArrType = any>(superForm: SuperForm<T>, path: Path, options?: {
    taint?: TaintOption;
}): ArrayProxy<FormPathType<T, Path> extends (infer U)[] ? U : never, Path>;
export type FormFieldProxy<T, Path = string> = {
    path: Path;
    value: SuperFieldProxy<T>;
    errors: Writable<string[] | undefined>;
    constraints: Writable<InputConstraint | undefined>;
    tainted: Writable<boolean | undefined>;
};
export declare function formFieldProxy<T extends Record<string, unknown>, Path extends FormPathLeaves<T, Type>, Type = any>(superForm: SuperForm<T>, path: Path, options?: ProxyOptions): FormFieldProxy<PathType<Type, T, Path>, Path>;
type SuperFieldProxy<T> = {
    subscribe: Readable<T>['subscribe'];
    set(this: void, value: T, options?: {
        taint?: TaintOption;
    }): void;
    update(this: void, updater: Updater<T>, options?: {
        taint?: TaintOption;
    }): void;
};
export type FieldProxy<T> = Writable<T>;
export declare function fieldProxy<T extends Record<string, unknown>, Path extends FormPaths<T, Type>, Type = any>(form: Writable<T> | SuperForm<T>, path: Path, options?: ProxyOptions): FieldProxy<PathType<Type, T, Path>>;
export {};
