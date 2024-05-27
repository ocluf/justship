export const lazily = (thunk) => {
    let cached;
    return new Proxy({}, {
        get: (_, prop) => {
            if (!cached)
                cached = thunk();
            return cached[prop];
        },
        set: (_, prop, value) => {
            if (!cached)
                cached = thunk();
            cached[prop] = value;
            return true;
        }
    });
};
