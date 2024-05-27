"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTANT!
// This file has been automatically generated,
// in order to update its content execute "pnpm run update"
const base_1 = __importDefault(require("./base"));
exports.default = [
    ...base_1.default,
    {
        rules: {
            // eslint-plugin-svelte rules
            'svelte/first-attribute-linebreak': 'off',
            'svelte/html-closing-bracket-spacing': 'off',
            'svelte/html-quotes': 'off',
            'svelte/html-self-closing': 'off',
            'svelte/indent': 'off',
            'svelte/max-attributes-per-line': 'off',
            'svelte/mustache-spacing': 'off',
            'svelte/no-spaces-around-equal-signs-in-attribute': 'off',
            'svelte/no-trailing-spaces': 'off',
            'svelte/shorthand-attribute': 'off',
            'svelte/shorthand-directive': 'off'
        }
    }
];
