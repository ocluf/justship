export const minComparators = {
    ">": true,
    ">=": true
};
export const maxComparators = {
    "<": true,
    "<=": true
};
export const comparators = {
    ">": true,
    ">=": true,
    "<": true,
    "<=": true,
    "==": true
};
export const invertedComparators = {
    "<": ">",
    ">": "<",
    "<=": ">=",
    ">=": "<=",
    "==": "=="
};
export const writeUnmatchedGroupCloseMessage = (unscanned) => `Unmatched )${(unscanned === "" ? "" : ` before ${unscanned}`)}`;
export const writeUnclosedGroupMessage = (missingChar) => `Missing ${missingChar}`;
export const writeOpenRangeMessage = (min, comparator) => `Left bounds are only valid when paired with right bounds (try ...${comparator}${min})`;
export const writeUnpairableComparatorMessage = (comparator) => `Left-bounded expressions must specify their limits using < or <= (was ${comparator})`;
export const writeMultipleLeftBoundsMessage = (openLimit, openComparator, limit, comparator) => `An expression may have at most one left bound (parsed ${openLimit}${invertedComparators[openComparator]}, ${limit}${invertedComparators[comparator]})`;
