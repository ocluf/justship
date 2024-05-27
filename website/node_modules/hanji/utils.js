"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
const sisteransi_1 = require("sisteransi");
const strip = (str) => {
    const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))",
    ].join("|");
    const RGX = new RegExp(pattern, "g");
    return typeof str === "string" ? str.replace(RGX, "") : str;
};
const stringWidth = (str) => [...strip(str)].length;
const clear = function (prompt, perLine) {
    if (!perLine)
        return sisteransi_1.erase.line + sisteransi_1.cursor.to(0);
    let rows = 0;
    const lines = prompt.split(/\r?\n/);
    for (let line of lines) {
        rows += 1 + Math.floor(Math.max(stringWidth(line) - 1, 0) / perLine);
    }
    return sisteransi_1.erase.lines(rows);
};
exports.clear = clear;
