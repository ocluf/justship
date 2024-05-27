/* eslint-disable @typescript-eslint/no-explicit-any */
import { derived, get, writable } from 'svelte/store';
import { SuperFormError } from '../errors.js';
import { pathExists, traversePath } from '../traversal.js';
import { splitPath } from '../stringPath.js';
import { browser } from '$app/environment';
const defaultOptions = {
    trueStringValue: 'true',
    dateFormat: 'iso'
};
///// Proxy functions ///////////////////////////////////////////////
export function booleanProxy(form, path, options) {
    return _stringProxy(form, path, 'boolean', {
        ...defaultOptions,
        ...options
    });
}
export function intProxy(form, path, options) {
    return _stringProxy(form, path, 'int', {
        ...defaultOptions,
        ...options
    });
}
export function numberProxy(form, path, options) {
    return _stringProxy(form, path, 'number', {
        ...defaultOptions,
        ...options
    });
}
export function dateProxy(form, path, options) {
    return _stringProxy(form, path, 'date', {
        ...defaultOptions,
        dateFormat: options?.format ?? 'iso',
        empty: options?.empty
    });
}
export function stringProxy(form, path, options) {
    return _stringProxy(form, path, 'string', {
        ...defaultOptions,
        ...options
    });
}
export function fileFieldProxy(form, path, options) {
    const fileField = fileProxy(form, path, options);
    const formField = formFieldProxy(form, path, options);
    return { ...formField, value: fileField };
}
export function fileProxy(form, path, options) {
    const formFile = fieldProxy(form, path, options);
    const fileProxy = writable(browser ? new DataTransfer().files : {});
    let initialized = false;
    let initialValue;
    formFile.subscribe((file) => {
        if (!browser)
            return;
        if (!initialized) {
            initialValue = options?.empty ? (options.empty === 'undefined' ? undefined : null) : file;
            initialized = true;
        }
        const dt = new DataTransfer();
        if (file instanceof File)
            dt.items.add(file);
        fileProxy.set(dt.files);
    });
    const fileStore = {
        subscribe(run) {
            return fileProxy.subscribe(run);
        },
        set(file) {
            if (!browser)
                return;
            if (!file) {
                const dt = new DataTransfer();
                fileProxy.set(dt.files);
                formFile.set(file);
            }
            else if (file instanceof File) {
                const dt = new DataTransfer();
                dt.items.add(file);
                fileProxy.set(dt.files);
                formFile.set(file);
            }
            else if (file instanceof FileList) {
                fileProxy.set(file);
                if (file.length > 0)
                    formFile.set(file.item(0));
                else
                    formFile.set(initialValue);
            }
        },
        update() {
            throw new SuperFormError('You cannot update a fileProxy, only set it.');
        }
    };
    return fileStore;
}
export function filesFieldProxy(form, path, options) {
    const filesStore = filesProxy(form, path, options);
    const arrayField = arrayProxy(form, path, options);
    return { ...arrayField, values: filesStore };
}
export function filesProxy(form, path, options) {
    const formFiles = fieldProxy(form, path, options);
    const filesProxy = writable(browser ? new DataTransfer().files : {});
    formFiles.subscribe((files) => {
        if (!browser)
            return;
        const dt = new DataTransfer();
        if (Array.isArray(files)) {
            if (files.length && files.every((f) => !f)) {
                formFiles.set([]);
                return;
            }
            files.filter((f) => f instanceof File).forEach((file) => dt.items.add(file));
        }
        filesProxy.set(dt.files);
    });
    const filesStore = {
        subscribe(run) {
            return filesProxy.subscribe(run);
        },
        set(files) {
            if (!browser)
                return;
            if (!(files instanceof FileList)) {
                const dt = new DataTransfer();
                if (Array.isArray(files))
                    files.forEach((file) => {
                        if (file instanceof File)
                            dt.items.add(file);
                    });
                filesProxy.set(dt.files);
                formFiles.set(files);
            }
            else {
                const output = [];
                for (let i = 0; i < files.length; i++) {
                    const file = files.item(i);
                    if (file)
                        output.push(file);
                }
                filesProxy.set(files);
                formFiles.set(output);
            }
        },
        update(updater) {
            filesStore.set(updater(get(formFiles)));
        }
    };
    return filesStore;
}
///// Implementation ////////////////////////////////////////////////
/**
 * Creates a string store that will pass its value to a field in the form.
 * @param form The form
 * @param field Form field
 * @param type 'number' | 'int' | 'boolean'
 */
