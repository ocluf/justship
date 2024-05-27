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
        'svelte/first-attribute-linebreak': string;
        'svelte/html-closing-bracket-spacing': string;
        'svelte/html-quotes': string;
        'svelte/html-self-closing': string;
        'svelte/indent': string;
        'svelte/max-attributes-per-line': string;
        'svelte/mustache-spacing': string;
        'svelte/no-spaces-around-equal-signs-in-attribute': string;
        'svelte/no-trailing-spaces': string;
        'svelte/shorthand-attribute': string;
        'svelte/shorthand-directive': string;
    };
})[];
export default _default;
