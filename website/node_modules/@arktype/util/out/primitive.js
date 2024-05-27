export const serializePrimitive = (value) => (typeof value === "string" ? JSON.stringify(value)
    : typeof value === "bigint" ? `${value}n`
        : `${value}`);
