import { browser } from '$app/environment';
export function cancelFlash(options) {
    if (!options.flashMessage || !browser)
        return;
    if (!shouldSyncFlash(options))
        return;
    document.cookie = `flash=; Max-Age=0; Path=${options.flashMessage.cookiePath ?? '/'};`;
}
export function shouldSyncFlash(options) {
    if (!options.flashMessage || !browser)
        return false;
    return options.syncFlashMessage;
}
