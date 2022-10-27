// Generated from ./epScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { epScriptParserListener } from "./epScriptParserListener";
import { epScriptParserVisitor } from "./epScriptParserVisitor";


export class epScriptParser extends Parser {
	public static readonly BooleanLiterl = 1;
	public static readonly DecimalLiteral = 2;
	public static readonly HexIntegerLiteral = 3;
	public static readonly OpenBracket = 4;
	public static readonly CloseBracket = 5;
	public static readonly OpenParen = 6;
	public static readonly CloseParen = 7;
	public static readonly OpenBrace = 8;
	public static readonly CloseBrace = 9;
	public static readonly Dot = 10;
	public static readonly QuestionMark = 11;
	public static readonly Comma = 12;
	public static readonly Colon = 13;
	public static readonly SemiColon = 14;
	public static readonly PlusPlus = 15;
	public static readonly MinusMinus = 16;
	public static readonly PlusAssign = 17;
	public static readonly MinusAssign = 18;
	public static readonly MultiplyAssign = 19;
	public static readonly LeftShiftArithmeticAssign = 20;
	public static readonly RightShiftArithmeticAssign = 21;
	public static readonly BitAndAssign = 22;
	public static readonly BitXorAssign = 23;
	public static readonly BitOrAssign = 24;
	public static readonly And = 25;
	public static readonly Or = 26;
	public static readonly LeftShiftArithmetic = 27;
	public static readonly RightShiftArithmetic = 28;
	public static readonly BitNot = 29;
	public static readonly BitAnd = 30;
	public static readonly BitOr = 31;
	public static readonly BitXOr = 32;
	public static readonly Equals = 33;
	public static readonly LessThanEquals = 34;
	public static readonly GreaterThanEquals = 35;
	public static readonly LessThan = 36;
	public static readonly MoreThan = 37;
	public static readonly NotEquals = 38;
	public static readonly Not = 39;
	public static readonly Plus = 40;
	public static readonly Minus = 41;
	public static readonly Multiply = 42;
	public static readonly Divide = 43;
	public static readonly Modulus = 44;
	public static readonly Assign = 45;
	public static readonly Import = 46;
	public static readonly As = 47;
	public static readonly Var = 48;
	public static readonly Const = 49;
	public static readonly Static = 50;
	public static readonly Function = 51;
	public static readonly Object = 52;
	public static readonly L2V = 53;
	public static readonly Once = 54;
	public static readonly If = 55;
	public static readonly Else = 56;
	public static readonly For = 57;
	public static readonly Foreach = 58;
	public static readonly While = 59;
	public static readonly Break = 60;
	public static readonly Continue = 61;
	public static readonly Return = 62;
	public static readonly Switch = 63;
	public static readonly Epdswitch = 64;
	public static readonly Case = 65;
	public static readonly Default = 66;
	public static readonly This = 67;
	public static readonly Identifier = 68;
	public static readonly StringLiteral = 69;
	public static readonly WhiteSpaces = 70;
	public static readonly LineTerminator = 71;
	public static readonly DocComment = 72;
	public static readonly MultiLineComment = 73;
	public static readonly SingleLineComment = 74;
	public static readonly UnexpectedCharacter = 75;
	public static readonly DoubleStringCharacter = 76;
	public static readonly SingleStringCharacter = 77;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_importStatement = 5;
	public static readonly RULE_dottedName = 6;
	public static readonly RULE_importNamespace = 7;
	public static readonly RULE_variableStatement = 8;
	public static readonly RULE_variableDeclarationList = 9;
	public static readonly RULE_variableDeclaration = 10;
	public static readonly RULE_emptyStatement = 11;
	public static readonly RULE_assignAble = 12;
	public static readonly RULE_expressionStatement = 13;
	public static readonly RULE_varModifier = 14;
	public static readonly RULE_ifStatement = 15;
	public static readonly RULE_iterationStatement = 16;
	public static readonly RULE_foreachBlock = 17;
	public static readonly RULE_onceStatement = 18;
	public static readonly RULE_continueStatement = 19;
	public static readonly RULE_breakStatement = 20;
	public static readonly RULE_returnStatement = 21;
	public static readonly RULE_switchStatement = 22;
	public static readonly RULE_caseBlock = 23;
	public static readonly RULE_caseClauses = 24;
	public static readonly RULE_caseClause = 25;
	public static readonly RULE_defaultClause = 26;
	public static readonly RULE_objectDeclaration = 27;
	public static readonly RULE_objectTail = 28;
	public static readonly RULE_objectElement = 29;
	public static readonly RULE_objectVariableDeclaration = 30;
	public static readonly RULE_typeAnnotation = 31;
	public static readonly RULE_functionDeclaration = 32;
	public static readonly RULE_formalParameterList = 33;
	public static readonly RULE_formalParameterArg = 34;
	public static readonly RULE_functionBody = 35;
	public static readonly RULE_functionDefine = 36;
	public static readonly RULE_sourceElements = 37;
	public static readonly RULE_arrayLiteral = 38;
	public static readonly RULE_elementList = 39;
	public static readonly RULE_arrayElement = 40;
	public static readonly RULE_arguments = 41;
	public static readonly RULE_argumentList = 42;
	public static readonly RULE_argument = 43;
	public static readonly RULE_expressionSequence = 44;
	public static readonly RULE_singleExpression = 45;
	public static readonly RULE_anonymosuFunction = 46;
	public static readonly RULE_postfixOperator = 47;
	public static readonly RULE_prefixOperator = 48;
	public static readonly RULE_binaryOperator = 49;
	public static readonly RULE_numericLiteral = 50;
	public static readonly RULE_identifierName = 51;
	public static readonly RULE_identifier = 52;
	public static readonly RULE_reservedWord = 53;
	public static readonly RULE_keyword = 54;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
		"dottedName", "importNamespace", "variableStatement", "variableDeclarationList", 
		"variableDeclaration", "emptyStatement", "assignAble", "expressionStatement", 
		"varModifier", "ifStatement", "iterationStatement", "foreachBlock", "onceStatement", 
		"continueStatement", "breakStatement", "returnStatement", "switchStatement", 
		"caseBlock", "caseClauses", "caseClause", "defaultClause", "objectDeclaration", 
		"objectTail", "objectElement", "objectVariableDeclaration", "typeAnnotation", 
		"functionDeclaration", "formalParameterList", "formalParameterArg", "functionBody", 
		"functionDefine", "sourceElements", "arrayLiteral", "elementList", "arrayElement", 
		"arguments", "argumentList", "argument", "expressionSequence", "singleExpression", 
		"anonymosuFunction", "postfixOperator", "prefixOperator", "binaryOperator", 
		"numericLiteral", "identifierName", "identifier", "reservedWord", "keyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'['", "']'", "'('", "')'", 
		"'{'", "'}'", "'.'", "'?'", "','", "':'", "';'", "'++'", "'--'", "'+='", 
		"'-='", "'*='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'&&'", "'||'", 
		"'<<'", "'>>'", "'~'", "'&'", "'|'", "'^'", "'=='", "'<='", "'>='", "'<'", 
		"'>'", "'!='", "'!'", "'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'import'", 
		"'as'", "'var'", "'const'", "'static'", "'function'", "'object'", "'l2v'", 
		"'once'", "'if'", "'else'", "'for'", "'foreach'", "'while'", "'break'", 
		"'continue'", "'return'", "'switch'", "'epdswitch'", "'case'", "'default'", 
		"'this'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BooleanLiterl", "DecimalLiteral", "HexIntegerLiteral", "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
		"Dot", "QuestionMark", "Comma", "Colon", "SemiColon", "PlusPlus", "MinusMinus", 
		"PlusAssign", "MinusAssign", "MultiplyAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
		"And", "Or", "LeftShiftArithmetic", "RightShiftArithmetic", "BitNot", 
		"BitAnd", "BitOr", "BitXOr", "Equals", "LessThanEquals", "GreaterThanEquals", 
		"LessThan", "MoreThan", "NotEquals", "Not", "Plus", "Minus", "Multiply", 
		"Divide", "Modulus", "Assign", "Import", "As", "Var", "Const", "Static", 
		"Function", "Object", "L2V", "Once", "If", "Else", "For", "Foreach", "While", 
		"Break", "Continue", "Return", "Switch", "Epdswitch", "Case", "Default", 
		"This", "Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", 
		"DocComment", "MultiLineComment", "SingleLineComment", "UnexpectedCharacter", 
		"DoubleStringCharacter", "SingleStringCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(epScriptParser._LITERAL_NAMES, epScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return epScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "epScriptParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return epScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return epScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(epScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, epScriptParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 110;
				this.sourceElements();
				}
			}

			this.state = 113;
			this.match(epScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let _localctx: SourceElementContext = new SourceElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, epScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, epScriptParser.RULE_statement);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.importStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 119;
				this.emptyStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 120;
				this.variableStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 121;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 122;
				this.iterationStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 123;
				this.switchStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 124;
				this.onceStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 125;
				this.continueStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 126;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 127;
				this.returnStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 128;
				this.objectDeclaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 129;
				this.functionDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 130;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, epScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(epScriptParser.OpenBrace);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 134;
				this.statementList();
				}
			}

			this.state = 137;
			this.match(epScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, epScriptParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 139;
				this.statement();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, epScriptParser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(epScriptParser.Import);
			this.state = 145;
			this.dottedName(0);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.As) {
				{
				this.state = 146;
				this.importNamespace();
				}
			}

			this.state = 149;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public dottedName(): DottedNameContext;
	public dottedName(_p: number): DottedNameContext;
	// @RuleVersion(0)
	public dottedName(_p?: number): DottedNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DottedNameContext = new DottedNameContext(this._ctx, _parentState);
		let _prevctx: DottedNameContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, epScriptParser.RULE_dottedName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 152;
			this.identifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 159;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DottedNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_dottedName);
					this.state = 154;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 155;
					this.match(epScriptParser.Dot);
					this.state = 156;
					this.identifier();
					}
					}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importNamespace(): ImportNamespaceContext {
		let _localctx: ImportNamespaceContext = new ImportNamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, epScriptParser.RULE_importNamespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(epScriptParser.As);
			this.state = 163;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, epScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.variableDeclarationList();
			this.state = 166;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, epScriptParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.state = 201;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				_localctx = new VariableDefineListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Static) {
					{
					this.state = 168;
					this.match(epScriptParser.Static);
					}
				}

				this.state = 171;
				this.varModifier();
				this.state = 172;
				this.assignAble();
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === epScriptParser.Comma) {
					{
					{
					this.state = 173;
					this.match(epScriptParser.Comma);
					this.state = 174;
					this.assignAble();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				_localctx = new VariableAssignmentListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Static) {
					{
					this.state = 180;
					this.match(epScriptParser.Static);
					}
				}

				this.state = 183;
				this.varModifier();
				this.state = 184;
				this.assignAble();
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === epScriptParser.Comma) {
					{
					{
					this.state = 185;
					this.match(epScriptParser.Comma);
					this.state = 186;
					this.assignAble();
					}
					}
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 192;
				this.match(epScriptParser.Assign);
				this.state = 193;
				this.singleExpression(0);
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === epScriptParser.Comma) {
					{
					{
					this.state = 194;
					this.match(epScriptParser.Comma);
					this.state = 195;
					this.singleExpression(0);
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, epScriptParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.assignAble();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Assign) {
				{
				this.state = 204;
				this.match(epScriptParser.Assign);
				this.state = 205;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, epScriptParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignAble(): AssignAbleContext {
		let _localctx: AssignAbleContext = new AssignAbleContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, epScriptParser.RULE_assignAble);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, epScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.expressionSequence();
			this.state = 213;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, epScriptParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_la = this._input.LA(1);
			if (!(_la === epScriptParser.Var || _la === epScriptParser.Const)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, epScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(epScriptParser.If);
			this.state = 218;
			this.match(epScriptParser.OpenParen);
			this.state = 219;
			this.expressionSequence();
			this.state = 220;
			this.match(epScriptParser.CloseParen);
			this.state = 221;
			this.statement();
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 222;
				this.match(epScriptParser.Else);
				this.state = 223;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, epScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.While:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.match(epScriptParser.While);
				this.state = 227;
				this.match(epScriptParser.OpenParen);
				this.state = 228;
				this.expressionSequence();
				this.state = 229;
				this.match(epScriptParser.CloseParen);
				this.state = 230;
				this.statement();
				}
				break;
			case epScriptParser.For:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 232;
				this.match(epScriptParser.For);
				this.state = 233;
				this.match(epScriptParser.OpenParen);
				this.state = 238;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case epScriptParser.BooleanLiterl:
				case epScriptParser.DecimalLiteral:
				case epScriptParser.HexIntegerLiteral:
				case epScriptParser.OpenBracket:
				case epScriptParser.OpenParen:
				case epScriptParser.PlusPlus:
				case epScriptParser.MinusMinus:
				case epScriptParser.BitNot:
				case epScriptParser.Not:
				case epScriptParser.Plus:
				case epScriptParser.Minus:
				case epScriptParser.Function:
				case epScriptParser.This:
				case epScriptParser.Identifier:
				case epScriptParser.StringLiteral:
					{
					this.state = 234;
					this.expressionSequence();
					}
					break;
				case epScriptParser.SemiColon:
				case epScriptParser.Var:
				case epScriptParser.Const:
				case epScriptParser.Static:
					{
					this.state = 236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (epScriptParser.Var - 48)) | (1 << (epScriptParser.Const - 48)) | (1 << (epScriptParser.Static - 48)))) !== 0)) {
						{
						this.state = 235;
						this.variableDeclarationList();
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 240;
				this.match(epScriptParser.SemiColon);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
					{
					this.state = 241;
					this.expressionSequence();
					}
				}

				this.state = 244;
				this.match(epScriptParser.SemiColon);
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
					{
					this.state = 245;
					this.expressionSequence();
					}
				}

				this.state = 248;
				this.match(epScriptParser.CloseParen);
				this.state = 249;
				this.statement();
				}
				break;
			case epScriptParser.Foreach:
				_localctx = new ForeachStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				this.match(epScriptParser.Foreach);
				this.state = 251;
				this.foreachBlock();
				this.state = 252;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public foreachBlock(): ForeachBlockContext {
		let _localctx: ForeachBlockContext = new ForeachBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, epScriptParser.RULE_foreachBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(epScriptParser.OpenParen);
			this.state = 257;
			this.identifier();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === epScriptParser.Comma) {
				{
				{
				this.state = 258;
				this.match(epScriptParser.Comma);
				this.state = 259;
				this.identifier();
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
			this.match(epScriptParser.Colon);
			this.state = 266;
			this.singleExpression(0);
			this.state = 267;
			this.match(epScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onceStatement(): OnceStatementContext {
		let _localctx: OnceStatementContext = new OnceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, epScriptParser.RULE_onceStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(epScriptParser.Once);
			this.state = 270;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, epScriptParser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(epScriptParser.Continue);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 273;
				this.expressionSequence();
				}
			}

			this.state = 276;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, epScriptParser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(epScriptParser.Break);
			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 279;
				this.expressionSequence();
				}
			}

			this.state = 282;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, epScriptParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(epScriptParser.Return);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 285;
				this.expressionSequence();
				}
			}

			this.state = 288;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, epScriptParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			_la = this._input.LA(1);
			if (!(_la === epScriptParser.Switch || _la === epScriptParser.Epdswitch)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 291;
			this.match(epScriptParser.OpenParen);
			this.state = 292;
			this.expressionSequence();
			this.state = 293;
			this.match(epScriptParser.CloseParen);
			this.state = 294;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let _localctx: CaseBlockContext = new CaseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, epScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(epScriptParser.OpenBrace);
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Case) {
				{
				this.state = 297;
				this.caseClauses();
				}
			}

			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Default) {
				{
				this.state = 300;
				this.defaultClause();
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Case) {
					{
					this.state = 301;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 306;
			this.match(epScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let _localctx: CaseClausesContext = new CaseClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, epScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 308;
				this.caseClause();
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === epScriptParser.Case);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let _localctx: CaseClauseContext = new CaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, epScriptParser.RULE_caseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(epScriptParser.Case);
			this.state = 314;
			this.expressionSequence();
			this.state = 315;
			this.match(epScriptParser.Colon);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 316;
				this.statementList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let _localctx: DefaultClauseContext = new DefaultClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, epScriptParser.RULE_defaultClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.match(epScriptParser.Default);
			this.state = 320;
			this.match(epScriptParser.Colon);
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 321;
				this.statementList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectDeclaration(): ObjectDeclarationContext {
		let _localctx: ObjectDeclarationContext = new ObjectDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, epScriptParser.RULE_objectDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(epScriptParser.Object);
			this.state = 325;
			this.identifier();
			this.state = 326;
			this.objectTail();
			this.state = 327;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectTail(): ObjectTailContext {
		let _localctx: ObjectTailContext = new ObjectTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, epScriptParser.RULE_objectTail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(epScriptParser.OpenBrace);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === epScriptParser.Var || _la === epScriptParser.Function) {
				{
				{
				this.state = 330;
				this.objectElement();
				}
				}
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 336;
			this.match(epScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectElement(): ObjectElementContext {
		let _localctx: ObjectElementContext = new ObjectElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, epScriptParser.RULE_objectElement);
		try {
			this.state = 340;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.Var:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.objectVariableDeclaration();
				}
				break;
			case epScriptParser.Function:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 339;
				this.functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectVariableDeclaration(): ObjectVariableDeclarationContext {
		let _localctx: ObjectVariableDeclarationContext = new ObjectVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, epScriptParser.RULE_objectVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(epScriptParser.Var);
			this.state = 343;
			this.identifier();
			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 344;
				this.typeAnnotation();
				}
			}

			this.state = 347;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let _localctx: TypeAnnotationContext = new TypeAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, epScriptParser.RULE_typeAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(epScriptParser.Colon);
			this.state = 350;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, epScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(epScriptParser.Function);
			this.state = 353;
			this.identifier();
			this.state = 354;
			this.match(epScriptParser.OpenParen);
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Identifier) {
				{
				this.state = 355;
				this.formalParameterList();
				}
			}

			this.state = 358;
			this.match(epScriptParser.CloseParen);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 359;
				this.typeAnnotation();
				}
			}

			this.state = 362;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, epScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.formalParameterArg();
			this.state = 369;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 365;
					this.match(epScriptParser.Comma);
					this.state = 366;
					this.formalParameterArg();
					}
					}
				}
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Comma) {
				{
				this.state = 372;
				this.match(epScriptParser.Comma);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, epScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.assignAble();
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 376;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, epScriptParser.RULE_functionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(epScriptParser.OpenBrace);
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 380;
				this.sourceElements();
				}
			}

			this.state = 383;
			this.match(epScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefine(): FunctionDefineContext {
		let _localctx: FunctionDefineContext = new FunctionDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, epScriptParser.RULE_functionDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(epScriptParser.Function);
			this.state = 386;
			this.identifier();
			this.state = 387;
			this.match(epScriptParser.OpenParen);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Identifier) {
				{
				this.state = 388;
				this.formalParameterList();
				}
			}

			this.state = 391;
			this.match(epScriptParser.CloseParen);
			this.state = 392;
			this.match(epScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let _localctx: SourceElementsContext = new SourceElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, epScriptParser.RULE_sourceElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 394;
				this.sourceElement();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Static - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)) | (1 << (epScriptParser.Epdswitch - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, epScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 399;
			this.match(epScriptParser.OpenBracket);
			this.state = 400;
			this.elementList();
			this.state = 401;
			this.match(epScriptParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, epScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 430;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 403;
						this.match(epScriptParser.Comma);
						}
						}
					}
					this.state = 408;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
					{
					this.state = 409;
					this.arrayElement();
					}
				}

				this.state = 420;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 413;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 412;
							this.match(epScriptParser.Comma);
							}
							}
							this.state = 415;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === epScriptParser.Comma);
						this.state = 417;
						this.arrayElement();
						}
						}
					}
					this.state = 422;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === epScriptParser.Comma) {
					{
					{
					this.state = 423;
					this.match(epScriptParser.Comma);
					}
					}
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let _localctx: ArrayElementContext = new ArrayElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, epScriptParser.RULE_arrayElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, epScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.match(epScriptParser.OpenParen);
			this.state = 439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
				{
				this.state = 435;
				this.argumentList();
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Comma) {
					{
					this.state = 436;
					this.match(epScriptParser.Comma);
					}
				}

				}
			}

			this.state = 441;
			this.match(epScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, epScriptParser.RULE_argumentList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.argument();
			this.state = 450;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 444;
					this.match(epScriptParser.Comma);
					this.state = 446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.This - 39)) | (1 << (epScriptParser.Identifier - 39)) | (1 << (epScriptParser.StringLiteral - 39)))) !== 0)) {
						{
						this.state = 445;
						this.argument();
						}
					}

					}
					}
				}
				this.state = 452;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, epScriptParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, epScriptParser.RULE_expressionSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.singleExpression(0);
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === epScriptParser.Comma) {
				{
				{
				this.state = 456;
				this.match(epScriptParser.Comma);
				this.state = 457;
				this.singleExpression(0);
				}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 90;
		this.enterRecursionRule(_localctx, 90, epScriptParser.RULE_singleExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.Function:
				{
				_localctx = new AnonymousFunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 464;
				this.anonymosuFunction();
				}
				break;
			case epScriptParser.PlusPlus:
			case epScriptParser.MinusMinus:
			case epScriptParser.BitNot:
			case epScriptParser.Not:
			case epScriptParser.Plus:
			case epScriptParser.Minus:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 465;
				this.prefixOperator();
				this.state = 466;
				this.singleExpression(9);
				}
				break;
			case epScriptParser.This:
				{
				_localctx = new ThisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 468;
				this.match(epScriptParser.This);
				}
				break;
			case epScriptParser.Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 469;
				this.identifier();
				}
				break;
			case epScriptParser.BooleanLiterl:
				{
				_localctx = new BooleanLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 470;
				this.match(epScriptParser.BooleanLiterl);
				}
				break;
			case epScriptParser.StringLiteral:
				{
				_localctx = new StringLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 471;
				this.match(epScriptParser.StringLiteral);
				}
				break;
			case epScriptParser.DecimalLiteral:
			case epScriptParser.HexIntegerLiteral:
				{
				_localctx = new NumericLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 472;
				this.numericLiteral();
				}
				break;
			case epScriptParser.OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 473;
				this.arrayLiteral();
				}
				break;
			case epScriptParser.OpenParen:
				{
				_localctx = new ParanthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 474;
				this.match(epScriptParser.OpenParen);
				this.state = 475;
				this.expressionSequence();
				this.state = 476;
				this.match(epScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 504;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 502;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 480;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 481;
						this.match(epScriptParser.QuestionMark);
						this.state = 482;
						this.singleExpression(0);
						this.state = 483;
						this.match(epScriptParser.Colon);
						this.state = 484;
						this.singleExpression(12);
						}
						break;

					case 2:
						{
						_localctx = new BinaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 486;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 487;
						this.binaryOperator();
						this.state = 488;
						this.singleExpression(9);
						}
						break;

					case 3:
						{
						_localctx = new MemberExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 490;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 491;
						this.match(epScriptParser.OpenBracket);
						this.state = 492;
						this.expressionSequence();
						this.state = 493;
						this.match(epScriptParser.CloseBracket);
						}
						break;

					case 4:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 495;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 496;
						this.match(epScriptParser.Dot);
						this.state = 497;
						this.identifier();
						}
						break;

					case 5:
						{
						_localctx = new CallExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 498;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 499;
						this.arguments();
						}
						break;

					case 6:
						{
						_localctx = new PostfixExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 500;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 501;
						this.postfixOperator();
						}
						break;
					}
					}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymosuFunction(): AnonymosuFunctionContext {
		let _localctx: AnonymosuFunctionContext = new AnonymosuFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, epScriptParser.RULE_anonymosuFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.match(epScriptParser.Function);
			this.state = 508;
			this.match(epScriptParser.OpenParen);
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Identifier) {
				{
				this.state = 509;
				this.formalParameterList();
				}
			}

			this.state = 512;
			this.match(epScriptParser.CloseParen);
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 513;
				this.typeAnnotation();
				}
			}

			this.state = 516;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixOperator(): PostfixOperatorContext {
		let _localctx: PostfixOperatorContext = new PostfixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, epScriptParser.RULE_postfixOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			_la = this._input.LA(1);
			if (!(_la === epScriptParser.PlusPlus || _la === epScriptParser.MinusMinus)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefixOperator(): PrefixOperatorContext {
		let _localctx: PrefixOperatorContext = new PrefixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, epScriptParser.RULE_prefixOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			_la = this._input.LA(1);
			if (!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (epScriptParser.PlusPlus - 15)) | (1 << (epScriptParser.MinusMinus - 15)) | (1 << (epScriptParser.BitNot - 15)) | (1 << (epScriptParser.Not - 15)) | (1 << (epScriptParser.Plus - 15)) | (1 << (epScriptParser.Minus - 15)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, epScriptParser.RULE_binaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (epScriptParser.PlusAssign - 17)) | (1 << (epScriptParser.MinusAssign - 17)) | (1 << (epScriptParser.MultiplyAssign - 17)) | (1 << (epScriptParser.LeftShiftArithmeticAssign - 17)) | (1 << (epScriptParser.RightShiftArithmeticAssign - 17)) | (1 << (epScriptParser.BitAndAssign - 17)) | (1 << (epScriptParser.BitXorAssign - 17)) | (1 << (epScriptParser.BitOrAssign - 17)) | (1 << (epScriptParser.And - 17)) | (1 << (epScriptParser.Or - 17)) | (1 << (epScriptParser.LeftShiftArithmetic - 17)) | (1 << (epScriptParser.RightShiftArithmetic - 17)) | (1 << (epScriptParser.BitAnd - 17)) | (1 << (epScriptParser.BitOr - 17)) | (1 << (epScriptParser.BitXOr - 17)) | (1 << (epScriptParser.Equals - 17)) | (1 << (epScriptParser.LessThanEquals - 17)) | (1 << (epScriptParser.GreaterThanEquals - 17)) | (1 << (epScriptParser.LessThan - 17)) | (1 << (epScriptParser.MoreThan - 17)) | (1 << (epScriptParser.NotEquals - 17)) | (1 << (epScriptParser.Plus - 17)) | (1 << (epScriptParser.Minus - 17)) | (1 << (epScriptParser.Multiply - 17)) | (1 << (epScriptParser.Divide - 17)) | (1 << (epScriptParser.Modulus - 17)) | (1 << (epScriptParser.Assign - 17)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, epScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			_la = this._input.LA(1);
			if (!(_la === epScriptParser.DecimalLiteral || _la === epScriptParser.HexIntegerLiteral)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, epScriptParser.RULE_identifierName);
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 526;
				this.identifier();
				}
				break;
			case epScriptParser.Import:
			case epScriptParser.As:
			case epScriptParser.Var:
			case epScriptParser.Const:
			case epScriptParser.Static:
			case epScriptParser.Function:
			case epScriptParser.Object:
			case epScriptParser.L2V:
			case epScriptParser.Once:
			case epScriptParser.If:
			case epScriptParser.Else:
			case epScriptParser.For:
			case epScriptParser.Foreach:
			case epScriptParser.While:
			case epScriptParser.Break:
			case epScriptParser.Continue:
			case epScriptParser.Return:
			case epScriptParser.Switch:
			case epScriptParser.Case:
			case epScriptParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 527;
				this.reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, epScriptParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(epScriptParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, epScriptParser.RULE_reservedWord);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.keyword();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, epScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (epScriptParser.Import - 46)) | (1 << (epScriptParser.As - 46)) | (1 << (epScriptParser.Var - 46)) | (1 << (epScriptParser.Const - 46)) | (1 << (epScriptParser.Static - 46)) | (1 << (epScriptParser.Function - 46)) | (1 << (epScriptParser.Object - 46)) | (1 << (epScriptParser.L2V - 46)) | (1 << (epScriptParser.Once - 46)) | (1 << (epScriptParser.If - 46)) | (1 << (epScriptParser.Else - 46)) | (1 << (epScriptParser.For - 46)) | (1 << (epScriptParser.Foreach - 46)) | (1 << (epScriptParser.While - 46)) | (1 << (epScriptParser.Break - 46)) | (1 << (epScriptParser.Continue - 46)) | (1 << (epScriptParser.Return - 46)) | (1 << (epScriptParser.Switch - 46)) | (1 << (epScriptParser.Case - 46)) | (1 << (epScriptParser.Default - 46)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.dottedName_sempred(_localctx as DottedNameContext, predIndex);

		case 45:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);
		}
		return true;
	}
	private dottedName_sempred(_localctx: DottedNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 10);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u021B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x03\x02\x05\x02r\n\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x86" +
		"\n\x04\x03\x05\x03\x05\x05\x05\x8A\n\x05\x03\x05\x03\x05\x03\x06\x06\x06" +
		"\x8F\n\x06\r\x06\x0E\x06\x90\x03\x07\x03\x07\x03\x07\x05\x07\x96\n\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xA0\n\b\f\b" +
		"\x0E\b\xA3\v\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x05\v\xAC\n\v" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\xB2\n\v\f\v\x0E\v\xB5\v\v\x03\v\x05\v\xB8" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x07\v\xBE\n\v\f\v\x0E\v\xC1\v\v\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\xC7\n\v\f\v\x0E\v\xCA\v\v\x05\v\xCC\n\v\x03\f\x03" +
		"\f\x03\f\x05\f\xD1\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\xE3\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xEF\n\x12\x05\x12\xF1\n\x12\x03" +
		"\x12\x03\x12\x05\x12\xF5\n\x12\x03\x12\x03\x12\x05\x12\xF9\n\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0101\n\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\u0107\n\x13\f\x13\x0E\x13\u010A\v\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05" +
		"\x15\u0115\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u011B\n\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0121\n\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u012D" +
		"\n\x19\x03\x19\x03\x19\x05\x19\u0131\n\x19\x05\x19\u0133\n\x19\x03\x19" +
		"\x03\x19\x03\x1A\x06\x1A\u0138\n\x1A\r\x1A\x0E\x1A\u0139\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0140\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0145" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x07\x1E" +
		"\u014E\n\x1E\f\x1E\x0E\x1E\u0151\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x05\x1F\u0157\n\x1F\x03 \x03 \x03 \x05 \u015C\n \x03 \x03 \x03!\x03!" +
		"\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u0167\n\"\x03\"\x03\"\x05\"\u016B" +
		"\n\"\x03\"\x03\"\x03#\x03#\x03#\x07#\u0172\n#\f#\x0E#\u0175\v#\x03#\x05" +
		"#\u0178\n#\x03$\x03$\x05$\u017C\n$\x03%\x03%\x05%\u0180\n%\x03%\x03%\x03" +
		"&\x03&\x03&\x03&\x05&\u0188\n&\x03&\x03&\x03&\x03\'\x06\'\u018E\n\'\r" +
		"\'\x0E\'\u018F\x03(\x03(\x03(\x03(\x03)\x07)\u0197\n)\f)\x0E)\u019A\v" +
		")\x03)\x05)\u019D\n)\x03)\x06)\u01A0\n)\r)\x0E)\u01A1\x03)\x07)\u01A5" +
		"\n)\f)\x0E)\u01A8\v)\x03)\x07)\u01AB\n)\f)\x0E)\u01AE\v)\x03)\x05)\u01B1" +
		"\n)\x03*\x03*\x03+\x03+\x03+\x05+\u01B8\n+\x05+\u01BA\n+\x03+\x03+\x03" +
		",\x03,\x03,\x05,\u01C1\n,\x07,\u01C3\n,\f,\x0E,\u01C6\v,\x03-\x03-\x03" +
		".\x03.\x03.\x07.\u01CD\n.\f.\x0E.\u01D0\v.\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u01E1\n/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x07/\u01F9\n/\f/\x0E/\u01FC\v/\x030\x03" +
		"0\x030\x050\u0201\n0\x030\x030\x050\u0205\n0\x030\x030\x031\x031\x032" +
		"\x032\x033\x033\x034\x034\x035\x035\x055\u0213\n5\x036\x036\x037\x037" +
		"\x038\x038\x038\x02\x02\x04\x0E\\9\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"\x02\t\x03\x0223\x03\x02AB\x03\x02\x11\x12\x05\x02\x11\x12\x1F\x1F)+\x05" +
		"\x02\x13\x1E (*/\x03\x02\x04\x05\x04\x020ACD\x02\u0234\x02q\x03\x02\x02" +
		"\x02\x04u\x03\x02\x02\x02\x06\x85\x03\x02\x02\x02\b\x87\x03\x02\x02\x02" +
		"\n\x8E\x03\x02\x02\x02\f\x92\x03\x02\x02\x02\x0E\x99\x03\x02\x02\x02\x10" +
		"\xA4\x03\x02\x02\x02\x12\xA7\x03\x02\x02\x02\x14\xCB\x03\x02\x02\x02\x16" +
		"\xCD\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD4\x03\x02\x02\x02\x1C" +
		"\xD6\x03\x02\x02\x02\x1E\xD9\x03\x02\x02\x02 \xDB\x03\x02\x02\x02\"\u0100" +
		"\x03\x02\x02\x02$\u0102\x03\x02\x02\x02&\u010F\x03\x02\x02\x02(\u0112" +
		"\x03\x02\x02\x02*\u0118\x03\x02\x02\x02,\u011E\x03\x02\x02\x02.\u0124" +
		"\x03\x02\x02\x020\u012A\x03\x02\x02\x022\u0137\x03\x02\x02\x024\u013B" +
		"\x03\x02\x02\x026\u0141\x03\x02\x02\x028\u0146\x03\x02\x02\x02:\u014B" +
		"\x03\x02\x02\x02<\u0156\x03\x02\x02\x02>\u0158\x03\x02\x02\x02@\u015F" +
		"\x03\x02\x02\x02B\u0162\x03\x02\x02\x02D\u016E\x03\x02\x02\x02F\u0179" +
		"\x03\x02\x02\x02H\u017D\x03\x02\x02\x02J\u0183\x03\x02\x02\x02L\u018D" +
		"\x03\x02\x02\x02N\u0191\x03\x02\x02\x02P\u01B0\x03\x02\x02\x02R\u01B2" +
		"\x03\x02\x02\x02T\u01B4\x03\x02\x02\x02V\u01BD\x03\x02\x02\x02X\u01C7" +
		"\x03\x02\x02\x02Z\u01C9\x03\x02\x02\x02\\\u01E0\x03\x02\x02\x02^\u01FD" +
		"\x03\x02\x02\x02`\u0208\x03\x02\x02\x02b\u020A\x03\x02\x02\x02d\u020C" +
		"\x03\x02\x02\x02f\u020E\x03\x02\x02\x02h\u0212\x03\x02\x02\x02j\u0214" +
		"\x03\x02\x02\x02l\u0216\x03\x02\x02\x02n\u0218\x03\x02\x02\x02pr\x05L" +
		"\'\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x07\x02" +
		"\x02\x03t\x03\x03\x02\x02\x02uv\x05\x06\x04\x02v\x05\x03\x02\x02\x02w" +
		"\x86\x05\b\x05\x02x\x86\x05\f\x07\x02y\x86\x05\x18\r\x02z\x86\x05\x12" +
		"\n\x02{\x86\x05 \x11\x02|\x86\x05\"\x12\x02}\x86\x05.\x18\x02~\x86\x05" +
		"&\x14\x02\x7F\x86\x05(\x15\x02\x80\x86\x05*\x16\x02\x81\x86\x05,\x17\x02" +
		"\x82\x86\x058\x1D\x02\x83\x86\x05B\"\x02\x84\x86\x05\x1C\x0F\x02\x85w" +
		"\x03\x02\x02\x02\x85x\x03\x02\x02\x02\x85y\x03\x02\x02\x02\x85z\x03\x02" +
		"\x02\x02\x85{\x03\x02\x02\x02\x85|\x03\x02\x02\x02\x85}\x03\x02\x02\x02" +
		"\x85~\x03\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02" +
		"\x85\x81\x03\x02\x02\x02\x85\x82\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02" +
		"\x85\x84\x03\x02\x02\x02\x86\x07\x03\x02\x02\x02\x87\x89\x07\n\x02\x02" +
		"\x88\x8A\x05\n\x06\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02" +
		"\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x07\v\x02\x02\x8C\t\x03\x02\x02\x02\x8D" +
		"\x8F\x05\x06\x04\x02\x8E\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90" +
		"\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\v\x03\x02\x02\x02\x92" +
		"\x93\x070\x02\x02\x93\x95\x05\x0E\b\x02\x94\x96\x05\x10\t\x02\x95\x94" +
		"\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98" +
		"\x07\x10\x02\x02\x98\r\x03\x02\x02\x02\x99\x9A\b\b\x01\x02\x9A\x9B\x05" +
		"j6\x02\x9B\xA1\x03\x02\x02\x02\x9C\x9D\f\x04\x02\x02\x9D\x9E\x07\f\x02" +
		"\x02\x9E\xA0\x05j6\x02\x9F\x9C\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02" +
		"\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x0F\x03\x02\x02\x02" +
		"\xA3\xA1\x03\x02\x02\x02\xA4\xA5\x071\x02\x02\xA5\xA6\x05j6\x02\xA6\x11" +
		"\x03\x02\x02\x02\xA7\xA8\x05\x14\v\x02\xA8\xA9\x07\x10\x02\x02\xA9\x13" +
		"\x03\x02\x02\x02\xAA\xAC\x074\x02\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC" +
		"\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x05\x1E\x10\x02\xAE\xB3" +
		"\x05\x1A\x0E\x02\xAF\xB0\x07\x0E\x02\x02\xB0\xB2\x05\x1A\x0E\x02\xB1\xAF" +
		"\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4" +
		"\x03\x02\x02\x02\xB4\xCC\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB8" +
		"\x074\x02\x02\xB7\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9" +
		"\x03\x02\x02\x02\xB9\xBA\x05\x1E\x10\x02\xBA\xBF\x05\x1A\x0E\x02\xBB\xBC" +
		"\x07\x0E\x02\x02\xBC\xBE\x05\x1A\x0E\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC1" +
		"\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2" +
		"\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC3\x07/\x02\x02\xC3\xC8" +
		"\x05\\/\x02\xC4\xC5\x07\x0E\x02\x02\xC5\xC7\x05\\/\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xAB\x03\x02" +
		"\x02\x02\xCB\xB7\x03\x02\x02\x02\xCC\x15\x03\x02\x02\x02\xCD\xD0\x05\x1A" +
		"\x0E\x02\xCE\xCF\x07/\x02\x02\xCF\xD1\x05\\/\x02\xD0\xCE\x03\x02\x02\x02" +
		"\xD0\xD1\x03\x02\x02\x02\xD1\x17\x03\x02\x02\x02\xD2\xD3\x07\x10\x02\x02" +
		"\xD3\x19\x03\x02\x02\x02\xD4\xD5\x05j6\x02\xD5\x1B\x03\x02\x02\x02\xD6" +
		"\xD7\x05Z.\x02\xD7\xD8\x07\x10\x02\x02\xD8\x1D\x03\x02\x02\x02\xD9\xDA" +
		"\t\x02\x02\x02\xDA\x1F\x03\x02\x02\x02\xDB\xDC\x079\x02\x02\xDC\xDD\x07" +
		"\b\x02\x02\xDD\xDE\x05Z.\x02\xDE\xDF\x07\t\x02\x02\xDF\xE2\x05\x06\x04" +
		"\x02\xE0\xE1\x07:\x02\x02\xE1\xE3\x05\x06\x04\x02\xE2\xE0\x03\x02\x02" +
		"\x02\xE2\xE3\x03\x02\x02\x02\xE3!\x03\x02\x02\x02\xE4\xE5\x07=\x02\x02" +
		"\xE5\xE6\x07\b\x02\x02\xE6\xE7\x05Z.\x02\xE7\xE8\x07\t\x02\x02\xE8\xE9" +
		"\x05\x06\x04\x02\xE9\u0101\x03\x02\x02\x02\xEA\xEB\x07;\x02\x02\xEB\xF0" +
		"\x07\b\x02\x02\xEC\xF1\x05Z.\x02\xED\xEF\x05\x14\v\x02\xEE\xED\x03\x02" +
		"\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEC\x03\x02" +
		"\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x07\x10" +
		"\x02\x02\xF3\xF5\x05Z.\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02" +
		"\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x07\x10\x02\x02\xF7\xF9\x05Z.\x02" +
		"\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02" +
		"\xFA\xFB\x07\t\x02\x02\xFB\u0101\x05\x06\x04\x02\xFC\xFD\x07<\x02\x02" +
		"\xFD\xFE\x05$\x13\x02\xFE\xFF\x05\x06\x04\x02\xFF\u0101\x03\x02\x02\x02" +
		"\u0100\xE4\x03\x02\x02\x02\u0100\xEA\x03\x02\x02\x02\u0100\xFC\x03\x02" +
		"\x02\x02\u0101#\x03\x02\x02\x02\u0102\u0103\x07\b\x02\x02\u0103\u0108" +
		"\x05j6\x02\u0104\u0105\x07\x0E\x02\x02\u0105\u0107\x05j6\x02\u0106\u0104" +
		"\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02" +
		"\u0108\u0109\x03\x02\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A\u0108\x03" +
		"\x02\x02\x02\u010B\u010C\x07\x0F\x02\x02\u010C\u010D\x05\\/\x02\u010D" +
		"\u010E\x07\t\x02\x02\u010E%\x03\x02\x02\x02\u010F\u0110\x078\x02\x02\u0110" +
		"\u0111\x05\x06\x04\x02\u0111\'\x03\x02\x02\x02\u0112\u0114\x07?\x02\x02" +
		"\u0113\u0115\x05Z.\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02" +
		"\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x07\x10\x02\x02\u0117" +
		")\x03\x02\x02\x02\u0118\u011A\x07>\x02\x02\u0119\u011B\x05Z.\x02\u011A" +
		"\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x03\x02" +
		"\x02\x02\u011C\u011D\x07\x10\x02\x02\u011D+\x03\x02\x02\x02\u011E\u0120" +
		"\x07@\x02\x02\u011F\u0121\x05Z.\x02\u0120\u011F\x03\x02\x02\x02\u0120" +
		"\u0121\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x07\x10" +
		"\x02\x02\u0123-\x03\x02\x02\x02\u0124\u0125\t\x03\x02\x02\u0125\u0126" +
		"\x07\b\x02\x02\u0126\u0127\x05Z.\x02\u0127\u0128\x07\t\x02\x02\u0128\u0129" +
		"\x050\x19\x02\u0129/\x03\x02\x02\x02\u012A\u012C\x07\n\x02\x02\u012B\u012D" +
		"\x052\x1A\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02" +
		"\u012D\u0132\x03\x02\x02\x02\u012E\u0130\x056\x1C\x02\u012F\u0131\x05" +
		"2\x1A\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131" +
		"\u0133\x03\x02\x02\x02\u0132\u012E\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07\v\x02\x02\u01351" +
		"\x03\x02\x02\x02\u0136\u0138\x054\x1B\x02\u0137\u0136\x03\x02\x02\x02" +
		"\u0138\u0139\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A\x03" +
		"\x02\x02\x02\u013A3\x03\x02\x02\x02\u013B\u013C\x07C\x02\x02\u013C\u013D" +
		"\x05Z.\x02\u013D\u013F\x07\x0F\x02\x02\u013E\u0140\x05\n\x06\x02\u013F" +
		"\u013E\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u01405\x03\x02\x02" +
		"\x02\u0141\u0142\x07D\x02\x02\u0142\u0144\x07\x0F\x02\x02\u0143\u0145" +
		"\x05\n\x06\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02" +
		"\u01457\x03\x02\x02\x02\u0146\u0147\x076\x02\x02\u0147\u0148\x05j6\x02" +
		"\u0148\u0149\x05:\x1E\x02\u0149\u014A\x07\x10\x02\x02\u014A9\x03\x02\x02" +
		"\x02\u014B\u014F\x07\n\x02\x02\u014C\u014E\x05<\x1F\x02\u014D\u014C\x03" +
		"\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014F\x03\x02" +
		"\x02\x02\u0152\u0153\x07\v\x02\x02\u0153;\x03\x02\x02\x02\u0154\u0157" +
		"\x05> \x02\u0155\u0157\x05B\"\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0155" +
		"\x03\x02\x02\x02\u0157=\x03\x02\x02\x02\u0158\u0159\x072\x02\x02\u0159" +
		"\u015B\x05j6\x02\u015A\u015C\x05@!\x02\u015B\u015A\x03\x02\x02\x02\u015B" +
		"\u015C\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x07\x10" +
		"\x02\x02\u015E?\x03\x02\x02\x02\u015F\u0160\x07\x0F\x02\x02\u0160\u0161" +
		"\x05\\/\x02\u0161A\x03\x02\x02\x02\u0162\u0163\x075\x02\x02\u0163\u0164" +
		"\x05j6\x02\u0164\u0166\x07\b\x02\x02\u0165\u0167\x05D#\x02\u0166\u0165" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
		"\u0168\u016A\x07\t\x02\x02\u0169\u016B\x05@!\x02\u016A\u0169\x03\x02\x02" +
		"\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D" +
		"\x05H%\x02\u016DC\x03\x02\x02\x02\u016E\u0173\x05F$\x02\u016F\u0170\x07" +
		"\x0E\x02\x02\u0170\u0172\x05F$\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0175" +
		"\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02" +
		"\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0178\x07" +
		"\x0E\x02\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178" +
		"E\x03\x02\x02\x02\u0179\u017B\x05\x1A\x0E\x02\u017A\u017C\x05@!\x02\u017B" +
		"\u017A\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017CG\x03\x02\x02" +
		"\x02\u017D\u017F\x07\n\x02\x02\u017E\u0180\x05L\'\x02\u017F\u017E\x03" +
		"\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181" +
		"\u0182\x07\v\x02\x02\u0182I\x03\x02\x02\x02\u0183\u0184\x075\x02\x02\u0184" +
		"\u0185\x05j6\x02\u0185\u0187\x07\b\x02\x02\u0186\u0188\x05D#\x02\u0187" +
		"\u0186\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189\x03\x02" +
		"\x02\x02\u0189\u018A\x07\t\x02\x02\u018A\u018B\x07\x10\x02\x02\u018BK" +
		"\x03\x02\x02\x02\u018C\u018E\x05\x04\x03\x02\u018D\u018C\x03\x02\x02\x02" +
		"\u018E\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03" +
		"\x02\x02\x02\u0190M\x03\x02\x02\x02\u0191\u0192\x07\x06\x02\x02\u0192" +
		"\u0193\x05P)\x02\u0193\u0194\x07\x07\x02\x02\u0194O\x03\x02\x02\x02\u0195" +
		"\u0197\x07\x0E\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197\u019A\x03\x02" +
		"\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199" +
		"\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019D\x05R*\x02" +
		"\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u01A6\x03" +
		"\x02\x02\x02\u019E\u01A0\x07\x0E\x02\x02\u019F\u019E\x03\x02\x02\x02\u01A0" +
		"\u01A1\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02" +
		"\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A5\x05R*\x02\u01A4\u019F" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01AC\x03\x02\x02\x02\u01A8\u01A6\x03" +
		"\x02\x02\x02\u01A9\u01AB\x07\x0E\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB" +
		"\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02" +
		"\x02\x02\u01AD\u01B1\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF" +
		"\u01B1\x03\x02\x02\x02\u01B0\u0198\x03\x02\x02\x02\u01B0\u01AF\x03\x02" +
		"\x02\x02\u01B1Q\x03\x02\x02\x02\u01B2\u01B3\x05\\/\x02\u01B3S\x03\x02" +
		"\x02\x02\u01B4\u01B9\x07\b\x02\x02\u01B5\u01B7\x05V,\x02\u01B6\u01B8\x07" +
		"\x0E\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01BA\x03\x02\x02\x02\u01B9\u01B5\x03\x02\x02\x02\u01B9\u01BA\x03\x02" +
		"\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x07\t\x02\x02\u01BCU" +
		"\x03\x02\x02\x02\u01BD\u01C4\x05X-\x02\u01BE\u01C0\x07\x0E\x02\x02\u01BF" +
		"\u01C1\x05X-\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02" +
		"\u01C1\u01C3\x03\x02\x02\x02\u01C2\u01BE\x03\x02\x02\x02\u01C3\u01C6\x03" +
		"\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5" +
		"W\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01C8\x05\\/\x02\u01C8" +
		"Y\x03\x02\x02\x02\u01C9\u01CE\x05\\/\x02\u01CA\u01CB\x07\x0E\x02\x02\u01CB" +
		"\u01CD\x05\\/\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02" +
		"\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF[\x03" +
		"\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\b/\x01\x02\u01D2" +
		"\u01E1\x05^0\x02\u01D3\u01D4\x05b2\x02\u01D4\u01D5\x05\\/\v\u01D5\u01E1" +
		"\x03\x02\x02\x02\u01D6\u01E1\x07E\x02\x02\u01D7\u01E1\x05j6\x02\u01D8" +
		"\u01E1\x07\x03\x02\x02\u01D9\u01E1\x07G\x02\x02\u01DA\u01E1\x05f4\x02" +
		"\u01DB\u01E1\x05N(\x02\u01DC\u01DD\x07\b\x02\x02\u01DD\u01DE\x05Z.\x02" +
		"\u01DE\u01DF\x07\t\x02\x02\u01DF\u01E1\x03\x02\x02\x02\u01E0\u01D1\x03" +
		"\x02\x02\x02\u01E0\u01D3\x03\x02\x02\x02\u01E0\u01D6\x03\x02\x02\x02\u01E0" +
		"\u01D7\x03\x02\x02\x02\u01E0\u01D8\x03\x02\x02\x02\u01E0\u01D9\x03\x02" +
		"\x02\x02\u01E0\u01DA\x03\x02\x02\x02\u01E0\u01DB\x03\x02\x02\x02\u01E0" +
		"\u01DC\x03\x02\x02\x02\u01E1\u01FA\x03\x02\x02\x02\u01E2\u01E3\f\r\x02" +
		"\x02\u01E3\u01E4\x07\r\x02\x02\u01E4\u01E5\x05\\/\x02\u01E5\u01E6\x07" +
		"\x0F\x02\x02\u01E6\u01E7\x05\\/\x0E\u01E7\u01F9\x03\x02\x02\x02\u01E8" +
		"\u01E9\f\n\x02\x02\u01E9\u01EA\x05d3\x02\u01EA\u01EB\x05\\/\v\u01EB\u01F9" +
		"\x03\x02\x02\x02\u01EC\u01ED\f\x10\x02\x02\u01ED\u01EE\x07\x06\x02\x02" +
		"\u01EE\u01EF\x05Z.\x02\u01EF\u01F0\x07\x07\x02\x02\u01F0\u01F9\x03\x02" +
		"\x02\x02\u01F1\u01F2\f\x0F\x02\x02\u01F2\u01F3\x07\f\x02\x02\u01F3\u01F9" +
		"\x05j6\x02\u01F4\u01F5\f\x0E\x02\x02\u01F5\u01F9\x05T+\x02\u01F6\u01F7" +
		"\f\f\x02\x02\u01F7\u01F9\x05`1\x02\u01F8\u01E2\x03\x02\x02\x02\u01F8\u01E8" +
		"\x03\x02\x02\x02\u01F8\u01EC\x03\x02\x02\x02\u01F8\u01F1\x03\x02\x02\x02" +
		"\u01F8\u01F4\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC\x03" +
		"\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB" +
		"]\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x075\x02\x02" +
		"\u01FE\u0200\x07\b\x02\x02\u01FF\u0201\x05D#\x02\u0200\u01FF\x03\x02\x02" +
		"\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204" +
		"\x07\t\x02\x02\u0203\u0205\x05@!\x02\u0204\u0203\x03\x02\x02\x02\u0204" +
		"\u0205\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x05H%\x02" +
		"\u0207_\x03\x02\x02\x02\u0208\u0209\t\x04\x02\x02\u0209a\x03\x02\x02\x02" +
		"\u020A\u020B\t\x05\x02\x02\u020Bc\x03\x02\x02\x02\u020C\u020D\t\x06\x02" +
		"\x02\u020De\x03\x02\x02\x02\u020E\u020F\t\x07\x02\x02\u020Fg\x03\x02\x02" +
		"\x02\u0210\u0213\x05j6\x02\u0211\u0213\x05l7\x02\u0212\u0210\x03\x02\x02" +
		"\x02\u0212\u0211\x03\x02\x02\x02\u0213i\x03\x02\x02\x02\u0214\u0215\x07" +
		"F\x02\x02\u0215k\x03\x02\x02\x02\u0216\u0217\x05n8\x02\u0217m\x03\x02" +
		"\x02\x02\u0218\u0219\t\b\x02\x02\u0219o\x03\x02\x02\x02;q\x85\x89\x90" +
		"\x95\xA1\xAB\xB3\xB7\xBF\xC8\xCB\xD0\xE2\xEE\xF0\xF4\xF8\u0100\u0108\u0114" +
		"\u011A\u0120\u012C\u0130\u0132\u0139\u013F\u0144\u014F\u0156\u015B\u0166" +
		"\u016A\u0173\u0177\u017B\u017F\u0187\u018F\u0198\u019C\u01A1\u01A6\u01AC" +
		"\u01B0\u01B7\u01B9\u01C0\u01C4\u01CE\u01E0\u01F8\u01FA\u0200\u0204\u0212";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!epScriptParser.__ATN) {
			epScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(epScriptParser._serializedATN));
		}

		return epScriptParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(epScriptParser.EOF, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_program; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_sourceElement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterSourceElement) {
			listener.enterSourceElement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitSourceElement) {
			listener.exitSourceElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public onceStatement(): OnceStatementContext | undefined {
		return this.tryGetRuleContext(0, OnceStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public objectDeclaration(): ObjectDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ObjectDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_statement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(epScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(epScriptParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_block; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_statementList; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public Import(): TerminalNode { return this.getToken(epScriptParser.Import, 0); }
	public dottedName(): DottedNameContext {
		return this.getRuleContext(0, DottedNameContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	public importNamespace(): ImportNamespaceContext | undefined {
		return this.tryGetRuleContext(0, ImportNamespaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DottedNameContext extends ParserRuleContext {
	public dottedName(): DottedNameContext | undefined {
		return this.tryGetRuleContext(0, DottedNameContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Dot, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_dottedName; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterDottedName) {
			listener.enterDottedName(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitDottedName) {
			listener.exitDottedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitDottedName) {
			return visitor.visitDottedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	public As(): TerminalNode { return this.getToken(epScriptParser.As, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_importNamespace; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterImportNamespace) {
			listener.enterImportNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitImportNamespace) {
			listener.exitImportNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitImportNamespace) {
			return visitor.visitImportNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_variableDeclarationList; }
	public copyFrom(ctx: VariableDeclarationListContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableDefineListContext extends VariableDeclarationListContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public assignAble(): AssignAbleContext[];
	public assignAble(i: number): AssignAbleContext;
	public assignAble(i?: number): AssignAbleContext | AssignAbleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignAbleContext);
		} else {
			return this.getRuleContext(i, AssignAbleContext);
		}
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Static, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	constructor(ctx: VariableDeclarationListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterVariableDefineList) {
			listener.enterVariableDefineList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitVariableDefineList) {
			listener.exitVariableDefineList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDefineList) {
			return visitor.visitVariableDefineList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VariableAssignmentListContext extends VariableDeclarationListContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public assignAble(): AssignAbleContext[];
	public assignAble(i: number): AssignAbleContext;
	public assignAble(i?: number): AssignAbleContext | AssignAbleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignAbleContext);
		} else {
			return this.getRuleContext(i, AssignAbleContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(epScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Static(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Static, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	constructor(ctx: VariableDeclarationListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterVariableAssignmentList) {
			listener.enterVariableAssignmentList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitVariableAssignmentList) {
			listener.exitVariableAssignmentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableAssignmentList) {
			return visitor.visitVariableAssignmentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public assignAble(): AssignAbleContext {
		return this.getRuleContext(0, AssignAbleContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignAbleContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_assignAble; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAssignAble) {
			listener.enterAssignAble(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAssignAble) {
			listener.exitAssignAble(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignAble) {
			return visitor.visitAssignAble(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Var, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(epScriptParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(epScriptParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(epScriptParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.SemiColon);
		} else {
			return this.getToken(epScriptParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForeachStatementContext extends IterationStatementContext {
	public Foreach(): TerminalNode { return this.getToken(epScriptParser.Foreach, 0); }
	public foreachBlock(): ForeachBlockContext {
		return this.getRuleContext(0, ForeachBlockContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterForeachStatement) {
			listener.enterForeachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitForeachStatement) {
			listener.exitForeachStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitForeachStatement) {
			return visitor.visitForeachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForeachBlockContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public Colon(): TerminalNode { return this.getToken(epScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_foreachBlock; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterForeachBlock) {
			listener.enterForeachBlock(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitForeachBlock) {
			listener.exitForeachBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitForeachBlock) {
			return visitor.visitForeachBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnceStatementContext extends ParserRuleContext {
	public Once(): TerminalNode { return this.getToken(epScriptParser.Once, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_onceStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterOnceStatement) {
			listener.enterOnceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitOnceStatement) {
			listener.exitOnceStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitOnceStatement) {
			return visitor.visitOnceStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(epScriptParser.Continue, 0); }
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(epScriptParser.Break, 0); }
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(epScriptParser.Return, 0); }
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
	public Switch(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Switch, 0); }
	public Epdswitch(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Epdswitch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(epScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(epScriptParser.CloseBrace, 0); }
	public caseClauses(): CaseClausesContext[];
	public caseClauses(i: number): CaseClausesContext;
	public caseClauses(i?: number): CaseClausesContext | CaseClausesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClausesContext);
		} else {
			return this.getRuleContext(i, CaseClausesContext);
		}
	}
	public defaultClause(): DefaultClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_caseBlock; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterCaseBlock) {
			listener.enterCaseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitCaseBlock) {
			listener.exitCaseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	public caseClause(): CaseClauseContext[];
	public caseClause(i: number): CaseClauseContext;
	public caseClause(i?: number): CaseClauseContext | CaseClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseClauseContext);
		} else {
			return this.getRuleContext(i, CaseClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_caseClauses; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterCaseClauses) {
			listener.enterCaseClauses(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitCaseClauses) {
			listener.exitCaseClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	public Case(): TerminalNode { return this.getToken(epScriptParser.Case, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public Colon(): TerminalNode { return this.getToken(epScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_caseClause; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterCaseClause) {
			listener.enterCaseClause(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitCaseClause) {
			listener.exitCaseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	public Default(): TerminalNode { return this.getToken(epScriptParser.Default, 0); }
	public Colon(): TerminalNode { return this.getToken(epScriptParser.Colon, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_defaultClause; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterDefaultClause) {
			listener.enterDefaultClause(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitDefaultClause) {
			listener.exitDefaultClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectDeclarationContext extends ParserRuleContext {
	public Object(): TerminalNode { return this.getToken(epScriptParser.Object, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public objectTail(): ObjectTailContext {
		return this.getRuleContext(0, ObjectTailContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_objectDeclaration; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterObjectDeclaration) {
			listener.enterObjectDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitObjectDeclaration) {
			listener.exitObjectDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectDeclaration) {
			return visitor.visitObjectDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTailContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(epScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(epScriptParser.CloseBrace, 0); }
	public objectElement(): ObjectElementContext[];
	public objectElement(i: number): ObjectElementContext;
	public objectElement(i?: number): ObjectElementContext | ObjectElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectElementContext);
		} else {
			return this.getRuleContext(i, ObjectElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_objectTail; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterObjectTail) {
			listener.enterObjectTail(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitObjectTail) {
			listener.exitObjectTail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectTail) {
			return visitor.visitObjectTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectElementContext extends ParserRuleContext {
	public objectVariableDeclaration(): ObjectVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ObjectVariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_objectElement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterObjectElement) {
			listener.enterObjectElement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitObjectElement) {
			listener.exitObjectElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectElement) {
			return visitor.visitObjectElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectVariableDeclarationContext extends ParserRuleContext {
	public Var(): TerminalNode { return this.getToken(epScriptParser.Var, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_objectVariableDeclaration; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterObjectVariableDeclaration) {
			listener.enterObjectVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitObjectVariableDeclaration) {
			listener.exitObjectVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectVariableDeclaration) {
			return visitor.visitObjectVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(epScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_typeAnnotation; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterTypeAnnotation) {
			listener.enterTypeAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitTypeAnnotation) {
			listener.exitTypeAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeAnnotation) {
			return visitor.visitTypeAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(epScriptParser.Function, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameterArg(): FormalParameterArgContext[];
	public formalParameterArg(i: number): FormalParameterArgContext;
	public formalParameterArg(i?: number): FormalParameterArgContext | FormalParameterArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterArgContext);
		} else {
			return this.getRuleContext(i, FormalParameterArgContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	public assignAble(): AssignAbleContext {
		return this.getRuleContext(0, AssignAbleContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_formalParameterArg; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterFormalParameterArg) {
			listener.enterFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitFormalParameterArg) {
			listener.exitFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterArg) {
			return visitor.visitFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(epScriptParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(epScriptParser.CloseBrace, 0); }
	public sourceElements(): SourceElementsContext | undefined {
		return this.tryGetRuleContext(0, SourceElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefineContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(epScriptParser.Function, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(epScriptParser.SemiColon, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_functionDefine; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterFunctionDefine) {
			listener.enterFunctionDefine(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitFunctionDefine) {
			listener.exitFunctionDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDefine) {
			return visitor.visitFunctionDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	public sourceElement(): SourceElementContext[];
	public sourceElement(i: number): SourceElementContext;
	public sourceElement(i?: number): SourceElementContext | SourceElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceElementContext);
		} else {
			return this.getRuleContext(i, SourceElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_sourceElements; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterSourceElements) {
			listener.enterSourceElements(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitSourceElements) {
			listener.exitSourceElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.OpenBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	public arrayElement(): ArrayElementContext[];
	public arrayElement(i: number): ArrayElementContext;
	public arrayElement(i?: number): ArrayElementContext | ArrayElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayElementContext);
		} else {
			return this.getRuleContext(i, ArrayElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_elementList; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_arrayElement; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterArrayElement) {
			listener.enterArrayElement(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArrayElement) {
			listener.exitArrayElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_arguments; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_argument; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(epScriptParser.Comma);
		} else {
			return this.getToken(epScriptParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class AnonymousFunctionExpressionContext extends SingleExpressionContext {
	public anonymosuFunction(): AnonymosuFunctionContext {
		return this.getRuleContext(0, AnonymosuFunctionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAnonymousFunctionExpression) {
			listener.enterAnonymousFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAnonymousFunctionExpression) {
			listener.exitAnonymousFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAnonymousFunctionExpression) {
			return visitor.visitAnonymousFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(epScriptParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(epScriptParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterMemberExpression) {
			listener.enterMemberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitMemberExpression) {
			listener.exitMemberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberExpression) {
			return visitor.visitMemberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public Dot(): TerminalNode { return this.getToken(epScriptParser.Dot, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterMemberDotExpression) {
			listener.enterMemberDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitMemberDotExpression) {
			listener.exitMemberDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterCallExpression) {
			listener.enterCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitCallExpression) {
			listener.exitCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(epScriptParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(epScriptParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostfixExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public postfixOperator(): PostfixOperatorContext {
		return this.getRuleContext(0, PostfixOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrefixExpressionContext extends SingleExpressionContext {
	public prefixOperator(): PrefixOperatorContext {
		return this.getRuleContext(0, PrefixOperatorContext);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPrefixExpression) {
			listener.enterPrefixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPrefixExpression) {
			listener.exitPrefixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPrefixExpression) {
			return visitor.visitPrefixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public binaryOperator(): BinaryOperatorContext {
		return this.getRuleContext(0, BinaryOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBinaryExpression) {
			listener.enterBinaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBinaryExpression) {
			listener.exitBinaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) {
			return visitor.visitBinaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	public This(): TerminalNode { return this.getToken(epScriptParser.This, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterThisExpression) {
			listener.enterThisExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitThisExpression) {
			listener.exitThisExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralExpressionContext extends SingleExpressionContext {
	public BooleanLiterl(): TerminalNode { return this.getToken(epScriptParser.BooleanLiterl, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBooleanLiteralExpression) {
			listener.enterBooleanLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBooleanLiteralExpression) {
			listener.exitBooleanLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralExpression) {
			return visitor.visitBooleanLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralExpressionContext extends SingleExpressionContext {
	public StringLiteral(): TerminalNode { return this.getToken(epScriptParser.StringLiteral, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterStringLiteralExpression) {
			listener.enterStringLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitStringLiteralExpression) {
			listener.exitStringLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitStringLiteralExpression) {
			return visitor.visitStringLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralExpressionContext extends SingleExpressionContext {
	public numericLiteral(): NumericLiteralContext {
		return this.getRuleContext(0, NumericLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterNumericLiteralExpression) {
			listener.enterNumericLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitNumericLiteralExpression) {
			listener.exitNumericLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteralExpression) {
			return visitor.visitNumericLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParanthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterParanthesizedExpression) {
			listener.enterParanthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitParanthesizedExpression) {
			listener.exitParanthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitParanthesizedExpression) {
			return visitor.visitParanthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymosuFunctionContext extends ParserRuleContext {
	public Function(): TerminalNode { return this.getToken(epScriptParser.Function, 0); }
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_anonymosuFunction; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAnonymosuFunction) {
			listener.enterAnonymosuFunction(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAnonymosuFunction) {
			listener.exitAnonymosuFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAnonymosuFunction) {
			return visitor.visitAnonymosuFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixOperatorContext extends ParserRuleContext {
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MinusMinus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_postfixOperator; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPostfixOperator) {
			listener.enterPostfixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPostfixOperator) {
			listener.exitPostfixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPostfixOperator) {
			return visitor.visitPostfixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixOperatorContext extends ParserRuleContext {
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MinusMinus, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Minus, 0); }
	public BitNot(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitNot, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_prefixOperator; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPrefixOperator) {
			listener.enterPrefixOperator(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPrefixOperator) {
			listener.exitPrefixOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPrefixOperator) {
			return visitor.visitPrefixOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Modulus, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Minus, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.GreaterThanEquals, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.NotEquals, 0); }
	public BitAnd(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitAnd, 0); }
	public BitXOr(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitXOr, 0); }
	public BitOr(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitOr, 0); }
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.RightShiftArithmetic, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Or, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Assign, 0); }
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MultiplyAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.PlusAssign, 0); }
	public BitOrAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitOrAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MinusAssign, 0); }
	public BitAndAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitAndAssign, 0); }
	public BitXorAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BitXorAssign, 0); }
	public LeftShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LeftShiftArithmeticAssign, 0); }
	public RightShiftArithmeticAssign(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.RightShiftArithmeticAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_binaryOperator; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBinaryOperator) {
			listener.enterBinaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBinaryOperator) {
			listener.exitBinaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBinaryOperator) {
			return visitor.visitBinaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.DecimalLiteral, 0); }
	public HexIntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.HexIntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(epScriptParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_identifier; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext {
		return this.getRuleContext(0, KeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Import(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Import, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.As, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Var, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Const, 0); }
	public Static(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Static, 0); }
	public Function(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Function, 0); }
	public Object(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Object, 0); }
	public L2V(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.L2V, 0); }
	public Once(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Once, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.If, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Else, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.For, 0); }
	public Foreach(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Foreach, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.While, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Break, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Continue, 0); }
	public Return(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Return, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Switch, 0); }
	public Case(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Case, 0); }
	public Default(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_keyword; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


