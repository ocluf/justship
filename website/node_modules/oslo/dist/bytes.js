export function byteToBinary(byte) {
    return byte.toString(2).padStart(8, "0");
}
export function bytesToBinary(bytes) {
    return [...bytes].map((val) => byteToBinary(val)).join("");
}
export function binaryToInteger(bits) {
    return parseInt(bits, 2);
}
export function bytesToInteger(bytes) {
    return parseInt(bytesToBinary(bytes), 2);
}
export function compareBytes(buffer1, buffer2) {
    const bytes1 = new Uint8Array(buffer1);
    const bytes2 = new Uint8Array(buffer2);
    if (bytes1.byteLength !== bytes2.byteLength)
        return false;
    for (let i = 0; i < bytes1.byteLength; i++) {
        if (bytes1[i] !== bytes2[i])
            return false;
    }
    return true;
}
