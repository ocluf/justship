import { HtmlToTextOptions, SelectorDefinition } from 'html-to-text';

type Options = {
    pretty?: boolean;
} & ({
    plainText?: false;
} | {
    plainText?: true;
    /**
     * These are options you can pass down directly to the library we use for
     * converting the rendered email's HTML into plain text.
     *
     * @see https://github.com/html-to-text/node-html-to-text
     */
    htmlToTextOptions?: HtmlToTextOptions;
});

declare const render: (component: React.ReactElement, options?: Options) => string;

declare const renderAsync: (component: React.ReactElement, options?: Options) => Promise<string>;

declare const plainTextSelectors: SelectorDefinition[];

export { Options, plainTextSelectors, render, renderAsync };
