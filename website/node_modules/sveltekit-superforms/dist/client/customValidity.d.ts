import type { ValidationErrors } from './index.js';
export declare function updateCustomValidity(validityEl: HTMLElement, errors: string[] | undefined): Promise<void>;
export declare function setCustomValidityForm(formElement: HTMLFormElement, errors: ValidationErrors<Record<string, unknown>>): void;
