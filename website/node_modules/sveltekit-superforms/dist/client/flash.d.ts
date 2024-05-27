import type { FormOptions } from './superForm.js';
export declare function cancelFlash<T extends Record<string, unknown>, M>(options: FormOptions<T, M>): void;
export declare function shouldSyncFlash<T extends Record<string, unknown>, M>(options: FormOptions<T, M>): boolean | undefined;
