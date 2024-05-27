import type { ESLint } from 'eslint';
declare const _default: ({
    plugins: {
        readonly svelte: ESLint.Plugin;
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
})[];
export default _default;
