/// <reference types="svelte" />
import type { FormOptions } from './superForm.js';
import type { Writable } from 'svelte/store';
/**
 * @DCI-context
 */
export declare function Form<T extends Record<string, unknown>, M>(formElement: HTMLFormElement, timers: {
    submitting: Writable<boolean>;
    delayed: Writable<boolean>;
    timeout: Writable<boolean>;
}, options: FormOptions<T, M>): {
    submitting(): void;
    completed: (opts: {
        cancelled: boolean;
        clearAll?: boolean;
    }) => void;
    scrollToFirstError(): void;
    isSubmitting: () => boolean;
};
export declare const scrollToFirstError: <T extends Record<string, unknown>, M>(Form: HTMLFormElement, options: FormOptions<T, M>) => Promise<void>;
