lexer grammar epScriptLexer;

// Boolean Literals
BooleanLiterl
 : 'true'
 | 'false'
 ;

// Numeric Literals
DecimalLiteral
 : DecimicalDigit+
 ;

HexIntegerLiteral
 : '0' [xX] HexDigit+
 ;

// Special Chars
OpenBracket     : '[';
CloseBracket    : ']';
OpenParen       : '(';
CloseParen      : ')';
OpenBrace       : '{';
CloseBrace      : '}';
Dot             : '.';
QuestionMark    : '?';
Comma           : ',';
Colon           : ':';
SemiColon       : ';';

// 0.65.2 Inplace Operators
PlusPlus                    : '++';
MinusMinus                  : '--';
PlusAssign                  : '+=';
MinusAssign                 : '-=';
MultiplyAssign              : '*=';
LeftShiftArithmeticAssign   : '<<=';
RightShiftArithmeticAssign  : '>>=';
BitAndAssign                : '&=';
BitXorAssign                : '^=';
BitOrAssign                 : '|=';

// Operators
And                     : '&&';
Or                      : '||';
LeftShiftArithmetic     : '<<';
RightShiftArithmetic    : '>>';
BitNot                  : '~';
BitAnd                  : '&';
BitOr                   : '|';
BitXOr                  : '^';
Equals                  : '==';
LessThanEquals          : '<=';
GreaterThanEquals       : '>=';
LessThan                : '<';
MoreThan                : '>';
NotEquals               : '!=';
Not                     : '!';
Plus                    : '+';
Minus                   : '-';
Multiply                : '*';
Divide                  : '/';
Modulus                 : '%';
Assign                  : '=';


// 0.65.2 Keywords
Import      : 'import';
As          : 'as';
Var         : 'var';
Const       : 'const';
Static      : 'static';
Function    : 'function';
Object      : 'object';
L2V         : 'l2v';
Once        : 'once';
If          : 'if';
Else        : 'else';
For         : 'for';
Foreach     : 'foreach';
While       : 'while';
Break       : 'break';
Continue    : 'continue';
Return      : 'return';
Switch      : 'switch';
Case        : 'case';
Default     : 'default';
This        : 'this';

// Identifier
Identifier
 : IdentifierStart IdentifierPart*
 ;

// String Literals
StringLiteral
 : '"' DoubleStringCharacter* '"'
 | '\'' SingleStringCharacter* '\''
 ;

WhiteSpaces
 : [\t\u000B\u000C\u0020\u00A0]+ -> skip
 ;

LineTerminator
 : [\r\n\u2028\u2029] -> skip
 ;

/// Comments
DocComment
 : '/**' .*? '*/' -> channel(HIDDEN)
 ;

MultiLineComment
 : '/*' .*? '*/' -> channel(HIDDEN)
 ;

SingleLineComment
 : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN)
 ;

UnexpectedCharacter
 : .
 ;

DoubleStringCharacter
 : ~["\\\r\n]
 | '\\' EscapeSequence 
 | LineContinuation
 ;

SingleStringCharacter
 : ~['\\\r\n]
 | '\\' EscapeSequence
 | LineContinuation
 ;

fragment LineContinuation
 : '\\' [\r\n\u2028\u2029]
 ;

fragment EscapeSequence
 : CharacterEscapeSequence
 | UnicodeEscapeSequence
 ;

fragment CharacterEscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;

fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;

fragment UnicodeEscapeSequence
 : 'x' HexDigit HexDigit
 ;

fragment DecimicalDigit
 : [0-9]
 ;

fragment HexDigit
 : [0-9a-fA-F]
 ;

fragment IdentifierPart
 : IdentifierStart
 | [\p{Mn}]
 | [\p{Nd}]
 | [\p{Pc}]
 | '\u200C'
 | '\u200D'
 ;

fragment IdentifierStart
 : [\p{L}]
 | [$_]
 | '\\' UnicodeEscapeSequence
 ;