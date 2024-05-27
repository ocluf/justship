export const skipWhiteSpaceInLine = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y;
// Skip whitespace and single-line comments, including /* no newline here */.
// After this RegExp matches, its lastIndex points to a line terminator, or
// the start of multi-line comment (which is effectively a line terminator),
// or the end of string.
export const skipWhiteSpaceToLineBreak = new RegExp(
// Unfortunately JS doesn't support Perl's atomic /(?>pattern)/ or
// possessive quantifiers, so we use a trick to prevent backtracking
// when the look-ahead for line terminator fails.
'(?=(' +
    // Capture the whitespace and comments that should be skipped inside
    // a look-ahead assertion, and then re-match the group as a unit.
    skipWhiteSpaceInLine.source +
    '))\\1' +
    // Look-ahead for either line terminator, start of multi-line comment,
    // or end of string.
    /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, 'y' // sticky
);
//# sourceMappingURL=whitespace.js.map