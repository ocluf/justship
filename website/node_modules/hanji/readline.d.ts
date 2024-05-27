import { WriteStream, ReadStream } from "tty";
import { Closable } from ".";
export declare const prepareReadLine: () => {
    stdin: ReadStream;
    stdout: WriteStream;
    closable: Closable;
};
