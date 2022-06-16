parser grammar epScriptParser;

options {
    tokenVocab=epScriptLexer;
}

program
 : sourceElements? EOF
 ;

sourceElement
 : statement
 ;

statement
 : block
 | importStatement
 | emptyStatement
 | variableStatement
 | ifStatement
 | iterationStatement
 | switchStatement
 | onceStatement
 | continueStatement
 | breakStatement
 | returnStatement
 | objectDeclaration
 | functionDeclaration
 | expressionStatement
 ;

block
 : '{' statementList? '}'
 ;

statementList
 : statement+
 ;

importStatement
 : Import dottedName importNamespace? SemiColon
 ;

dottedName
 : dottedName Dot identifier
 | identifier
 ;

importNamespace
 : As identifier
 ;

variableStatement
 : variableDeclarationList SemiColon
 ;

variableDeclarationList
 : Static? varModifier variableDeclaration (',' variableDeclaration)*
 ;

variableDeclaration
 : assignAble ('=' singleExpression)?
 ;

emptyStatement
 : SemiColon
 ;

assignAble
 : identifier
 ;

expressionStatement
 : expressionSequence SemiColon
 ;

varModifier
 : Var
 | Const
 ;

ifStatement
 : If '(' expressionSequence ')' statement (Else statement)?
 ;

iterationStatement
 : While '(' expressionSequence ')' statement # WhileStatement
 | For '(' (expressionSequence | variableDeclarationList?) ';' expressionSequence? ';' expressionSequence? ')' statement # ForStatement
 | Foreach foreachBlock statement # ForeachStatement
 ;

foreachBlock
 : '(' identifier (',' identifier)* ':' singleExpression ')'
 ;

onceStatement
 : Once statement
 ;

continueStatement
 : Continue expressionSequence? SemiColon
 ;

breakStatement
 : Break expressionSequence? SemiColon
 ;

returnStatement
 : Return expressionSequence? SemiColon
 ;

switchStatement
 : Switch '(' expressionSequence ')' caseBlock
 ;

caseBlock
 : '{' caseClauses? (defaultClause caseClauses?)? '}'
 ;

caseClauses
 : caseClause+
 ;

caseClause
 : Case expressionSequence ':' statementList?
 ;

defaultClause
 : Default ':' statementList?
 ;

objectDeclaration
 : Object identifier objectTail SemiColon
 ;

objectTail
 : '{' objectElement* '}'
 ;

objectElement
 : objectVariableDeclaration
 | functionDeclaration
 ;

objectVariableDeclaration
 : Var identifier typeAnnotation? SemiColon
 ;

// Type Annotations

typeAnnotation
 : ':' singleExpression
 ;
 
// Function Declaration

functionDeclaration
 : Function identifier '(' formalParameterList? ')' typeAnnotation? functionBody
 ;

formalParameterList
 : formalParameterArg (',' formalParameterArg)* (',' lastFormalParameterArg)?
 | lastFormalParameterArg
 ;

formalParameterArg
 : assignAble typeAnnotation?
 ;

lastFormalParameterArg
 : singleExpression
 ;

functionBody
 : '{' sourceElements? '}'
 ;

functionDefine
 : Function identifier '(' formalParameterList? ')' SemiColon
 ;

sourceElements
 : sourceElement+
 ;

arrayLiteral
 : ('[' elementList ']')
 ;

elementList
 : ','* arrayElement? (','+ arrayElement)* ','*
 |
 ;

arrayElement
 : singleExpression
 ;

arguments
 : '(' (argumentList ','?)? ')'
 ;

argumentList
 : argument (',' argument?)*
 ;


argument
 : singleExpression
 ;
 
expressionSequence
 : singleExpression (',' singleExpression)*
 ;

// Expressions

singleExpression
 : anonymosuFunction                                            # AnonymousFunctionExpression
 | singleExpression '[' expressionSequence ']'                  # MemberExpression
 | singleExpression '.' identifier                              # MemberDotExpression
 | singleExpression arguments                                   # CallExpression
 | singleExpression '?' singleExpression ':' singleExpression   # TernaryExpression
 | singleExpression postfixOperator                             # PostfixExpression
 | prefixOperator singleExpression                              # PrefixExpression
 | singleExpression binaryOperator singleExpression             # BinaryExpression 
 | This                                                         # ThisExpression
 | identifier                                                   # IdentifierExpression
 | BooleanLiterl                                                # BooleanLiteralExpression
 | StringLiteral                                                # StringLiteralExpression
 | numericLiteral                                               # NumericLiteralExpression
 | arrayLiteral                                                 # ArrayLiteralExpression
 | '(' expressionSequence ')'                                   # ParanthesizedExpression
 ;

anonymosuFunction
 : Function '(' formalParameterList? ')' typeAnnotation? functionBody
 ;

postfixOperator
 : PlusPlus
 | MinusMinus
 ;

prefixOperator
 : PlusPlus
 | MinusMinus
 | Plus
 | Minus
 | BitNot
 | Not
 ;

binaryOperator
 : Multiply
 | Divide
 | Modulus
 | Plus
 | Minus
 | LessThan
 | MoreThan
 | LessThanEquals
 | GreaterThanEquals
 | Equals
 | NotEquals
 | BitAnd
 | BitXOr
 | BitOr
 | LeftShiftArithmetic
 | RightShiftArithmetic
 | And
 | Or
 | Assign
 | MultiplyAssign
 | PlusAssign
 | BitOrAssign
 | MinusAssign
 | BitAndAssign
 | BitXorAssign
 | MultiplyAssign
 | LeftShiftArithmeticAssign
 | RightShiftArithmeticAssign
 ;

numericLiteral
 : DecimalLiteral
 | HexIntegerLiteral
 ;

identifierName
 : identifier
 | reservedWord
 ;

identifier
 : Identifier
 ;

reservedWord
 : keyword
 ;

keyword
 : Import
 | As
 | Var
 | Const
 | Static
 | Function
 | Object
 | L2V
 | Once
 | If
 | Else
 | For
 | Foreach
 | While
 | Break
 | Continue
 | Return
 | Switch
 | Case
 | Default
 ;