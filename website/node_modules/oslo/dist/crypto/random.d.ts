export declare function random(): number;
export declare function generateRandomInteger(max: number): number;
export declare function generateRandomString(length: number, alphabet: string): string;
type AlphabetPattern = "a-z" | "A-Z" | "0-9" | "-" | "_";
export declare function alphabet(...patterns: AlphabetPattern[]): string;
export {};
