/** @typedef {typeof __propDef.props}  SuperDebugProps */
/** @typedef {typeof __propDef.events}  SuperDebugEvents */
/** @typedef {typeof __propDef.slots}  SuperDebugSlots */
/**
 * SuperDebug is a debugging component that gives you colorized and nicely formatted output for any data structure, usually $form.
 *
 * Other use cases includes debugging plain objects, promises, stores and more.
 *
 * More info: https://superforms.rocks/super-debug
 *
 * **Short example:**
 *
 * ```svelte
 * <script>
 *   import SuperDebug from 'sveltekit-superforms';
 *   import { superForm } from 'sveltekit-superforms';
 *
 *   export let data;
 *
 *   const { errors, form, enhance } = superForm(data.form);
 * </script>
 *
 * <SuperDebug data={$form} label="My form data" />
 * ```
 */
export default class SuperDebug extends SvelteComponentTyped<{
    data: unknown;
    status?: boolean | undefined;
    label?: string | undefined;
    display?: boolean | undefined;
    stringTruncate?: number | undefined;
    ref?: HTMLPreElement | undefined;
    promise?: boolean | undefined;
    raw?: boolean | undefined;
    functions?: boolean | undefined;
    theme?: "default" | "vscode" | undefined;
    collapsible?: boolean | undefined;
    collapsed?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type SuperDebugProps = typeof __propDef.props;
export type SuperDebugEvents = typeof __propDef.events;
export type SuperDebugSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        data: unknown;
        status?: boolean | undefined;
        label?: string | undefined;
        display?: boolean | undefined;
        stringTruncate?: number | undefined;
        ref?: HTMLPreElement | undefined;
        promise?: boolean | undefined;
        raw?: boolean | undefined;
        functions?: boolean | undefined;
        theme?: "default" | "vscode" | undefined;
        collapsible?: boolean | undefined;
        collapsed?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
