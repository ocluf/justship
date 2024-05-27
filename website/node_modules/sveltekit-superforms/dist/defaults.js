export function defaults(data, adapter, options) {
    if (data && 'superFormValidationLibrary' in data) {
        options = adapter;
        adapter = data;
        data = null;
    }
    const validator = adapter;
    const optionDefaults = options?.defaults ?? validator.defaults;
    return {
        id: options?.id ?? validator.id ?? '',
        valid: false,
        posted: false,
        errors: {},
        data: { ...optionDefaults, ...data },
        constraints: validator.constraints,
        shape: validator.shape
    };
}
export function defaultValues(adapter) {
    return adapter.defaults;
}
