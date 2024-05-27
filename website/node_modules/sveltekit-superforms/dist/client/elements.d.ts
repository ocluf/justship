export declare const isElementInViewport: (el: Element, topOffset?: number) => boolean;
export declare const scrollToAndCenter: (el: Element, offset?: number, behavior?: ScrollBehavior) => void;
/**
 * Information about a HTML element, for determining when to display errors.
 */
export declare function inputInfo(el: EventTarget | null): {
    immediate: boolean;
    multiple: boolean;
    file: boolean;
};
