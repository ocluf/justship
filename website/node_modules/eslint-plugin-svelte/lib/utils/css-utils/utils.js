"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripVendorPrefix = exports.getVendorPrefix = exports.hasVendorPrefix = void 0;
/**
 * Checks whether given property name has vender prefix
 */
function hasVendorPrefix(prop) {
    return Boolean(getVendorPrefix(prop));
}
exports.hasVendorPrefix = hasVendorPrefix;
/**
 * Get the vender prefix from given property name
 */
function getVendorPrefix(prop) {
    return /^-\w+-/u.exec(prop)?.[0] || '';
}
exports.getVendorPrefix = getVendorPrefix;
/**
 * Strip the vender prefix
 */
function stripVendorPrefix(prop) {
    return prop.slice(getVendorPrefix(prop).length);
}
exports.stripVendorPrefix = stripVendorPrefix;
