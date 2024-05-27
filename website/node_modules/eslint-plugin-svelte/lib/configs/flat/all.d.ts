declare const _default: ({
    plugins: {
        readonly svelte: import("eslint").ESLint.Plugin;
    };
    files?: undefined;
    languageOptions?: undefined;
    rules?: undefined;
    processor?: undefined;
} | {
    files: string[];
    languageOptions: {
        parser: any;
    };
    rules: {
        'no-inner-declarations': string;
        'no-self-assign': string;
        'svelte/comment-directive': string;
        'svelte/system': string;
    };
    processor: string;
    plugins?: undefined;
} | {
    rules: any;
})[];
export default _default;