function _stringProxy(form, path, type, options) {
    function toValue(value) {
        if (!value && options.empty !== undefined) {
            return options.empty === 'null' ? null : options.empty === 'zero' ? 0 : undefined;
        }
        if (typeof value === 'number') {
            value = value.toString();
        }
        if (typeof value !== 'string') {
            // Can be undefined due to Proxy in Svelte 5
            value = '';
        }
        const stringValue = value;
        if (type == 'string')
            return stringValue;
        else if (type == 'boolean')
            return !!stringValue;
        else if (type == 'date')
            return new Date(stringValue);
        const numberToConvert = options.delimiter
            ? stringValue.replace(options.delimiter, '.')
            : stringValue;
        let num;
        if (numberToConvert === '' && options.empty == 'zero')
            num = 0;
        else if (type == 'number')
            num = parseFloat(numberToConvert);
        else
            num = parseInt(numberToConvert, 10);
        return num;
    }
    const isSuper = isSuperForm(form, options);
    const realProxy = isSuper
        ? superFieldProxy(form, path, { taint: options.taint })
        : fieldProxy(form, path);
    let updatedValue = null;
    let initialized = false;
    const proxy = derived(realProxy, (value) => {
        if (!initialized) {
            initialized = true;
            if (options.initiallyEmptyIfZero && !value)
                return '';
        }
        // Prevent proxy updating itself
        if (updatedValue !== null) {
            const current = updatedValue;
            updatedValue = null;
            return current;
        }
        if (value === undefined || value === null)
            return '';
        if (type == 'string') {
            return value;
        }
        else if (type == 'int' || type == 'number') {
            if (value === '') {
                // Special case for empty string values in number proxies
                // Set the value to 0, to conform to the type.
                realProxy.set(0, isSuper ? { taint: false } : undefined);
            }
            if (typeof value === 'number' && isNaN(value))
                return '';
            return String(value);
        }
        else if (type == 'date') {
            const date = value;
            if (isNaN(date))
                return '';
            switch (options.dateFormat) {
                case 'iso':
                    return date.toISOString();
                case 'date':
                    return date.toISOString().slice(0, 10);
                case 'datetime':
                    return date.toISOString().slice(0, 16);
                case 'time':
                    return date.toISOString().slice(11, 16);
                case 'date-utc':
                    return UTCDate(date);
                case 'datetime-utc':
                    return UTCDate(date) + 'T' + UTCTime(date);
                case 'time-utc':
                    return UTCTime(date);
                case 'date-local':
                    return localDate(date);
                case 'datetime-local':
                    return localDate(date) + 'T' + localTime(date);
                case 'time-local':
                    return localTime(date);
            }
        }
        else {
            // boolean
            return value ? options.trueStringValue : '';
        }
    });
    return {
        subscribe: proxy.subscribe,
        set(val) {
            updatedValue = val;
            const newValue = toValue(updatedValue);
            realProxy.set(newValue);
        },
        update(updater) {
            realProxy.update((f) => {
                updatedValue = updater(String(f));
                const newValue = toValue(updatedValue);
                return newValue;
            });
        }
    };
}
export function arrayProxy(superForm, path, options) {
    const formErrors = fieldProxy(superForm.errors, `${path}`);
    const onlyFieldErrors = derived(formErrors, ($errors) => {
        const output = [];
        for (const key in $errors) {
            if (key == '_errors')
                continue;
            output[key] = $errors[key];
        }
        return output;
    });
    function updateArrayErrors(errors, value) {
        for (const key in errors) {
            if (key == '_errors')
                continue;
            errors[key] = undefined;
        }
        if (value !== undefined) {
            for (const key in value) {
                errors[key] = value[key];
            }
        }
        return errors;
    }
    const fieldErrors = {
        subscribe: onlyFieldErrors.subscribe,
        update(upd) {
            formErrors.update(($errors) => 
            // @ts-expect-error Type is correct
            updateArrayErrors($errors, upd($errors)));
        },
        set(value) {
            // @ts-expect-error Type is correct
            formErrors.update(($errors) => updateArrayErrors($errors, value));
        }
    };
    const values = superFieldProxy(superForm, path, options);
    // If array is shortened, delete all keys above length
    // in errors, so they won't be kept if the array is lengthened again.
    let lastLength = Array.isArray(get(values)) ? get(values).length : 0;
    values.subscribe(($values) => {
        const currentLength = Array.isArray($values) ? $values.length : 0;
        if (currentLength < lastLength) {
            superForm.errors.update(($errors) => {
                const node = pathExists($errors, splitPath(path));
                if (!node)
                    return $errors;
                for (const key in node.value) {
                    if (Number(key) < currentLength)
                        continue;
                    delete node.value[key];
                }
                return $errors;
            }, { force: true });
        }
        lastLength = currentLength;
    });
    return {
        path,
        values: values,
        errors: fieldProxy(superForm.errors, `${path}._errors`),
        valueErrors: fieldErrors
    };
}
export function formFieldProxy(superForm, path, options) {
    const path2 = splitPath(path);
    // Filter out array indices, the constraints structure doesn't contain these.
    const constraintsPath = path2.filter((p) => /\D/.test(String(p))).join('.');
    const taintedProxy = derived(superForm.tainted, ($tainted) => {
        if (!$tainted)
            return $tainted;
        const taintedPath = traversePath($tainted, path2);
        return taintedPath ? taintedPath.value : undefined;
    });
    const tainted = {
        subscribe: taintedProxy.subscribe,
        update(upd) {
            superForm.tainted.update(($tainted) => {
                if (!$tainted)
                    $tainted = {};
                const output = traversePath($tainted, path2, (path) => {
                    if (!path.value)
                        path.parent[path.key] = {};
                    return path.parent[path.key];
                });
                if (output)
                    output.parent[output.key] = upd(output.value);
                return $tainted;
            });
        },
        set(value) {
            superForm.tainted.update(($tainted) => {
                if (!$tainted)
                    $tainted = {};
                const output = traversePath($tainted, path2, (path) => {
                    if (!path.value)
                        path.parent[path.key] = {};
                    return path.parent[path.key];
                });
                if (output)
                    output.parent[output.key] = value;
                return $tainted;
            });
        }
    };
    return {
        path,
        value: superFieldProxy(superForm, path, options),
        errors: fieldProxy(superForm.errors, path),
        constraints: fieldProxy(superForm.constraints, constraintsPath),
        tainted
    };
}
function updateProxyField(obj, path, updater) {
    const output = traversePath(obj, path, ({ parent, key, value }) => {
        if (value === undefined)
            parent[key] = /\D/.test(key) ? {} : [];
        return parent[key];
    });
    if (output) {
        const newValue = updater(output.value);
        output.parent[output.key] = newValue;
    }
    return obj;
}
function superFieldProxy(superForm, path, baseOptions) {
    const form = superForm.form;
    const path2 = splitPath(path);
    const proxy = derived(form, ($form) => {
        const data = traversePath($form, path2);
        return data?.value;
    });
    return {
        subscribe(...params) {
            const unsub = proxy.subscribe(...params);
            return () => unsub();
        },
        update(upd, options) {
            form.update((data) => updateProxyField(data, path2, upd), options ?? baseOptions);
        },
        set(value, options) {
            form.update((data) => updateProxyField(data, path2, () => value), options ?? baseOptions);
        }
    };
}
function isSuperForm(form, options) {
    const isSuperForm = 'form' in form;
    if (!isSuperForm && options?.taint !== undefined) {
        throw new SuperFormError('If options.taint is set, the whole superForm object must be used as a proxy.');
    }
    return isSuperForm;
}
export function fieldProxy(form, path, options) {
    const path2 = splitPath(path);
    if (isSuperForm(form, options)) {
        return superFieldProxy(form, path, options);
    }
    const proxy = derived(form, ($form) => {
        const data = traversePath($form, path2);
        return data?.value;
    });
    return {
        subscribe(...params) {
            const unsub = proxy.subscribe(...params);
            return () => unsub();
        },
        update(upd) {
            form.update((data) => updateProxyField(data, path2, upd));
        },
        set(value) {
            form.update((data) => updateProxyField(data, path2, () => value));
        }
    };
}
function localDate(date) {
    return (date.getFullYear() +
        '-' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(date.getDate()).padStart(2, '0'));
}
function localTime(date) {
    return (String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0'));
}
function UTCDate(date) {
    return (date.getUTCFullYear() +
        '-' +
        String(date.getUTCMonth() + 1).padStart(2, '0') +
        '-' +
        String(date.getUTCDate()).padStart(2, '0'));
}
function UTCTime(date) {
    return (String(date.getUTCHours()).padStart(2, '0') +
        ':' +
        String(date.getUTCMinutes()).padStart(2, '0'));
}
/*
function dateToUTC(date: Date) {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
}
*/
