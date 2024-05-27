export declare const TypeScriptError: {
    AbstractMethodHasImplementation: ({ methodName }: {
        methodName: any;
    }) => string;
    AbstractPropertyHasInitializer: ({ propertyName }: {
        propertyName: any;
    }) => string;
    AccesorCannotDeclareThisParameter: string;
    AccesorCannotHaveTypeParameters: string;
    CannotFindName: ({ name }: {
        name: any;
    }) => string;
    ClassMethodHasDeclare: string;
    ClassMethodHasReadonly: string;
    ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: string;
    ConstructorHasTypeParameters: string;
    DeclareAccessor: ({ kind }: {
        kind: any;
    }) => string;
    DeclareClassFieldHasInitializer: string;
    DeclareFunctionHasImplementation: string;
    DuplicateAccessibilityModifier: () => string;
    DuplicateModifier: ({ modifier }: {
        modifier: any;
    }) => string;
    EmptyHeritageClauseType: ({ token }: {
        token: any;
    }) => string;
    EmptyTypeArguments: string;
    EmptyTypeParameters: string;
    ExpectedAmbientAfterExportDeclare: string;
    ImportAliasHasImportType: string;
    IncompatibleModifiers: ({ modifiers }: {
        modifiers: any;
    }) => string;
    IndexSignatureHasAbstract: string;
    IndexSignatureHasAccessibility: ({ modifier }: {
        modifier: any;
    }) => string;
    IndexSignatureHasDeclare: string;
    IndexSignatureHasOverride: string;
    IndexSignatureHasStatic: string;
    InitializerNotAllowedInAmbientContext: string;
    InvalidModifierOnTypeMember: ({ modifier }: {
        modifier: any;
    }) => string;
    InvalidModifierOnTypeParameter: ({ modifier }: {
        modifier: any;
    }) => string;
    InvalidModifierOnTypeParameterPositions: ({ modifier }: {
        modifier: any;
    }) => string;
    InvalidModifiersOrder: ({ orderedModifiers }: {
        orderedModifiers: any;
    }) => string;
    InvalidPropertyAccessAfterInstantiationExpression: string;
    InvalidTupleMemberLabel: string;
    MissingInterfaceName: string;
    MixedLabeledAndUnlabeledElements: string;
    NonAbstractClassHasAbstractMethod: string;
    NonClassMethodPropertyHasAbstractModifer: string;
    OptionalTypeBeforeRequired: string;
    OverrideNotInSubClass: string;
    PatternIsOptional: string;
    PrivateElementHasAbstract: string;
    PrivateElementHasAccessibility: ({ modifier }: {
        modifier: any;
    }) => string;
    PrivateMethodsHasAccessibility: ({ modifier }: {
        modifier: any;
    }) => string;
    ReadonlyForMethodSignature: string;
    ReservedArrowTypeParam: string;
    ReservedTypeAssertion: string;
    SetAccesorCannotHaveOptionalParameter: string;
    SetAccesorCannotHaveRestParameter: string;
    SetAccesorCannotHaveReturnType: string;
    SingleTypeParameterWithoutTrailingComma: ({ typeParameterName }: {
        typeParameterName: any;
    }) => string;
    StaticBlockCannotHaveModifier: string;
    TypeAnnotationAfterAssign: string;
    TypeImportCannotSpecifyDefaultAndNamed: string;
    TypeModifierIsUsedInTypeExports: string;
    TypeModifierIsUsedInTypeImports: string;
    UnexpectedParameterModifier: string;
    UnexpectedReadonly: string;
    GenericsEndWithComma: string;
    UnexpectedTypeAnnotation: string;
    UnexpectedTypeCastInParameter: string;
    UnsupportedImportTypeArgument: string;
    UnsupportedParameterPropertyKind: string;
    UnsupportedSignatureParameterKind: ({ type }: {
        type: any;
    }) => string;
    LetInLexicalBinding: string;
};
export declare const DecoratorsError: {
    UnexpectedLeadingDecorator: string;
    DecoratorConstructor: string;
    TrailingDecorator: string;
    SpreadElementDecorator: string;
};
