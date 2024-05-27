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
    rules: {
        'svelte/comment-directive': string;
        'svelte/no-at-debug-tags': string;
        'svelte/no-at-html-tags': string;
        'svelte/no-dupe-else-if-blocks': string;
        'svelte/no-dupe-style-properties': string;
        'svelte/no-dynamic-slot-name': string;
        'svelte/no-inner-declarations': string;
        'svelte/no-not-function-handler': string;
        'svelte/no-object-in-text-mustaches': string;
        'svelte/no-shorthand-style-property-overrides': string;
        'svelte/no-unknown-style-directive-property': string;
        'svelte/no-unused-svelte-ignore': string;
        'svelte/system': string;
        'svelte/valid-compile': string;
    };
})[];
export default _default;
