import type { Position, TokContext, TokenType } from 'acorn';
export declare type Accessibility = 'public' | 'protected' | 'private';
export declare type VarianceAnnotations = 'in' | 'out';
export declare type ClassAccessor = 'accessor';
export declare type TsModifier = 'readonly' | 'abstract' | 'declare' | 'static' | 'override' | Accessibility | VarianceAnnotations | ClassAccessor;
export declare type LookaheadState = {
    pos: number;
    value: any;
    type: TokenType;
    start: number;
    end: number;
    context: TokContext[];
    startLoc: any;
    endLoc: any;
    lastTokEndLoc: any;
    lastTokStartLoc: any;
    lastTokStart: any;
    lastTokEnd: any;
    curLine: number;
    lineStart: number;
    curPosition: () => Position;
    containsEsc: boolean;
};
export declare type ParsingContext = 'EnumMembers' | 'HeritageClauseElement' | 'TupleElementTypes' | 'TypeMembers' | 'TypeParametersOrArguments';
export declare type ModifierBase = {
    accessibility?: Accessibility;
} & {
    [key in TsModifier]?: boolean | undefined | null;
};
export declare type TryParse<Node, Error, Thrown, Aborted, FailState> = {
    node: Node;
    error: Error;
    thrown: Thrown;
    aborted: Aborted;
    failState: FailState;
};
export declare type AcornTypeScript = {
    tokTypes: Record<string, TokenType>;
    tokContexts: Record<string, TokenType>;
    keywordsRegExp: RegExp;
    tokenIsLiteralPropertyName(token: TokenType): boolean;
    tokenIsKeywordOrIdentifier(token: TokenType): boolean;
    tokenIsIdentifier(token: TokenType): boolean;
    tokenIsTSDeclarationStart(token: TokenType): boolean;
    tokenIsTSTypeOperator(token: TokenType): boolean;
    tokenIsTemplate(token: TokenType): boolean;
};
export declare type AcornJsx = {
    tokTypes: {
        jsxName: TokenType;
        jsxText: TokenType;
        jsxTagEnd: TokenType;
        jsxTagStart: TokenType;
    };
    tokContexts: {
        tc_oTag: TokContext;
        tc_cTag: TokContext;
        tc_expr: TokContext;
    };
};
