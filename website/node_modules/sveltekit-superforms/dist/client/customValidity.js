import { splitPath } from '../stringPath.js';
import { traversePath } from '../traversal.js';
const noCustomValidityDataAttribute = 'noCustomValidity';
export async function updateCustomValidity(validityEl, errors) {
    // Always reset validity, in case it has been validated on the server.
    if ('setCustomValidity' in validityEl) {
        validityEl.setCustomValidity('');
    }
    if (noCustomValidityDataAttribute in validityEl.dataset)
        return;
    setCustomValidity(validityEl, errors);
}
export function setCustomValidityForm(formElement, errors) {
    for (const el of formElement.querySelectorAll('input,select,textarea,button')) {
        if (noCustomValidityDataAttribute in el.dataset) {
            continue;
        }
        const error = traversePath(errors, splitPath(el.name));
        setCustomValidity(el, error?.value);
        if (error?.value)
            return;
    }
}
function setCustomValidity(el, errors) {
    const message = errors && errors.length ? errors.join('\n') : '';
    el.setCustomValidity(message);
    if (message)
        el.reportValidity();
}
