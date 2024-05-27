import * as acornNamespace from 'acorn';
import { Accessibility, LookaheadState, ModifierBase, ParsingContext, TryParse, TsModifier } from './types';
import { DestructuringErrors } from './parseutil';
import { AcornParseClass } from './middleware';
import { Node, TokenType, Position, Options } from 'acorn';
declare function tsPlugin(options?: {
    dts?: boolean;
    jsx?: {
        allowNamespaces?: boolean;
        allowNamespacedObjects?: boolean;
    };
    allowSatisfies?: boolean;
}): (Parser: typeof AcornParseClass) => {
    new (options: Options, input: string, startPos?: number): {
        preValue: any;
        preToken: any;
        isLookahead: boolean;
        isAmbientContext: boolean;
        inAbstractClass: boolean;
        inType: boolean;
        inDisallowConditionalTypesContext: boolean;
        maybeInArrowParameters: boolean;
        shouldParseArrowReturnType: any | undefined;
        shouldParseAsyncArrowReturnType: any | undefined;
        decoratorStack: any[];
        importsStack: any[];
        /**
         * we will only parse one import node or export node at same time.
         * default kind is undefined
         * */
        importOrExportOuterKind: string | undefined;
        tsParseConstModifier: any;
        readonly acornTypeScript: import("./types").AcornTypeScript;
        getTokenFromCodeInType(code: number): TokenType;
        readToken(code: number): any;
        getTokenFromCode(code: number): TokenType;
        isAbstractClass(): boolean;
        finishNode(node: any, type: string): any;
        tryParse<T extends acornNamespace.Node | readonly acornNamespace.Node[]>(fn: (abort: (node?: T) => never) => T, oldState?: LookaheadState): TryParse<T, null, false, false, null> | TryParse<T, SyntaxError, boolean, false, LookaheadState> | TryParse<T, null, false, true, LookaheadState>;
        setOptionalParametersError(refExpressionErrors: any, resultError?: any): void;
        reScan_lt_gt(): void;
        reScan_lt(): acornNamespace.TokenType;
        resetEndLocation(node: any, endLoc?: Position): void;
        startNodeAtNode(type: Node): any;
        nextTokenStart(): number;
        tsHasSomeModifiers(member: any, modifiers: readonly TsModifier[]): boolean;
        tsIsStartOfStaticBlocks(): boolean;
        tsCheckForInvalidTypeCasts(items: Array<undefined | null | any>): void;
        atPossibleAsyncArrow(base: any): boolean;
        tsIsIdentifier(): boolean;
        tsTryParseTypeOrTypePredicateAnnotation(): acornNamespace.Node;
        tsTryParseGenericAsyncArrowFunction(startPos: number, startLoc: Position, forInit: boolean): any | undefined | null;
        tsParseTypeArgumentsInExpression(): Node | void;
        tsInNoContext<T_1>(cb: () => T_1): T_1;
        tsTryParseTypeAnnotation(): Node | undefined | null;
        isUnparsedContextual(nameStart: number, name: string): boolean;
        isAbstractConstructorSignature(): boolean;
        nextTokenStartSince(pos: number): number;
        lookaheadCharCode(): number;
        compareLookaheadState(state: LookaheadState, state2: LookaheadState): boolean;
        createLookaheadState(): void;
        getCurLookaheadState(): LookaheadState;
        cloneCurLookaheadState(): LookaheadState;
        setLookaheadState(state: LookaheadState): void;
        tsLookAhead<T_2>(f: () => T_2): T_2;
        lookahead(number?: number): LookaheadState;
        readWord(): any;
        skipBlockComment(): void;
        skipLineComment(startSkip: any): void;
        finishToken(type: TokenType, val?: string): any;
        resetStartLocation(node: Node, start: number, startLoc: Position): void;
        isLineTerminator(): boolean;
        hasFollowingLineBreak(): boolean;
        addExtra(node: any, key: string, value: any, enumerable?: boolean): void;
        /**
         * Test if current token is a literal property name
         * https://tc39.es/ecma262/#prod-LiteralPropertyName
         * LiteralPropertyName:
         *   IdentifierName
         *   StringLiteral
         *   NumericLiteral
         *   BigIntLiteral
         */
        isLiteralPropertyName(): boolean;
        hasPrecedingLineBreak(): boolean;
        createIdentifier(node: Omit<any, 'type'>, name: string): any;
        /**
         * Reset the start location of node to the start location of locationNode
         */
        resetStartLocationFromNode(node: Node, locationNode: Node): void;
        isThisParam(param: any): boolean;
        isLookaheadContextual(name: string): boolean;
        /**
         * ts type isContextual
         * @param {TokenType} type
         * @param {TokenType} token
         * @returns {boolean}
         * */
        ts_type_isContextual(type: TokenType, token: TokenType): boolean;
        /**
         * ts isContextual
         * @param {TokenType} token
         * @returns {boolean}
         * */
        ts_isContextual(token: TokenType): boolean;
        ts_isContextualWithState(state: LookaheadState, token: TokenType): boolean;
        isContextualWithState(keyword: string, state: LookaheadState): boolean;
        tsIsStartOfMappedType(): boolean;
        tsInDisallowConditionalTypesContext<T_3>(cb: () => T_3): T_3;
        tsTryParseType(): Node | undefined | null;
        /**
         * Whether current token matches given type
         *
         * @param {TokenType} type
         * @returns {boolean}
         * @memberof Tokenizer
         */
        match(type: TokenType): boolean;
        matchJsx(type: string): boolean;
        ts_eatWithState(type: TokenType, nextCount: number, state: LookaheadState): boolean;
        ts_eatContextualWithState(name: string, nextCount: number, state: LookaheadState): boolean;
        canHaveLeadingDecorator(): boolean;
        eatContextual(name: string): boolean;
        tsIsExternalModuleReference(): boolean;
        tsParseExternalModuleReference(): any;
        tsParseEntityName(allowReservedWords?: boolean): Node;
        tsParseEnumMember(): Node;
        tsParseEnumDeclaration(node: any, properties?: {
            const?: true;
            declare?: true;
        }): any;
        tsParseModuleBlock(): Node;
        tsParseAmbientExternalModuleDeclaration(node: any): any;
        tsTryParseDeclare(nany: any): any | undefined | null;
        tsIsListTerminator(kind: any): boolean;
        /**
         * If !expectSuccess, returns undefined instead of failing to parse.
         * If expectSuccess, parseElement should always return a defined value.
         */
        tsParseDelimitedListWorker<T_4 extends acornNamespace.Node>(kind: any, parseElement: () => T_4, expectSuccess: boolean, refTrailingCommaPos?: {
            value: number;
        }): T_4[];
        tsParseDelimitedList<T_5 extends acornNamespace.Node>(kind: any, parseElement: () => T_5, refTrailingCommaPos?: {
            value: number;
        }): T_5[];
        tsParseBracketedList<T_6 extends acornNamespace.Node>(kind: any, parseElement: () => T_6, bracket: boolean, skipFirstToken: boolean, refTrailingCommaPos?: {
            value: number;
        }): T_6[];
        tsParseTypeParameterName(): any | string;
        tsEatThenParseType(token: TokenType): Node | typeof undefined;
        tsExpectThenParseType(token: TokenType): Node;
        tsNextThenParseType(): Node;
        tsDoThenParseType(cb: () => void): Node;
        tsSkipParameterStart(): boolean;
        tsIsUnambiguouslyStartOfFunctionType(): boolean;
        tsIsStartOfFunctionType(): unknown;
        tsInAllowConditionalTypesContext<T_7>(cb: () => T_7): T_7;
        tsParseBindingListForSignature(): Array<any>;
        tsParseTypePredicateAsserts(): boolean;
        tsParseThisTypeNode(): any;
        tsParseTypeAnnotation(eatColon?: boolean, t?: any): any;
        tsParseThisTypePredicate(lhs: any): any;
        tsParseThisTypeOrThisTypePredicate(): any;
        tsParseTypePredicatePrefix(): any | undefined | null;
        tsParseTypeOrTypePredicateAnnotation(returnToken: TokenType): Node;
        tsFillSignature(returnToken: TokenType, signature: any): void;
        tsTryNextParseConstantContext(): Node | undefined | null;
        tsParseFunctionOrConstructorType(type: 'TSFunctionType' | 'TSConstructorType', abstract?: boolean): any;
        tsParseUnionOrIntersectionType(kind: 'TSUnionType' | 'TSIntersectionType', parseConstituentType: () => Node, operator: TokenType): Node;
        tsCheckTypeAnnotationForReadOnly(node: any): void;
        tsParseTypeOperator(): any;
        tsParseConstraintForInferType(): any;
        tsParseInferType(): any;
        tsParseLiteralTypeNode(): any;
        tsParseImportType(): any;
        tsParseTypeQuery(): any;
        tsParseMappedTypeParameter(): any;
        tsParseMappedType(): any;
        tsParseTypeLiteral(): Node;
        tsParseTupleElementType(): any;
        tsParseTupleType(): any;
        tsParseTemplateLiteralType(): any;
        tsParseTypeReference(): any;
        tsMatchLeftRelational(): boolean;
        tsMatchRightRelational(): boolean;
        tsParseParenthesizedType(): any;
        tsParseNonArrayType(): Node;
        tsParseArrayTypeOrHigher(): Node;
        tsParseTypeOperatorOrHigher(): Node;
        tsParseIntersectionTypeOrHigher(): Node;
        tsParseUnionTypeOrHigher(): acornNamespace.Node;
        tsParseNonConditionalType(): any;
        /** Be sure to be in a type context before calling this, using `tsInType`. */
        tsParseType(): any;
        tsIsUnambiguouslyIndexSignature(): boolean;
        /**
         * Runs `cb` in a type context.
         * This should be called one token *before* the first type token,
         * so that the call to `next()` is run in type context.
         */
        tsInType<T_8>(cb: () => T_8): T_8;
        tsTryParseIndexSignature(node: any): any | undefined | null;
        tsParseNoneModifiers(node: any): void;
        tsParseTypeParameter(parseModifiers?: (node: Node) => void): Node;
        tsParseTypeParameters(parseModifiers?: (node: any) => void): any;
        tsTryParseTypeParameters(parseModifiers?: (node: any) => void): any;
        tsTryParse<T_9>(f: () => false | T_9): T_9;
        tsTokenCanFollowModifier(): boolean;
        tsNextTokenCanFollowModifier(): boolean;
        /** Parses a modifier matching one the given modifier names. */
        tsParseModifier<T_10 extends TsModifier>(allowedModifiers: T_10[], stopOnStartOfClassStaticBlock?: boolean): T_10;
        tsParseModifiersByMap({ modified, map }: {
            modified: ModifierBase;
            map: Record<string, any>;
        }): void;
        /** Parses a list of modifiers, in any order.
         *  If you need a specific order, you must call this function multiple times:
         *    this.tsParseModifiers({ modified: node, allowedModifiers: ['public'] });
         *    this.tsParseModifiers({ modified: node, allowedModifiers: ["abstract", "readonly"] });
         */
        tsParseModifiers({ modified, allowedModifiers, disallowedModifiers, stopOnStartOfClassStaticBlock, errorTemplate }: {
            modified: ModifierBase;
            allowedModifiers: readonly TsModifier[];
            disallowedModifiers?: TsModifier[];
            stopOnStartOfClassStaticBlock?: boolean;
            errorTemplate?: any;
        }): Record<string, any>;
        tsParseInOutModifiers(node: any): void;
        tsParseTypeArguments(): any;
        tsParseHeritageClause(token: 'extends' | 'implements'): Array<any>;
        tsParseTypeMemberSemicolon(): void;
        tsTryParseAndCatch<T_11 extends unknown>(f: () => T_11): T_11;
        tsParseSignatureMember(kind: 'TSCallSignatureDeclaration' | 'TSConstructSignatureDeclaration', node: Node): Node;
        tsParsePropertyOrMethodSignature(node: any, readonly: boolean): any;
        tsParseTypeMember(): any;
        tsParseList<T_12 extends acornNamespace.Node>(kind: ParsingContext, parseElement: () => T_12): T_12[];
        tsParseObjectTypeMembers(): Array<Node>;
        tsParseInterfaceDeclaration(node: any, properties?: {
            declare?: true;
        }): any | undefined | null;
        tsParseAbstractDeclaration(node: any): any | undefined | null;
        tsIsDeclarationStart(): boolean;
        tsParseExpressionStatement(node: any, expr: any): any;
        tsParseModuleReference(): any;
        tsIsExportDefaultSpecifier(): boolean;
        tsInAmbientContext<T_13>(cb: () => T_13): T_13;
        tsCheckLineTerminator(next: boolean): boolean;
        tsParseModuleOrNamespaceDeclaration(node: any, nested?: boolean): any;
        checkLValSimple(expr: any, bindingType?: any, checkClashes?: any): any;
        tsParseTypeAliasDeclaration(node: any): any;
        tsParseDeclaration(node: any, value: string, next: boolean): any | undefined | null;
        tsTryParseExportDeclaration(): any | undefined | null;
        tsParseImportEqualsDeclaration(node: any, isExport?: boolean): Node;
        isExportDefaultSpecifier(): boolean;
        parseTemplate({ isTagged }?: {
            isTagged?: boolean;
        }): any;
        parseFunction(node: any, statement?: number, allowExpressionBody?: boolean, isAsync?: boolean, forInit?: boolean): any;
        parseFunctionBody(node: any, isArrowFunction?: boolean, isMethod?: boolean, forInit?: boolean, tsConfig?: {
            isFunctionDeclaration?: boolean;
            isClassMethod?: boolean;
        }): any;
        parseNew(): any;
        parseExprOp(left: any, leftStartPos: number, leftStartLoc: Position, minPrec: number, forInit: boolean): any;
        parseImportSpecifiers(): any[];
        /**
         * @param {Node} node this may be ImportDeclaration |
         * TsImportEqualsDeclaration
         * @returns AnyImport
         * */
        parseImport(node: any): any;
        parseExportDefaultDeclaration(): any;
        parseExportAllDeclaration(node: any, exports: any): any;
        parseDynamicImport(node: any): any;
        parseExport(node: any, exports: any): any;
        checkExport(exports: any, name: any, _: any): void;
        parseMaybeDefault(startPos?: number | null, startLoc?: Position | null, left?: any | null): any;
        typeCastToParameter(node: any): any;
        toAssignableList(exprList: any[], isBinding: boolean): any;
        reportReservedArrowTypeParam(node: any): void;
        parseExprAtom(refDestructuringErrors?: DestructuringErrors, forInit?: boolean, forNew?: boolean): any;
        parseExprAtomDefault(): any;
        parseIdentNode(): any;
        parseVarStatement(node: any, kind: any, allowMissingInitializer?: boolean): any;
        parseStatement(context: any, topLevel?: any, exports?: any): any;
        parseAccessModifier(): Accessibility | undefined | null;
        parsePostMemberNameModifiers(methodOrProp: any): void;
        parseExpressionStatement(node: any, expr: any): any;
        shouldParseExportStatement(): boolean;
        parseConditional(expr: any, startPos: number, startLoc: Position, forInit?: boolean, refDestructuringErrors?: any): any;
        parseMaybeConditional(forInit: any, refDestructuringErrors: any): any;
        parseParenItem(node: any): any;
        parseExportDeclaration(node: any): any | undefined | null;
        parseClassId(node: any, isStatement: boolean | 'nullableID'): void;
        parseClassPropertyAnnotation(node: any): void;
        parseClassField(field: any): any;
        parseClassMethod(method: any, isGenerator: any, isAsync: any, allowsDirectSuper: any): any;
        isClassMethod(): boolean;
        parseClassElement(constructorAllowsSuper: any): any;
        isClassElementNameStart(): boolean;
        parseClassSuper(node: any): void;
        parseFunctionParams(node: any): void;
        parseVarId(decl: any, kind: 'var' | 'let' | 'const'): void;
        parseArrowExpression(node: any, params: any[], isAsync: boolean, forInit?: boolean): any;
        parseMaybeAssignOrigin(forInit?: any, refDestructuringErrors?: any | null, afterLeftParse?: any): any;
        parseMaybeAssign(forInit?: boolean, refExpressionErrors?: any | null, afterLeftParse?: any): any;
        parseAssignableListItem(allowModifiers: boolean | undefined | null): any;
        checkLValInnerPattern(expr: any, bindingType: number, checkClashes: any): void;
        parseBindingListItem(param: any): any;
        isAssignable(node: any, isBinding?: boolean): boolean;
        toAssignable(node: any, isBinding?: boolean, refDestructuringErrors?: DestructuringErrors): any;
        toAssignableParenthesizedExpression(node: any, isBinding: boolean, refDestructuringErrors: DestructuringErrors): void;
        curPosition(): acornNamespace.Position;
        parseBindingAtom(): any;
        shouldParseArrow(exprList?: any): boolean;
        parseParenArrowList(startPos: any, startLoc: any, exprList: any, forInit: any): any;
        parseParenAndDistinguishExpression(canBeArrow: any, forInit: any): any;
        parseTaggedTemplateExpression(base: any, startPos: number, startLoc: Position, optionalChainMember: boolean): any;
        shouldParseAsyncArrow(): boolean;
        parseSubscriptAsyncArrow(startPos: any, startLoc: any, exprList: any, forInit: any): any;
        parseExprList(close: TokenType, allowTrailingComma?: any, allowEmpty?: any, refDestructuringErrors?: any): any[];
        parseSubscript(base: any, startPos: any, startLoc: any, noCalls: any, maybeAsyncArrow: any, optionalChained: any, forInit: any): any;
        parseGetterSetter(prop: any): void;
        parseProperty(isPattern: any, refDestructuringErrors: any): any;
        parseCatchClauseParam(): any;
        parseClass(node: any, isStatement: boolean | 'nullableID'): any;
        parseClassFunctionParams(): any;
        parseMethod(isGenerator: boolean, isAsync?: boolean, allowDirectSuper?: boolean, inClassScope?: boolean, method?: any): any;
        parseImportSpecifier(): any;
        parseExportSpecifier(exports: any): any;
        parseTypeOnlyImportExportSpecifier(node: any, isImport: boolean, isInTypeOnlyImportExport: boolean): void;
        raiseCommonCheck(pos: number, message: string, recoverable: boolean): void;
        raiseRecoverable(pos: number, message: string): void;
        raise(pos: number, message: string): void;
        updateContext(prevType: any): any;
        jsx_parseOpeningElementAt(startPos: any, startLoc: any): any;
        enterScope(flags: any): void;
        exitScope(): void;
        hasImport(name: string, allowShadow?: boolean): boolean;
        maybeExportDefined(scope: any, name: string): void;
        isRedeclaredInScope(scope: any, name: string, bindingType: any): boolean;
        checkRedeclarationInScope(scope: any, name: string, bindingType: any, loc: any): void;
        declareName(name: any, bindingType: any, pos: any): void;
        checkLocalExport(id: any): void;
        options: acornNamespace.Options & {
            onComment: any;
        };
        pos: number;
        potentialArrowAt: number;
        yieldPos: number;
        value: any;
        containsEsc: boolean;
        awaitPos: number;
        keywords: any;
        awaitIdentPos: number;
        strict: boolean;
        lastTokStart: number;
        lastTokEnd: number;
        treatFunctionsAsVar: boolean;
        inGenerator: any;
        exprAllowed: boolean;
        labels: any[];
        scopeStack: any[];
        inModule: any;
        undefinedExports: any;
        lastTokEndLoc: any;
        lastTokStartLoc: any;
        context: any[];
        endLoc: any;
        startLoc: any;
        potentialArrowInForAwait: boolean;
        currentScope(): any;
        treatFunctionsAsVarInScope(scope: any): boolean;
        parseExportSpecifiers(exports: any): any[];
        parseModuleExportName(): any;
        expectContextual(name: string): any;
        semicolon(): any;
        eat(type: acornNamespace.TokenType): boolean;
        unexpected(pos?: number): any;
        startNode(): any;
        startNodeAt(pos: number, loc: any): any;
        isAsyncFunction(): boolean;
        checkVariableExport(exports: any, decls: any): any;
        checkUnreserved(options: {
            start: number;
            end: number;
            name: string;
        }): any;
        finishOp(type: acornNamespace.TokenType, size: number): any;
        readToken_lt_gt(code: number): acornNamespace.TokenType;
        fullCharCodeAtPos(): number;
        canInsertSemicolon(): boolean;
        expect(type: acornNamespace.TokenType): void;
        readWord1(): string;
        curContext(): any;
        isContextual(name: string): boolean;
        parseLiteral(value: string): any;
        parseFunctionStatement(node: any, isAsync?: boolean, declarationPosition?: any): any;
        parseObj(isPattern?: boolean, refDestructuringErrors?: any): any;
        parseBindingList(close: acornNamespace.TokenType, allowEmpty?: boolean, allowTrailingComma?: boolean, allowModifiers?: boolean): any;
        parsePropertyName(prop: any): any;
        isLet(context?: any): boolean;
        parseTemplateElement({ isTagged }: {
            isTagged: boolean;
        }): any;
        parseExpression(forInit?: boolean, refDestructuringErrors?: any): any;
        initFunction(node: any): void;
        parseSubscripts(base: any, startPos: number, startLoc: acornNamespace.Position, noCalls?: any, forInit?: any): any;
        parseSpread(refDestructuringErrors: any): any;
        parseMaybeUnary(refExpressionErrors?: any, sawUnary?: boolean, incDec?: boolean, forInit?: boolean): any;
        readRegexp(): any;
        overrideContext(ctx: any): any;
        isSimpleAssignTarget(expr: any): boolean;
        parseExprImport(forNew?: boolean): any;
        next(ignoreEscapeSequenceInKeyword?: boolean): any;
        parseExprOps(forInit?: boolean, refDestructuringErrors?: any): any;
        checkExpressionErrors(refDestructuringErrors: any, andThrow?: boolean): any;
        parseClassStaticBlock(node: any): any;
        parseClassElementName(element: any): any;
        checkPatternErrors(refDestructuringErrors?: any, isAssign?: boolean): any;
        parseExprSubscripts(refDestructuringErrors?: any, forInit?: boolean): any;
        checkYieldAwaitInDefaultParams(): any;
        parseParenExpression(): any;
        afterTrailingComma(tokType: acornNamespace.TokenType, notNext?: boolean): any;
        parsePrivateIdent(): any;
        parseRestBinding(): any;
        parseBlock(createNewLexicalScope?: boolean, node?: any, exitStrict?: boolean): any;
        enterClassBody(): any;
        exitClassBody(): any;
        parseVar(node: any, isFor: any, kind: any, allowMissingInitializer: any): any;
        parseIdent(liberal?: boolean): any;
        copyNode(node: any): any;
        checkLValPattern(expr: any, bindingType?: number, checkClashes?: any): any;
        isAsyncProp(prop: any): boolean;
        parseYield(forInit?: any): any;
        takeDecorators(node: any): void;
        parseDecorators(allowExport?: boolean): void;
        parseDecorator(): any;
        parseMaybeDecoratorArguments(expr: any): any;
        jsx_readToken(): any;
        jsx_readString(quote: any): any;
        jsx_parseText(): any;
        jsx_parseElement(): any;
        jsx_readWord(): any;
        jsx_parseElementName(): any;
        jsx_parseAttribute(): any;
        parseImportDefaultSpecifier(): any;
        parseImportNamespaceSpecifier(): any;
        parseImportAttributes(): any;
        parseMaybeImportAttributes(node: any): any;
        lineStart: number;
        curLine: number;
        start: number;
        end: number;
        input: string;
        type: acornNamespace.TokenType;
        parse(this: acornNamespace.Parser): acornNamespace.Node;
        nextToken(): void;
        parseTopLevel(node: acornNamespace.Node): acornNamespace.Node;
        finishNodeAt(node: acornNamespace.Node, type: string, pos: number, loc: acornNamespace.Position): acornNamespace.Node;
    };
    readonly acornTypeScript: import("./types").AcornTypeScript;
    parse(input: string, options: Options): acornNamespace.Node;
    parseExpressionAt(input: string, pos: number, options: Options): any;
    acorn: typeof acornNamespace;
    tokenizer(this: typeof acornNamespace.Parser, input: string, options: acornNamespace.Options): {
        getToken(): acornNamespace.Token;
        [Symbol.iterator](): Iterator<acornNamespace.Token, any, undefined>;
    };
    extend(this: typeof acornNamespace.Parser, ...plugins: ((BaseParser: typeof acornNamespace.Parser) => typeof acornNamespace.Parser)[]): typeof acornNamespace.Parser;
};
export { tsPlugin as default, tsPlugin };
