/// <reference types="node" />
import { ReadStream, WriteStream } from "tty";
export interface Closable {
    close(): void;
}
export declare abstract class Prompt<RESULT> {
    protected terminal: ITerminal | undefined;
    private attachCallbacks;
    private detachCallbacks;
    private inputCallbacks;
    requestLayout(): void;
    on(type: "attach", callback: (terminal: ITerminal) => void): void;
    on(type: "detach", callback: (terminal: ITerminal) => void): void;
    on(type: "input", callback: (str: string | undefined, key: AnyKey) => void): void;
    attach(terminal: ITerminal): void;
    detach(terminal: ITerminal): void;
    input(str: string | undefined, key: AnyKey): void;
    abstract result(): RESULT;
    abstract render(status: "idle" | "submitted" | "aborted"): string;
}
export declare class SelectState<T> {
    readonly items: T[];
    selectedIdx: number;
    constructor(items: T[]);
    bind(prompt: Prompt<any>): void;
    private consume;
}
export declare const deferred: <T>() => {
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
    promise: Promise<T>;
};
export interface ITerminal {
    toggleCursor(state: "hide" | "show"): void;
    requestLayout(): void;
}
type AnyKey = {
    sequence: string;
    name: string | undefined;
    ctrl: boolean;
    meta: boolean;
    shift: boolean;
};
type Prompted<T> = {
    data: undefined;
    status: "aborted";
} | {
    data: T;
    status: "submitted";
};
export declare class Terminal implements ITerminal {
    private readonly view;
    private readonly stdin;
    private readonly stdout;
    private readonly closable;
    private text;
    private status;
    private resolve;
    private promise;
    private renderFunc;
    constructor(view: Prompt<any>, stdin: ReadStream, stdout: WriteStream, closable: Closable);
    private tearDown;
    result(): Promise<{}>;
    toggleCursor(state: "hide" | "show"): void;
    requestLayout(): void;
}
export declare abstract class TaskView {
    protected terminal: TaskTerminal | undefined;
    private attachCallbacks;
    private detachCallbacks;
    requestLayout(): void;
    attach(terminal: TaskTerminal): void;
    detach(terminal: TaskTerminal): void;
    on(type: "attach", callback: (terminal: TaskTerminal) => void): void;
    on(type: "detach", callback: (terminal: TaskTerminal) => void): void;
    abstract render(status: "pending" | "done"): string;
}
export declare class TaskTerminal {
    private readonly view;
    private readonly stdout;
    private text;
    constructor(view: TaskView, stdout: WriteStream);
    requestLayout(): void;
    clear(): void;
}
export declare function render<T>(view: Prompt<T>): Promise<Prompted<T>>;
export declare function render(view: string): void;
export declare function renderWithTask<RESULT>(view: TaskView, task: Promise<RESULT>): Promise<RESULT>;
export declare function onTerminate(callback: (stdin: ReadStream, stdout: WriteStream) => void | undefined): void;
export {};
