initSidebarItems({"derive":[["NodeContent","Mark a type as representing data in an AST node"]],"enum":[["ArraySpecifierDimension","One array specifier dimension."],["AssignmentOp","All possible operators for assigning expressions."],["BinaryOp","All binary operators that exist in GLSL."],["CaseLabel","Case label statement."],["CommentData","A comment"],["Condition","Condition."],["DeclarationData","A declaration."],["Expr","The most general form of an expression."],["ExternalDeclarationData","External declaration."],["ForInitStatement","For init statement."],["FunIdentifier","Function identifier."],["FunctionParameterDeclarationData","Function parameter declaration."],["Initializer","Initializer."],["InterpolationQualifier","Interpolation qualifier."],["IterationStatement","Iteration statement."],["JumpStatement","Jump statement."],["LayoutQualifierSpec","Layout qualifier spec."],["Path","A path literal."],["PrecisionQualifier","Precision qualifier."],["PreprocessorData","Some basic preprocessor directives."],["PreprocessorDefine","A #define preprocessor directive."],["PreprocessorExtensionBehavior","An #extension behavior annotation."],["PreprocessorExtensionName","An #extension name annotation."],["PreprocessorVersionProfile","A #version profile annotation."],["SelectionRestStatement","Selection rest statement."],["StatementData","Statement."],["StorageQualifier","Storage qualifier."],["TypeQualifierSpec","Type qualifier spec."],["TypeSpecifierNonArray","Type specifier (non-array)."],["UnaryOp","All unary operators that exist in GLSL."]],"struct":[["ArraySpecifier","Dimensionality of an array."],["ArrayedIdentifier","An identifier with an optional array specifier."],["Block","A general purpose block, containing fields and possibly a list of declared identifiers. Semantic is given with the storage qualifier."],["CompoundStatementData","Compound statement (with no new scope)."],["ExprStatement","Expression statement."],["ForRestStatement","For init statement."],["FullySpecifiedType","Fully specified type."],["FunctionDefinitionData","Function definition."],["FunctionParameterDeclarator","Function parameter declarator."],["FunctionPrototypeData","Function prototype."],["IdentifierData","A generic identifier."],["InitDeclaratorList","Init declarator list."],["LayoutQualifier","Layout qualifier."],["Node","A syntax node with span information"],["NodeSpan","Span information for a node, constructed from a nom_locate::LocatedSpan"],["PreprocessorElseIf","An #else preprocessor directive."],["PreprocessorError","An #error preprocessor directive."],["PreprocessorExtension","An #extension preprocessor directive."],["PreprocessorIf","An #if preprocessor directive."],["PreprocessorIfDef","An #ifdef preprocessor directive."],["PreprocessorIfNDef","A #ifndef preprocessor directive."],["PreprocessorInclude","An #include name annotation."],["PreprocessorLine","A #line preprocessor directive."],["PreprocessorPragma","A #pragma preprocessor directive. Holds compiler-specific command."],["PreprocessorUndef","A #undef preprocessor directive."],["PreprocessorVersion","A #version preprocessor directive."],["SelectionStatement","Selection statement."],["SingleDeclaration","Single declaration."],["SingleDeclarationNoType","A single declaration with implicit, already-defined type."],["SmolStr","A `SmolStr` is a string type that has the following properties:"],["StructFieldSpecifier","Struct field specifier. Used to add fields to struct specifiers."],["StructSpecifier","Struct specifier. Used to create new, user-defined types."],["SwitchStatement","Switch statement."],["TranslationUnit","Starting rule."],["TypeNameData","Any type name."],["TypeQualifier","Type qualifier."],["TypeSpecifier","Type specifier."]],"trait":[["NodeContent","Trait for AST node contents."],["NodeContentEq","Trait for comparing the content of syntax nodes"],["NodeDisplay","Trait for displaying a syntax node"]],"type":[["Comment","Type alias for `Node<CommentData>`"],["CompoundStatement","Type alias for `Node<CompoundStatementData>`"],["Declaration","Type alias for `Node<DeclarationData>`"],["ExternalDeclaration","Type alias for `Node<ExternalDeclarationData>`"],["FunctionDefinition","Type alias for `Node<FunctionDefinitionData>`"],["FunctionParameterDeclaration","Type alias for `Node<FunctionParameterDeclarationData>`"],["FunctionPrototype","Type alias for `Node<FunctionPrototypeData>`"],["Identifier","Type alias for `Node<IdentifierData>`"],["Preprocessor","Type alias for `Node<PreprocessorData>`"],["Statement","Type alias for `Node<StatementData>`"],["TypeName","Type alias for `Node<TypeNameData>`"]]});