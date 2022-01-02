// Generated from ./server/src/grammar/lib/epScriptParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly UnitName = 46;
	public static readonly LocName = 47;
	public static readonly SwitchName = 48;
	public static readonly MapString = 49;
	public static readonly StatTxt = 50;
	public static readonly VArray = 51;
	public static readonly List = 52;
	public static readonly Import = 53;
	public static readonly As = 54;
	public static readonly Var = 55;
	public static readonly Const = 56;
	public static readonly Static = 57;
	public static readonly Function = 58;
	public static readonly Object = 59;
	public static readonly L2V = 60;
	public static readonly Once = 61;
	public static readonly If = 62;
	public static readonly Else = 63;
	public static readonly For = 64;
	public static readonly Foreach = 65;
	public static readonly While = 66;
	public static readonly Break = 67;
	public static readonly Continue = 68;
	public static readonly Return = 69;
	public static readonly Switch = 70;
	public static readonly Case = 71;
	public static readonly Default = 72;
	public static readonly This = 73;
	public static readonly TrgAllyStatus = 74;
	public static readonly TrgComparison = 75;
	public static readonly TrgCount = 76;
	public static readonly TrgModifier = 77;
	public static readonly TrgOrder = 78;
	public static readonly TrgPlayer = 79;
	public static readonly TrgProperty = 80;
	public static readonly TrgPropState = 81;
	public static readonly TrgResource = 82;
	public static readonly TrgScore = 83;
	public static readonly TrgSwitchAction = 84;
	public static readonly TrgSwitchState = 85;
	public static readonly TrgAIScript = 86;
	public static readonly TrgLocation = 87;
	public static readonly TrgString = 88;
	public static readonly TrgSwitch = 89;
	public static readonly TrgUnit = 90;
	public static readonly TrgTBL = 91;
	public static readonly Identifier = 92;
	public static readonly StringLiteral = 93;
	public static readonly WhiteSpaces = 94;
	public static readonly LineTerminator = 95;
	public static readonly MultiLineComment = 96;
	public static readonly SingleLineComment = 97;
	public static readonly UnexpectedCharacter = 98;
	public static readonly DoubleStringCharacter = 99;
	public static readonly SingleStringCharacter = 100;
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
	public static readonly RULE_type_ = 32;
	public static readonly RULE_primaryType = 33;
	public static readonly RULE_predefinedType = 34;
	public static readonly RULE_encodedTypes = 35;
	public static readonly RULE_functionDeclaration = 36;
	public static readonly RULE_formalParameterList = 37;
	public static readonly RULE_formalParameterArg = 38;
	public static readonly RULE_lastFormalParameterArg = 39;
	public static readonly RULE_functionBody = 40;
	public static readonly RULE_functionDefine = 41;
	public static readonly RULE_sourceElements = 42;
	public static readonly RULE_arrayLiteral = 43;
	public static readonly RULE_elementList = 44;
	public static readonly RULE_arrayElement = 45;
	public static readonly RULE_arguments = 46;
	public static readonly RULE_argumentList = 47;
	public static readonly RULE_argument = 48;
	public static readonly RULE_expressionSequence = 49;
	public static readonly RULE_singleExpression = 50;
	public static readonly RULE_anonymosuFunction = 51;
	public static readonly RULE_assignmentOperator = 52;
	public static readonly RULE_literal = 53;
	public static readonly RULE_numericLiteral = 54;
	public static readonly RULE_identifierName = 55;
	public static readonly RULE_identifier = 56;
	public static readonly RULE_reservedWord = 57;
	public static readonly RULE_keyword = 58;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
		"dottedName", "importNamespace", "variableStatement", "variableDeclarationList", 
		"variableDeclaration", "emptyStatement", "assignAble", "expressionStatement", 
		"varModifier", "ifStatement", "iterationStatement", "foreachBlock", "onceStatement", 
		"continueStatement", "breakStatement", "returnStatement", "switchStatement", 
		"caseBlock", "caseClauses", "caseClause", "defaultClause", "objectDeclaration", 
		"objectTail", "objectElement", "objectVariableDeclaration", "typeAnnotation", 
		"type_", "primaryType", "predefinedType", "encodedTypes", "functionDeclaration", 
		"formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
		"functionBody", "functionDefine", "sourceElements", "arrayLiteral", "elementList", 
		"arrayElement", "arguments", "argumentList", "argument", "expressionSequence", 
		"singleExpression", "anonymosuFunction", "assignmentOperator", "literal", 
		"numericLiteral", "identifierName", "identifier", "reservedWord", "keyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'['", "']'", "'('", "')'", 
		"'{'", "'}'", "'.'", "'?'", "','", "':'", "';'", "'++'", "'--'", "'+='", 
		"'-='", "'*='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'&&'", "'||'", 
		"'<<'", "'>>'", "'~'", "'&'", "'|'", "'^'", "'=='", "'<='", "'>='", "'<'", 
		"'>'", "'!='", "'!'", "'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'$U'", 
		"'$L'", "'$S'", "'$T'", "'$B'", "'VArray'", "'list'", "'import'", "'as'", 
		"'var'", "'const'", "'static'", "'function'", "'object'", "'l2v'", "'once'", 
		"'if'", "'else'", "'for'", "'foreach'", "'while'", "'break'", "'continue'", 
		"'return'", "'switch'", "'case'", "'default'", "'this'", "'TrgAllyStatus'", 
		"'TrgComparsion'", "'TrgCount'", "'TrgModifier'", "'TrgOrder'", "'TrgPlayer'", 
		"'TrgProperty'", "'TrgPropState'", "'TrgResource'", "'TrgScore'", "'TrgSwitchAction'", 
		"'TrgSwitchState'", "'TrgAIScript'", "'TrgLocation'", "'TrgString'", "'TrgSwitch'", 
		"'TrgUnit'", "'TrgTBL'",
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
		"Divide", "Modulus", "Assign", "UnitName", "LocName", "SwitchName", "MapString", 
		"StatTxt", "VArray", "List", "Import", "As", "Var", "Const", "Static", 
		"Function", "Object", "L2V", "Once", "If", "Else", "For", "Foreach", "While", 
		"Break", "Continue", "Return", "Switch", "Case", "Default", "This", "TrgAllyStatus", 
		"TrgComparison", "TrgCount", "TrgModifier", "TrgOrder", "TrgPlayer", "TrgProperty", 
		"TrgPropState", "TrgResource", "TrgScore", "TrgSwitchAction", "TrgSwitchState", 
		"TrgAIScript", "TrgLocation", "TrgString", "TrgSwitch", "TrgUnit", "TrgTBL", 
		"Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", "MultiLineComment", 
		"SingleLineComment", "UnexpectedCharacter", "DoubleStringCharacter", "SingleStringCharacter",
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
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 118;
				this.sourceElements();
				}
			}

			this.state = 121;
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
			this.state = 123;
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
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.importStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
				this.emptyStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 128;
				this.variableStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 129;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 130;
				this.iterationStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 131;
				this.switchStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 132;
				this.onceStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 133;
				this.continueStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 134;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 135;
				this.returnStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 136;
				this.objectDeclaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 137;
				this.functionDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 138;
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
			this.state = 141;
			this.match(epScriptParser.OpenBrace);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 142;
				this.statementList();
				}
			}

			this.state = 145;
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
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 147;
				this.statement();
				}
				}
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0));
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
			this.state = 152;
			this.match(epScriptParser.Import);
			this.state = 153;
			this.dottedName(0);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.As) {
				{
				this.state = 154;
				this.importNamespace();
				}
			}

			this.state = 157;
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
			this.state = 160;
			this.identifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 167;
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
					this.state = 162;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 163;
					this.match(epScriptParser.Dot);
					this.state = 164;
					this.identifier();
					}
					}
				}
				this.state = 169;
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
			this.state = 170;
			this.match(epScriptParser.As);
			this.state = 171;
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
			this.state = 173;
			this.variableDeclarationList();
			this.state = 174;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.varModifier();
			this.state = 177;
			this.variableDeclaration();
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === epScriptParser.Comma) {
				{
				{
				this.state = 178;
				this.match(epScriptParser.Comma);
				this.state = 179;
				this.variableDeclaration();
				}
				}
				this.state = 184;
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
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, epScriptParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.assignAble();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Assign) {
				{
				this.state = 186;
				this.match(epScriptParser.Assign);
				this.state = 187;
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
			this.state = 190;
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
			this.state = 192;
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
			this.state = 194;
			this.expressionSequence();
			this.state = 195;
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
			this.state = 197;
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
			this.state = 199;
			this.match(epScriptParser.If);
			this.state = 200;
			this.match(epScriptParser.OpenParen);
			this.state = 201;
			this.expressionSequence();
			this.state = 202;
			this.match(epScriptParser.CloseParen);
			this.state = 203;
			this.statement();
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 204;
				this.match(epScriptParser.Else);
				this.state = 205;
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
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.While:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 208;
				this.match(epScriptParser.While);
				this.state = 209;
				this.match(epScriptParser.OpenParen);
				this.state = 210;
				this.expressionSequence();
				this.state = 211;
				this.match(epScriptParser.CloseParen);
				this.state = 212;
				this.statement();
				}
				break;
			case epScriptParser.For:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 214;
				this.match(epScriptParser.For);
				this.state = 215;
				this.match(epScriptParser.OpenParen);
				this.state = 220;
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
					this.state = 216;
					this.expressionSequence();
					}
					break;
				case epScriptParser.SemiColon:
				case epScriptParser.Var:
				case epScriptParser.Const:
					{
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === epScriptParser.Var || _la === epScriptParser.Const) {
						{
						this.state = 217;
						this.variableDeclarationList();
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 222;
				this.match(epScriptParser.SemiColon);
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
					{
					this.state = 223;
					this.expressionSequence();
					}
				}

				this.state = 226;
				this.match(epScriptParser.SemiColon);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
					{
					this.state = 227;
					this.expressionSequence();
					}
				}

				this.state = 230;
				this.match(epScriptParser.CloseParen);
				this.state = 231;
				this.statement();
				}
				break;
			case epScriptParser.Foreach:
				_localctx = new ForeachStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.match(epScriptParser.Foreach);
				this.state = 233;
				this.foreachBlock();
				this.state = 234;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(epScriptParser.OpenParen);
			this.state = 239;
			this.identifier();
			this.state = 240;
			this.match(epScriptParser.Colon);
			this.state = 241;
			this.singleExpression(0);
			this.state = 242;
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
			this.state = 244;
			this.match(epScriptParser.Once);
			this.state = 245;
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
			this.state = 247;
			this.match(epScriptParser.Continue);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 248;
				this.expressionSequence();
				}
			}

			this.state = 251;
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
			this.state = 253;
			this.match(epScriptParser.Break);
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 254;
				this.expressionSequence();
				}
			}

			this.state = 257;
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
			this.state = 259;
			this.match(epScriptParser.Return);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 260;
				this.expressionSequence();
				}
			}

			this.state = 263;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(epScriptParser.Switch);
			this.state = 266;
			this.match(epScriptParser.OpenParen);
			this.state = 267;
			this.expressionSequence();
			this.state = 268;
			this.match(epScriptParser.CloseParen);
			this.state = 269;
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
			this.state = 271;
			this.match(epScriptParser.OpenBrace);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Case) {
				{
				this.state = 272;
				this.caseClauses();
				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Default) {
				{
				this.state = 275;
				this.defaultClause();
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Case) {
					{
					this.state = 276;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 281;
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
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 283;
				this.caseClause();
				}
				}
				this.state = 286;
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
			this.state = 288;
			this.match(epScriptParser.Case);
			this.state = 289;
			this.expressionSequence();
			this.state = 290;
			this.match(epScriptParser.Colon);
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 291;
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
			this.state = 294;
			this.match(epScriptParser.Default);
			this.state = 295;
			this.match(epScriptParser.Colon);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 296;
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
			this.state = 299;
			this.match(epScriptParser.Object);
			this.state = 300;
			this.identifier();
			this.state = 301;
			this.objectTail();
			this.state = 302;
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
			this.state = 304;
			this.match(epScriptParser.OpenBrace);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === epScriptParser.Var || _la === epScriptParser.Function) {
				{
				{
				this.state = 305;
				this.objectElement();
				}
				}
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 311;
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
			this.state = 315;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.Var:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.objectVariableDeclaration();
				}
				break;
			case epScriptParser.Function:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
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
			this.state = 317;
			this.match(epScriptParser.Var);
			this.state = 318;
			this.identifier();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 319;
				this.typeAnnotation();
				}
			}

			this.state = 322;
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
			this.state = 324;
			this.match(epScriptParser.Colon);
			this.state = 325;
			this.type_();
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
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 64, epScriptParser.RULE_type_);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.TrgAllyStatus:
			case epScriptParser.TrgComparison:
			case epScriptParser.TrgCount:
			case epScriptParser.TrgModifier:
			case epScriptParser.TrgOrder:
			case epScriptParser.TrgPlayer:
			case epScriptParser.TrgProperty:
			case epScriptParser.TrgPropState:
			case epScriptParser.TrgResource:
			case epScriptParser.TrgScore:
			case epScriptParser.TrgSwitchAction:
			case epScriptParser.TrgSwitchState:
			case epScriptParser.TrgAIScript:
			case epScriptParser.TrgLocation:
			case epScriptParser.TrgString:
			case epScriptParser.TrgSwitch:
			case epScriptParser.TrgUnit:
			case epScriptParser.TrgTBL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 327;
				this.primaryType();
				}
				break;
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.singleExpression(0);
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
	public primaryType(): PrimaryTypeContext {
		let _localctx: PrimaryTypeContext = new PrimaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, epScriptParser.RULE_primaryType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.predefinedType();
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
	public predefinedType(): PredefinedTypeContext {
		let _localctx: PredefinedTypeContext = new PredefinedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, epScriptParser.RULE_predefinedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.encodedTypes();
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
	public encodedTypes(): EncodedTypesContext {
		let _localctx: EncodedTypesContext = new EncodedTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, epScriptParser.RULE_encodedTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			_la = this._input.LA(1);
			if (!(((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (epScriptParser.TrgAllyStatus - 74)) | (1 << (epScriptParser.TrgComparison - 74)) | (1 << (epScriptParser.TrgCount - 74)) | (1 << (epScriptParser.TrgModifier - 74)) | (1 << (epScriptParser.TrgOrder - 74)) | (1 << (epScriptParser.TrgPlayer - 74)) | (1 << (epScriptParser.TrgProperty - 74)) | (1 << (epScriptParser.TrgPropState - 74)) | (1 << (epScriptParser.TrgResource - 74)) | (1 << (epScriptParser.TrgScore - 74)) | (1 << (epScriptParser.TrgSwitchAction - 74)) | (1 << (epScriptParser.TrgSwitchState - 74)) | (1 << (epScriptParser.TrgAIScript - 74)) | (1 << (epScriptParser.TrgLocation - 74)) | (1 << (epScriptParser.TrgString - 74)) | (1 << (epScriptParser.TrgSwitch - 74)) | (1 << (epScriptParser.TrgUnit - 74)) | (1 << (epScriptParser.TrgTBL - 74)))) !== 0))) {
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, epScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(epScriptParser.Function);
			this.state = 338;
			this.identifier();
			this.state = 339;
			this.match(epScriptParser.OpenParen);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 340;
				this.formalParameterList();
				}
			}

			this.state = 343;
			this.match(epScriptParser.CloseParen);
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
		this.enterRule(_localctx, 74, epScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 349;
				this.formalParameterArg();
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 350;
						this.match(epScriptParser.Comma);
						this.state = 351;
						this.formalParameterArg();
						}
						}
					}
					this.state = 356;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Comma) {
					{
					this.state = 357;
					this.match(epScriptParser.Comma);
					this.state = 358;
					this.lastFormalParameterArg();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 361;
				this.lastFormalParameterArg();
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
	public formalParameterArg(): FormalParameterArgContext {
		let _localctx: FormalParameterArgContext = new FormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, epScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.assignAble();
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 365;
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
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let _localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, epScriptParser.RULE_lastFormalParameterArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
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
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, epScriptParser.RULE_functionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(epScriptParser.OpenBrace);
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 371;
				this.sourceElements();
				}
			}

			this.state = 374;
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
		this.enterRule(_localctx, 82, epScriptParser.RULE_functionDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(epScriptParser.Function);
			this.state = 377;
			this.identifier();
			this.state = 378;
			this.match(epScriptParser.OpenParen);
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 379;
				this.formalParameterList();
				}
			}

			this.state = 382;
			this.match(epScriptParser.CloseParen);
			this.state = 383;
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
		this.enterRule(_localctx, 84, epScriptParser.RULE_sourceElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 385;
				this.sourceElement();
				}
				}
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.OpenBrace) | (1 << epScriptParser.SemiColon) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Import - 39)) | (1 << (epScriptParser.Var - 39)) | (1 << (epScriptParser.Const - 39)) | (1 << (epScriptParser.Function - 39)) | (1 << (epScriptParser.Object - 39)) | (1 << (epScriptParser.Once - 39)) | (1 << (epScriptParser.If - 39)) | (1 << (epScriptParser.For - 39)) | (1 << (epScriptParser.Foreach - 39)) | (1 << (epScriptParser.While - 39)) | (1 << (epScriptParser.Break - 39)) | (1 << (epScriptParser.Continue - 39)) | (1 << (epScriptParser.Return - 39)) | (1 << (epScriptParser.Switch - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0));
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
		this.enterRule(_localctx, 86, epScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 390;
			this.match(epScriptParser.OpenBracket);
			this.state = 391;
			this.elementList();
			this.state = 392;
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
		this.enterRule(_localctx, 88, epScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 394;
						this.match(epScriptParser.Comma);
						}
						}
					}
					this.state = 399;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
					{
					this.state = 400;
					this.arrayElement();
					}
				}

				this.state = 411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 404;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 403;
							this.match(epScriptParser.Comma);
							}
							}
							this.state = 406;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === epScriptParser.Comma);
						this.state = 408;
						this.arrayElement();
						}
						}
					}
					this.state = 413;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === epScriptParser.Comma) {
					{
					{
					this.state = 414;
					this.match(epScriptParser.Comma);
					}
					}
					this.state = 419;
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
		this.enterRule(_localctx, 90, epScriptParser.RULE_arrayElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
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
		this.enterRule(_localctx, 92, epScriptParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(epScriptParser.OpenParen);
			this.state = 430;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 426;
				this.argumentList();
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === epScriptParser.Comma) {
					{
					this.state = 427;
					this.match(epScriptParser.Comma);
					}
				}

				}
			}

			this.state = 432;
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
		this.enterRule(_localctx, 94, epScriptParser.RULE_argumentList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.argument();
			this.state = 441;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 435;
					this.match(epScriptParser.Comma);
					this.state = 437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
						{
						this.state = 436;
						this.argument();
						}
					}

					}
					}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 96, epScriptParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
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
		this.enterRule(_localctx, 98, epScriptParser.RULE_expressionSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.singleExpression(0);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === epScriptParser.Comma) {
				{
				{
				this.state = 447;
				this.match(epScriptParser.Comma);
				this.state = 448;
				this.singleExpression(0);
				}
				}
				this.state = 453;
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
		let _startState: number = 100;
		this.enterRecursionRule(_localctx, 100, epScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.Function:
				{
				_localctx = new AnonymousFunctionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 455;
				this.anonymosuFunction();
				}
				break;
			case epScriptParser.PlusPlus:
				{
				_localctx = new PreIncreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 456;
				this.match(epScriptParser.PlusPlus);
				this.state = 457;
				this.singleExpression(23);
				}
				break;
			case epScriptParser.MinusMinus:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 458;
				this.match(epScriptParser.MinusMinus);
				this.state = 459;
				this.singleExpression(22);
				}
				break;
			case epScriptParser.Plus:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 460;
				this.match(epScriptParser.Plus);
				this.state = 461;
				this.singleExpression(21);
				}
				break;
			case epScriptParser.Minus:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 462;
				this.match(epScriptParser.Minus);
				this.state = 463;
				this.singleExpression(20);
				}
				break;
			case epScriptParser.BitNot:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 464;
				this.match(epScriptParser.BitNot);
				this.state = 465;
				this.singleExpression(19);
				}
				break;
			case epScriptParser.Not:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 466;
				this.match(epScriptParser.Not);
				this.state = 467;
				this.singleExpression(18);
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
			case epScriptParser.DecimalLiteral:
			case epScriptParser.HexIntegerLiteral:
			case epScriptParser.StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 470;
				this.literal();
				}
				break;
			case epScriptParser.OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 471;
				this.arrayLiteral();
				}
				break;
			case epScriptParser.OpenParen:
				{
				_localctx = new ParanthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 472;
				this.match(epScriptParser.OpenParen);
				this.state = 473;
				this.expressionSequence();
				this.state = 474;
				this.match(epScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 537;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 535;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 478;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 479;
						this.match(epScriptParser.QuestionMark);
						this.state = 480;
						this.singleExpression(0);
						this.state = 481;
						this.match(epScriptParser.Colon);
						this.state = 482;
						this.singleExpression(27);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicateExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 484;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 485;
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (epScriptParser.Multiply - 42)) | (1 << (epScriptParser.Divide - 42)) | (1 << (epScriptParser.Modulus - 42)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 486;
						this.singleExpression(18);
						}
						break;

					case 3:
						{
						_localctx = new AddictiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 487;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 488;
						_la = this._input.LA(1);
						if (!(_la === epScriptParser.Plus || _la === epScriptParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 489;
						this.singleExpression(17);
						}
						break;

					case 4:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 490;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 491;
						_la = this._input.LA(1);
						if (!(_la === epScriptParser.LeftShiftArithmetic || _la === epScriptParser.RightShiftArithmetic)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 492;
						this.singleExpression(16);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 493;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 494;
						_la = this._input.LA(1);
						if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (epScriptParser.LessThanEquals - 34)) | (1 << (epScriptParser.GreaterThanEquals - 34)) | (1 << (epScriptParser.LessThan - 34)) | (1 << (epScriptParser.MoreThan - 34)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 495;
						this.singleExpression(15);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 496;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 497;
						_la = this._input.LA(1);
						if (!(_la === epScriptParser.Equals || _la === epScriptParser.NotEquals)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 498;
						this.singleExpression(14);
						}
						break;

					case 7:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 499;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 500;
						this.match(epScriptParser.BitAnd);
						this.state = 501;
						this.singleExpression(13);
						}
						break;

					case 8:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 502;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 503;
						this.match(epScriptParser.BitXOr);
						this.state = 504;
						this.singleExpression(12);
						}
						break;

					case 9:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 505;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 506;
						this.match(epScriptParser.BitOr);
						this.state = 507;
						this.singleExpression(11);
						}
						break;

					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 508;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 509;
						this.match(epScriptParser.And);
						this.state = 510;
						this.singleExpression(10);
						}
						break;

					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 511;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 512;
						this.match(epScriptParser.Or);
						this.state = 513;
						this.singleExpression(9);
						}
						break;

					case 12:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 514;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 515;
						this.match(epScriptParser.Assign);
						this.state = 516;
						this.singleExpression(8);
						}
						break;

					case 13:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 517;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 518;
						this.assignmentOperator();
						this.state = 519;
						this.singleExpression(7);
						}
						break;

					case 14:
						{
						_localctx = new MemberExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 521;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 522;
						this.match(epScriptParser.OpenBracket);
						this.state = 523;
						this.expressionSequence();
						this.state = 524;
						this.match(epScriptParser.CloseBracket);
						}
						break;

					case 15:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 526;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 527;
						this.match(epScriptParser.Dot);
						this.state = 528;
						this.identifier();
						}
						break;

					case 16:
						{
						_localctx = new ArgumentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 529;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 530;
						this.arguments();
						}
						break;

					case 17:
						{
						_localctx = new PostIncreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 531;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 532;
						this.match(epScriptParser.PlusPlus);
						}
						break;

					case 18:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, epScriptParser.RULE_singleExpression);
						this.state = 533;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 534;
						this.match(epScriptParser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 539;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymosuFunction(): AnonymosuFunctionContext {
		let _localctx: AnonymosuFunctionContext = new AnonymosuFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, epScriptParser.RULE_anonymosuFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(epScriptParser.Function);
			this.state = 541;
			this.match(epScriptParser.OpenParen);
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.BooleanLiterl) | (1 << epScriptParser.DecimalLiteral) | (1 << epScriptParser.HexIntegerLiteral) | (1 << epScriptParser.OpenBracket) | (1 << epScriptParser.OpenParen) | (1 << epScriptParser.PlusPlus) | (1 << epScriptParser.MinusMinus) | (1 << epScriptParser.BitNot))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (epScriptParser.Not - 39)) | (1 << (epScriptParser.Plus - 39)) | (1 << (epScriptParser.Minus - 39)) | (1 << (epScriptParser.Function - 39)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (epScriptParser.This - 73)) | (1 << (epScriptParser.Identifier - 73)) | (1 << (epScriptParser.StringLiteral - 73)))) !== 0)) {
				{
				this.state = 542;
				this.formalParameterList();
				}
			}

			this.state = 545;
			this.match(epScriptParser.CloseParen);
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === epScriptParser.Colon) {
				{
				this.state = 546;
				this.typeAnnotation();
				}
			}

			this.state = 549;
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
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, epScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 551;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << epScriptParser.PlusAssign) | (1 << epScriptParser.MinusAssign) | (1 << epScriptParser.MultiplyAssign) | (1 << epScriptParser.LeftShiftArithmeticAssign) | (1 << epScriptParser.RightShiftArithmeticAssign) | (1 << epScriptParser.BitAndAssign) | (1 << epScriptParser.BitXorAssign) | (1 << epScriptParser.BitOrAssign))) !== 0))) {
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, epScriptParser.RULE_literal);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.BooleanLiterl:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 553;
				this.match(epScriptParser.BooleanLiterl);
				}
				break;
			case epScriptParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 554;
				this.match(epScriptParser.StringLiteral);
				}
				break;
			case epScriptParser.DecimalLiteral:
			case epScriptParser.HexIntegerLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 555;
				this.numericLiteral();
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
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, epScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
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
		this.enterRule(_localctx, 110, epScriptParser.RULE_identifierName);
		try {
			this.state = 562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case epScriptParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 560;
				this.identifier();
				}
				break;
			case epScriptParser.UnitName:
			case epScriptParser.LocName:
			case epScriptParser.SwitchName:
			case epScriptParser.MapString:
			case epScriptParser.StatTxt:
			case epScriptParser.VArray:
			case epScriptParser.List:
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
				this.state = 561;
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
		this.enterRule(_localctx, 112, epScriptParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
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
		this.enterRule(_localctx, 114, epScriptParser.RULE_reservedWord);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
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
		this.enterRule(_localctx, 116, epScriptParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (epScriptParser.UnitName - 46)) | (1 << (epScriptParser.LocName - 46)) | (1 << (epScriptParser.SwitchName - 46)) | (1 << (epScriptParser.MapString - 46)) | (1 << (epScriptParser.StatTxt - 46)) | (1 << (epScriptParser.VArray - 46)) | (1 << (epScriptParser.List - 46)) | (1 << (epScriptParser.Import - 46)) | (1 << (epScriptParser.As - 46)) | (1 << (epScriptParser.Var - 46)) | (1 << (epScriptParser.Const - 46)) | (1 << (epScriptParser.Static - 46)) | (1 << (epScriptParser.Function - 46)) | (1 << (epScriptParser.Object - 46)) | (1 << (epScriptParser.L2V - 46)) | (1 << (epScriptParser.Once - 46)) | (1 << (epScriptParser.If - 46)) | (1 << (epScriptParser.Else - 46)) | (1 << (epScriptParser.For - 46)) | (1 << (epScriptParser.Foreach - 46)) | (1 << (epScriptParser.While - 46)) | (1 << (epScriptParser.Break - 46)) | (1 << (epScriptParser.Continue - 46)) | (1 << (epScriptParser.Return - 46)) | (1 << (epScriptParser.Switch - 46)) | (1 << (epScriptParser.Case - 46)) | (1 << (epScriptParser.Default - 46)))) !== 0))) {
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

		case 50:
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
			return this.precpred(this._ctx, 26);

		case 2:
			return this.precpred(this._ctx, 17);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);

		case 13:
			return this.precpred(this._ctx, 6);

		case 14:
			return this.precpred(this._ctx, 29);

		case 15:
			return this.precpred(this._ctx, 28);

		case 16:
			return this.precpred(this._ctx, 27);

		case 17:
			return this.precpred(this._ctx, 25);

		case 18:
			return this.precpred(this._ctx, 24);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03f\u023D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
		"\x02\x05\x02z\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\x8E\n\x04\x03\x05\x03\x05\x05\x05\x92\n\x05" +
		"\x03\x05\x03\x05\x03\x06\x06\x06\x97\n\x06\r\x06\x0E\x06\x98\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\x9E\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x07\b\xA8\n\b\f\b\x0E\b\xAB\v\b\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\xB7\n\v\f\v\x0E\v\xBA\v\v\x03\f" +
		"\x03\f\x03\f\x05\f\xBF\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\xD1\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xDD\n\x12\x05\x12\xDF\n\x12" +
		"\x03\x12\x03\x12\x05\x12\xE3\n\x12\x03\x12\x03\x12\x05\x12\xE7\n\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xEF\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x05\x15\xFC\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0102" +
		"\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x05\x17\u0108\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05" +
		"\x19\u0114\n\x19\x03\x19\x03\x19\x05\x19\u0118\n\x19\x05\x19\u011A\n\x19" +
		"\x03\x19\x03\x19\x03\x1A\x06\x1A\u011F\n\x1A\r\x1A\x0E\x1A\u0120\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0127\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u012C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x07\x1E\u0135\n\x1E\f\x1E\x0E\x1E\u0138\v\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x05\x1F\u013E\n\x1F\x03 \x03 \x03 \x05 \u0143\n \x03 \x03 \x03" +
		"!\x03!\x03!\x03\"\x03\"\x05\"\u014C\n\"\x03#\x03#\x03$\x03$\x03%\x03%" +
		"\x03&\x03&\x03&\x03&\x05&\u0158\n&\x03&\x03&\x05&\u015C\n&\x03&\x03&\x03" +
		"\'\x03\'\x03\'\x07\'\u0163\n\'\f\'\x0E\'\u0166\v\'\x03\'\x03\'\x05\'\u016A" +
		"\n\'\x03\'\x05\'\u016D\n\'\x03(\x03(\x05(\u0171\n(\x03)\x03)\x03*\x03" +
		"*\x05*\u0177\n*\x03*\x03*\x03+\x03+\x03+\x03+\x05+\u017F\n+\x03+\x03+" +
		"\x03+\x03,\x06,\u0185\n,\r,\x0E,\u0186\x03-\x03-\x03-\x03-\x03.\x07.\u018E" +
		"\n.\f.\x0E.\u0191\v.\x03.\x05.\u0194\n.\x03.\x06.\u0197\n.\r.\x0E.\u0198" +
		"\x03.\x07.\u019C\n.\f.\x0E.\u019F\v.\x03.\x07.\u01A2\n.\f.\x0E.\u01A5" +
		"\v.\x03.\x05.\u01A8\n.\x03/\x03/\x030\x030\x030\x050\u01AF\n0\x050\u01B1" +
		"\n0\x030\x030\x031\x031\x031\x051\u01B8\n1\x071\u01BA\n1\f1\x0E1\u01BD" +
		"\v1\x032\x032\x033\x033\x033\x073\u01C4\n3\f3\x0E3\u01C7\v3\x034\x034" +
		"\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x054\u01DF\n4\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x074\u021A\n4\f4\x0E" +
		"4\u021D\v4\x035\x035\x035\x055\u0222\n5\x035\x035\x055\u0226\n5\x035\x03" +
		"5\x036\x036\x037\x037\x037\x057\u022F\n7\x038\x038\x039\x039\x059\u0235" +
		"\n9\x03:\x03:\x03;\x03;\x03<\x03<\x03<\x02\x02\x04\x0Ef=\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02" +
		"h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02\x02\f\x03\x029:\x03\x02L]\x03" +
		"\x02,.\x03\x02*+\x03\x02\x1D\x1E\x03\x02$\'\x04\x02##((\x03\x02\x13\x1A" +
		"\x03\x02\x04\x05\x03\x020J\x02\u025F\x02y\x03\x02\x02\x02\x04}\x03\x02" +
		"\x02\x02\x06\x8D\x03\x02\x02\x02\b\x8F\x03\x02\x02\x02\n\x96\x03\x02\x02" +
		"\x02\f\x9A\x03\x02\x02\x02\x0E\xA1\x03\x02\x02\x02\x10\xAC\x03\x02\x02" +
		"\x02\x12\xAF\x03\x02\x02\x02\x14\xB2\x03\x02\x02\x02\x16\xBB\x03\x02\x02" +
		"\x02\x18\xC0\x03\x02\x02\x02\x1A\xC2\x03\x02\x02\x02\x1C\xC4\x03\x02\x02" +
		"\x02\x1E\xC7\x03\x02\x02\x02 \xC9\x03\x02\x02\x02\"\xEE\x03\x02\x02\x02" +
		"$\xF0\x03\x02\x02\x02&\xF6\x03\x02\x02\x02(\xF9\x03\x02\x02\x02*\xFF\x03" +
		"\x02\x02\x02,\u0105\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u0111\x03" +
		"\x02\x02\x022\u011E\x03\x02\x02\x024\u0122\x03\x02\x02\x026\u0128\x03" +
		"\x02\x02\x028\u012D\x03\x02\x02\x02:\u0132\x03\x02\x02\x02<\u013D\x03" +
		"\x02\x02\x02>\u013F\x03\x02\x02\x02@\u0146\x03\x02\x02\x02B\u014B\x03" +
		"\x02\x02\x02D\u014D\x03\x02\x02\x02F\u014F\x03\x02\x02\x02H\u0151\x03" +
		"\x02\x02\x02J\u0153\x03\x02\x02\x02L\u016C\x03\x02\x02\x02N\u016E\x03" +
		"\x02\x02\x02P\u0172\x03\x02\x02\x02R\u0174\x03\x02\x02\x02T\u017A\x03" +
		"\x02\x02\x02V\u0184\x03\x02\x02\x02X\u0188\x03\x02\x02\x02Z\u01A7\x03" +
		"\x02\x02\x02\\\u01A9\x03\x02\x02\x02^\u01AB\x03\x02\x02\x02`\u01B4\x03" +
		"\x02\x02\x02b\u01BE\x03\x02\x02\x02d\u01C0\x03\x02\x02\x02f\u01DE\x03" +
		"\x02\x02\x02h\u021E\x03\x02\x02\x02j\u0229\x03\x02\x02\x02l\u022E\x03" +
		"\x02\x02\x02n\u0230\x03\x02\x02\x02p\u0234\x03\x02\x02\x02r\u0236\x03" +
		"\x02\x02\x02t\u0238\x03\x02\x02\x02v\u023A\x03\x02\x02\x02xz\x05V,\x02" +
		"yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07\x02\x02\x03" +
		"|\x03\x03\x02\x02\x02}~\x05\x06\x04\x02~\x05\x03\x02\x02\x02\x7F\x8E\x05" +
		"\b\x05\x02\x80\x8E\x05\f\x07\x02\x81\x8E\x05\x18\r\x02\x82\x8E\x05\x12" +
		"\n\x02\x83\x8E\x05 \x11\x02\x84\x8E\x05\"\x12\x02\x85\x8E\x05.\x18\x02" +
		"\x86\x8E\x05&\x14\x02\x87\x8E\x05(\x15\x02\x88\x8E\x05*\x16\x02\x89\x8E" +
		"\x05,\x17\x02\x8A\x8E\x058\x1D\x02\x8B\x8E\x05J&\x02\x8C\x8E\x05\x1C\x0F" +
		"\x02\x8D\x7F\x03\x02\x02\x02\x8D\x80\x03\x02\x02\x02\x8D\x81\x03\x02\x02" +
		"\x02\x8D\x82\x03\x02\x02\x02\x8D\x83\x03\x02\x02\x02\x8D\x84\x03\x02\x02" +
		"\x02\x8D\x85\x03\x02\x02\x02\x8D\x86\x03\x02\x02\x02\x8D\x87\x03\x02\x02" +
		"\x02\x8D\x88\x03\x02\x02\x02\x8D\x89\x03\x02\x02\x02\x8D\x8A\x03\x02\x02" +
		"\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x07\x03\x02\x02" +
		"\x02\x8F\x91\x07\n\x02\x02\x90\x92\x05\n\x06\x02\x91\x90\x03\x02\x02\x02" +
		"\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x07\v\x02\x02" +
		"\x94\t\x03\x02\x02\x02\x95\x97\x05\x06\x04\x02\x96\x95\x03\x02\x02\x02" +
		"\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02" +
		"\x99\v\x03\x02\x02\x02\x9A\x9B\x077\x02\x02\x9B\x9D\x05\x0E\b\x02\x9C" +
		"\x9E\x05\x10\t\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\x9F\x03\x02\x02\x02\x9F\xA0\x07\x10\x02\x02\xA0\r\x03\x02\x02\x02\xA1" +
		"\xA2\b\b\x01\x02\xA2\xA3\x05r:\x02\xA3\xA9\x03\x02\x02\x02\xA4\xA5\f\x04" +
		"\x02\x02\xA5\xA6\x07\f\x02\x02\xA6\xA8\x05r:\x02\xA7\xA4\x03\x02\x02\x02" +
		"\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02" +
		"\xAA\x0F\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD\x078\x02\x02" +
		"\xAD\xAE\x05r:\x02\xAE\x11\x03\x02\x02\x02\xAF\xB0\x05\x14\v\x02\xB0\xB1" +
		"\x07\x10\x02\x02\xB1\x13\x03\x02\x02\x02\xB2\xB3\x05\x1E\x10\x02\xB3\xB8" +
		"\x05\x16\f\x02\xB4\xB5\x07\x0E\x02\x02\xB5\xB7\x05\x16\f\x02\xB6\xB4\x03" +
		"\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03" +
		"\x02\x02\x02\xB9\x15\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBE\x05" +
		"\x1A\x0E\x02\xBC\xBD\x07/\x02\x02\xBD\xBF\x05f4\x02\xBE\xBC\x03\x02\x02" +
		"\x02\xBE\xBF\x03\x02\x02\x02\xBF\x17\x03\x02\x02\x02\xC0\xC1\x07\x10\x02" +
		"\x02\xC1\x19\x03\x02\x02\x02\xC2\xC3\x05r:\x02\xC3\x1B\x03\x02\x02\x02" +
		"\xC4\xC5\x05d3\x02\xC5\xC6\x07\x10\x02\x02\xC6\x1D\x03\x02\x02\x02\xC7" +
		"\xC8\t\x02\x02\x02\xC8\x1F\x03\x02\x02\x02\xC9\xCA\x07@\x02\x02\xCA\xCB" +
		"\x07\b\x02\x02\xCB\xCC\x05d3\x02\xCC\xCD\x07\t\x02\x02\xCD\xD0\x05\x06" +
		"\x04\x02\xCE\xCF\x07A\x02\x02\xCF\xD1\x05\x06\x04\x02\xD0\xCE\x03\x02" +
		"\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1!\x03\x02\x02\x02\xD2\xD3\x07D\x02" +
		"\x02\xD3\xD4\x07\b\x02\x02\xD4\xD5\x05d3\x02\xD5\xD6\x07\t\x02\x02\xD6" +
		"\xD7\x05\x06\x04\x02\xD7\xEF\x03\x02\x02\x02\xD8\xD9\x07B\x02\x02\xD9" +
		"\xDE\x07\b\x02\x02\xDA\xDF\x05d3\x02\xDB\xDD\x05\x14\v\x02\xDC\xDB\x03" +
		"\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDA\x03" +
		"\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x07" +
		"\x10\x02\x02\xE1\xE3\x05d3\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x07\x10\x02\x02\xE5\xE7\x05d" +
		"3\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x03\x02" +
		"\x02\x02\xE8\xE9\x07\t\x02\x02\xE9\xEF\x05\x06\x04\x02\xEA\xEB\x07C\x02" +
		"\x02\xEB\xEC\x05$\x13\x02\xEC\xED\x05\x06\x04\x02\xED\xEF\x03\x02\x02" +
		"\x02\xEE\xD2\x03\x02\x02\x02\xEE\xD8\x03\x02\x02\x02\xEE\xEA\x03\x02\x02" +
		"\x02\xEF#\x03\x02\x02\x02\xF0\xF1\x07\b\x02\x02\xF1\xF2\x05r:\x02\xF2" +
		"\xF3\x07\x0F\x02\x02\xF3\xF4\x05f4\x02\xF4\xF5\x07\t\x02\x02\xF5%\x03" +
		"\x02\x02\x02\xF6\xF7\x07?\x02\x02\xF7\xF8\x05\x06\x04\x02\xF8\'\x03\x02" +
		"\x02\x02\xF9\xFB\x07F\x02\x02\xFA\xFC\x05d3\x02\xFB\xFA\x03\x02\x02\x02" +
		"\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07\x10\x02\x02" +
		"\xFE)\x03\x02\x02\x02\xFF\u0101\x07E\x02\x02\u0100\u0102\x05d3\x02\u0101" +
		"\u0100\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02" +
		"\x02\x02\u0103\u0104\x07\x10\x02\x02\u0104+\x03\x02\x02\x02\u0105\u0107" +
		"\x07G\x02\x02\u0106\u0108\x05d3\x02\u0107\u0106\x03\x02\x02\x02\u0107" +
		"\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x07\x10" +
		"\x02\x02\u010A-\x03\x02\x02\x02\u010B\u010C\x07H\x02\x02\u010C\u010D\x07" +
		"\b\x02\x02\u010D\u010E\x05d3\x02\u010E\u010F\x07\t\x02\x02\u010F\u0110" +
		"\x050\x19\x02\u0110/\x03\x02\x02\x02\u0111\u0113\x07\n\x02\x02\u0112\u0114" +
		"\x052\x1A\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02" +
		"\u0114\u0119\x03\x02\x02\x02\u0115\u0117\x056\x1C\x02\u0116\u0118\x05" +
		"2\x1A\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118" +
		"\u011A\x03\x02\x02\x02\u0119\u0115\x03\x02\x02\x02\u0119\u011A\x03\x02" +
		"\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x07\v\x02\x02\u011C1" +
		"\x03\x02\x02\x02\u011D\u011F\x054\x1B\x02\u011E\u011D\x03\x02\x02\x02" +
		"\u011F\u0120\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03" +
		"\x02\x02\x02\u01213\x03\x02\x02\x02\u0122\u0123\x07I\x02\x02\u0123\u0124" +
		"\x05d3\x02\u0124\u0126\x07\x0F\x02\x02\u0125\u0127\x05\n\x06\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u01275\x03\x02\x02" +
		"\x02\u0128\u0129\x07J\x02\x02\u0129\u012B\x07\x0F\x02\x02\u012A\u012C" +
		"\x05\n\x06\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012C7\x03\x02\x02\x02\u012D\u012E\x07=\x02\x02\u012E\u012F\x05r:\x02" +
		"\u012F\u0130\x05:\x1E\x02\u0130\u0131\x07\x10\x02\x02\u01319\x03\x02\x02" +
		"\x02\u0132\u0136\x07\n\x02\x02\u0133\u0135\x05<\x1F\x02\u0134\u0133\x03" +
		"\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136" +
		"\u0137\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0139\u013A\x07\v\x02\x02\u013A;\x03\x02\x02\x02\u013B\u013E" +
		"\x05> \x02\u013C\u013E\x05J&\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013C" +
		"\x03\x02\x02\x02\u013E=\x03\x02\x02\x02\u013F\u0140\x079\x02\x02\u0140" +
		"\u0142\x05r:\x02\u0141\u0143\x05@!\x02\u0142\u0141\x03\x02\x02\x02\u0142" +
		"\u0143\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0145\x07\x10" +
		"\x02\x02\u0145?\x03\x02\x02\x02\u0146\u0147\x07\x0F\x02\x02\u0147\u0148" +
		"\x05B\"\x02\u0148A\x03\x02\x02\x02\u0149\u014C\x05D#\x02\u014A\u014C\x05" +
		"f4\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014A\x03\x02\x02\x02\u014CC" +
		"\x03\x02\x02\x02\u014D\u014E\x05F$\x02\u014EE\x03\x02\x02\x02\u014F\u0150" +
		"\x05H%\x02\u0150G\x03\x02\x02\x02\u0151\u0152\t\x03\x02\x02\u0152I\x03" +
		"\x02\x02\x02\u0153\u0154\x07<\x02\x02\u0154\u0155\x05r:\x02\u0155\u0157" +
		"\x07\b\x02\x02\u0156\u0158\x05L\'\x02\u0157\u0156\x03\x02\x02\x02\u0157" +
		"\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x07\t\x02" +
		"\x02\u015A\u015C\x05@!\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03" +
		"\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x05R*\x02\u015EK" +
		"\x03\x02\x02\x02\u015F\u0164\x05N(\x02\u0160\u0161\x07\x0E\x02\x02\u0161" +
		"\u0163\x05N(\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02" +
		"\u0164\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0169\x03" +
		"\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167\u0168\x07\x0E\x02\x02\u0168" +
		"\u016A\x05P)\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
		"\u016A\u016D\x03\x02\x02\x02\u016B\u016D\x05P)\x02\u016C\u015F\x03\x02" +
		"\x02\x02\u016C\u016B\x03\x02\x02\x02\u016DM\x03\x02\x02\x02\u016E\u0170" +
		"\x05\x1A\x0E\x02\u016F\u0171\x05@!\x02\u0170\u016F\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171O\x03\x02\x02\x02\u0172\u0173\x05f4\x02\u0173" +
		"Q\x03\x02\x02\x02\u0174\u0176\x07\n\x02\x02\u0175\u0177\x05V,\x02\u0176" +
		"\u0175\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0178\x03\x02" +
		"\x02\x02\u0178\u0179\x07\v\x02\x02\u0179S\x03\x02\x02\x02\u017A\u017B" +
		"\x07<\x02\x02\u017B\u017C\x05r:\x02\u017C\u017E\x07\b\x02\x02\u017D\u017F" +
		"\x05L\'\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F" +
		"\u0180\x03\x02\x02\x02\u0180\u0181\x07\t\x02\x02\u0181\u0182\x07\x10\x02" +
		"\x02\u0182U\x03\x02\x02\x02\u0183\u0185\x05\x04\x03\x02\u0184\u0183\x03" +
		"\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186" +
		"\u0187\x03\x02\x02\x02\u0187W\x03\x02\x02\x02\u0188\u0189\x07\x06\x02" +
		"\x02\u0189\u018A\x05Z.\x02\u018A\u018B\x07\x07\x02\x02\u018BY\x03\x02" +
		"\x02\x02\u018C\u018E\x07\x0E\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E" +
		"\u0191\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02" +
		"\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192" +
		"\u0194\x05\\/\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02" +
		"\x02\u0194\u019D\x03\x02\x02\x02\u0195\u0197\x07\x0E\x02\x02\u0196\u0195" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02" +
		"\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x05" +
		"\\/\x02\u019B\u0196\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D" +
		"\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A3\x03\x02" +
		"\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A2\x07\x0E\x02\x02\u01A1" +
		"\u01A0\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02" +
		"\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A8\x03\x02\x02\x02\u01A5" +
		"\u01A3\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u018F\x03\x02" +
		"\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8[\x03\x02\x02\x02\u01A9\u01AA" +
		"\x05f4\x02\u01AA]\x03\x02\x02\x02\u01AB\u01B0\x07\b\x02\x02\u01AC\u01AE" +
		"\x05`1\x02\u01AD\u01AF\x07\x0E\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AC\x03\x02" +
		"\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B3\x07\t\x02\x02\u01B3_\x03\x02\x02\x02\u01B4\u01BB\x05b2\x02\u01B5" +
		"\u01B7\x07\x0E\x02\x02\u01B6\u01B8\x05b2\x02\u01B7\u01B6\x03\x02\x02\x02" +
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B5\x03" +
		"\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB" +
		"\u01BC\x03\x02\x02\x02\u01BCa\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02" +
		"\x02\u01BE\u01BF\x05f4\x02\u01BFc\x03\x02\x02\x02\u01C0\u01C5\x05f4\x02" +
		"\u01C1\u01C2\x07\x0E\x02\x02\u01C2\u01C4\x05f4\x02\u01C3\u01C1\x03\x02" +
		"\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5" +
		"\u01C6\x03\x02\x02\x02\u01C6e\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02" +
		"\x02\u01C8\u01C9\b4\x01\x02\u01C9\u01DF\x05h5\x02\u01CA\u01CB\x07\x11" +
		"\x02\x02\u01CB\u01DF\x05f4\x19\u01CC\u01CD\x07\x12\x02\x02\u01CD\u01DF" +
		"\x05f4\x18\u01CE\u01CF\x07*\x02\x02\u01CF\u01DF\x05f4\x17\u01D0\u01D1" +
		"\x07+\x02\x02\u01D1\u01DF\x05f4\x16\u01D2\u01D3\x07\x1F\x02\x02\u01D3" +
		"\u01DF\x05f4\x15\u01D4\u01D5\x07)\x02\x02\u01D5\u01DF\x05f4\x14\u01D6" +
		"\u01DF\x07K\x02\x02\u01D7\u01DF\x05r:\x02\u01D8\u01DF\x05l7\x02\u01D9" +
		"\u01DF\x05X-\x02\u01DA\u01DB\x07\b\x02\x02\u01DB\u01DC\x05d3\x02\u01DC" +
		"\u01DD\x07\t\x02\x02\u01DD\u01DF\x03\x02\x02\x02\u01DE\u01C8\x03\x02\x02" +
		"\x02\u01DE\u01CA\x03\x02\x02\x02\u01DE\u01CC\x03\x02\x02\x02\u01DE\u01CE" +
		"\x03\x02\x02\x02\u01DE\u01D0\x03\x02\x02\x02\u01DE\u01D2\x03\x02\x02\x02" +
		"\u01DE\u01D4\x03\x02\x02\x02\u01DE\u01D6\x03\x02\x02\x02\u01DE\u01D7\x03" +
		"\x02\x02\x02\u01DE\u01D8\x03\x02\x02\x02\u01DE\u01D9\x03\x02\x02\x02\u01DE" +
		"\u01DA\x03\x02\x02\x02\u01DF\u021B\x03\x02\x02\x02\u01E0\u01E1\f\x1C\x02" +
		"\x02\u01E1\u01E2\x07\r\x02\x02\u01E2\u01E3\x05f4\x02\u01E3\u01E4\x07\x0F" +
		"\x02\x02\u01E4\u01E5\x05f4\x1D\u01E5\u021A\x03\x02\x02\x02\u01E6\u01E7" +
		"\f\x13\x02\x02\u01E7\u01E8\t\x04\x02\x02\u01E8\u021A\x05f4\x14\u01E9\u01EA" +
		"\f\x12\x02\x02\u01EA\u01EB\t\x05\x02\x02\u01EB\u021A\x05f4\x13\u01EC\u01ED" +
		"\f\x11\x02\x02\u01ED\u01EE\t\x06\x02\x02\u01EE\u021A\x05f4\x12\u01EF\u01F0" +
		"\f\x10\x02\x02\u01F0\u01F1\t\x07\x02\x02\u01F1\u021A\x05f4\x11\u01F2\u01F3" +
		"\f\x0F\x02\x02\u01F3\u01F4\t\b\x02\x02\u01F4\u021A\x05f4\x10\u01F5\u01F6" +
		"\f\x0E\x02\x02\u01F6\u01F7\x07 \x02\x02\u01F7\u021A\x05f4\x0F\u01F8\u01F9" +
		"\f\r\x02\x02\u01F9\u01FA\x07\"\x02\x02\u01FA\u021A\x05f4\x0E\u01FB\u01FC" +
		"\f\f\x02\x02\u01FC\u01FD\x07!\x02\x02\u01FD\u021A\x05f4\r\u01FE\u01FF" +
		"\f\v\x02\x02\u01FF\u0200\x07\x1B\x02\x02\u0200\u021A\x05f4\f\u0201\u0202" +
		"\f\n\x02\x02\u0202\u0203\x07\x1C\x02\x02\u0203\u021A\x05f4\v\u0204\u0205" +
		"\f\t\x02\x02\u0205\u0206\x07/\x02\x02\u0206\u021A\x05f4\n\u0207\u0208" +
		"\f\b\x02\x02\u0208\u0209\x05j6\x02\u0209\u020A\x05f4\t\u020A\u021A\x03" +
		"\x02\x02\x02\u020B\u020C\f\x1F\x02\x02\u020C\u020D\x07\x06\x02\x02\u020D" +
		"\u020E\x05d3\x02\u020E\u020F\x07\x07\x02\x02\u020F\u021A\x03\x02\x02\x02" +
		"\u0210\u0211\f\x1E\x02\x02\u0211\u0212\x07\f\x02\x02\u0212\u021A\x05r" +
		":\x02\u0213\u0214\f\x1D\x02\x02\u0214\u021A\x05^0\x02\u0215\u0216\f\x1B" +
		"\x02\x02\u0216\u021A\x07\x11\x02\x02\u0217\u0218\f\x1A\x02\x02\u0218\u021A" +
		"\x07\x12\x02\x02\u0219\u01E0\x03\x02\x02\x02\u0219\u01E6\x03\x02\x02\x02" +
		"\u0219\u01E9\x03\x02\x02\x02\u0219\u01EC\x03\x02\x02\x02\u0219\u01EF\x03" +
		"\x02\x02\x02\u0219\u01F2\x03\x02\x02\x02\u0219\u01F5\x03\x02\x02\x02\u0219" +
		"\u01F8\x03\x02\x02\x02\u0219\u01FB\x03\x02\x02\x02\u0219\u01FE\x03\x02" +
		"\x02\x02\u0219\u0201\x03\x02\x02\x02\u0219\u0204\x03\x02\x02\x02\u0219" +
		"\u0207\x03\x02\x02\x02\u0219\u020B\x03\x02\x02\x02\u0219\u0210\x03\x02" +
		"\x02\x02\u0219\u0213\x03\x02\x02\x02\u0219\u0215\x03\x02\x02\x02\u0219" +
		"\u0217\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02" +
		"\x02\x02\u021B\u021C\x03\x02\x02\x02\u021Cg\x03\x02\x02\x02\u021D\u021B" +
		"\x03\x02\x02\x02\u021E\u021F\x07<\x02\x02\u021F\u0221\x07\b\x02\x02\u0220" +
		"\u0222\x05L\'\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02" +
		"\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x07\t\x02\x02\u0224\u0226" +
		"\x05@!\x02\u0225\u0224\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226" +
		"\u0227\x03\x02\x02\x02\u0227\u0228\x05R*\x02\u0228i\x03\x02\x02\x02\u0229" +
		"\u022A\t\t\x02\x02\u022Ak\x03\x02\x02\x02\u022B\u022F\x07\x03\x02\x02" +
		"\u022C\u022F\x07_\x02\x02\u022D\u022F\x05n8\x02\u022E\u022B\x03\x02\x02" +
		"\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022Fm\x03" +
		"\x02\x02\x02\u0230\u0231\t\n\x02\x02\u0231o\x03\x02\x02\x02\u0232\u0235" +
		"\x05r:\x02\u0233\u0235\x05t;\x02\u0234\u0232\x03\x02\x02\x02\u0234\u0233" +
		"\x03\x02\x02\x02\u0235q\x03\x02\x02\x02\u0236\u0237\x07^\x02\x02\u0237" +
		"s\x03\x02\x02\x02\u0238\u0239\x05";
	private static readonly _serializedATNSegment1: string =
		"v<\x02\u0239u\x03\x02\x02\x02\u023A\u023B\t\v\x02\x02\u023Bw\x03\x02\x02" +
		"\x028y\x8D\x91\x98\x9D\xA9\xB8\xBE\xD0\xDC\xDE\xE2\xE6\xEE\xFB\u0101\u0107" +
		"\u0113\u0117\u0119\u0120\u0126\u012B\u0136\u013D\u0142\u014B\u0157\u015B" +
		"\u0164\u0169\u016C\u0170\u0176\u017E\u0186\u018F\u0193\u0198\u019D\u01A3" +
		"\u01A7\u01AE\u01B0\u01B7\u01BB\u01C5\u01DE\u0219\u021B\u0221\u0225\u022E" +
		"\u0234";
	public static readonly _serializedATN: string = Utils.join(
		[
			epScriptParser._serializedATNSegment0,
			epScriptParser._serializedATNSegment1,
		],
		"",
	);
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
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
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
	public get ruleIndex(): number { return epScriptParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
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
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Colon(): TerminalNode { return this.getToken(epScriptParser.Colon, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
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
	public Switch(): TerminalNode { return this.getToken(epScriptParser.Switch, 0); }
	public OpenParen(): TerminalNode { return this.getToken(epScriptParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(epScriptParser.CloseParen, 0); }
	public caseBlock(): CaseBlockContext {
		return this.getRuleContext(0, CaseBlockContext);
	}
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
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
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


export class Type_Context extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimaryTypeContext);
	}
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_type_; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	public predefinedType(): PredefinedTypeContext {
		return this.getRuleContext(0, PredefinedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_primaryType; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPrimaryType) {
			listener.enterPrimaryType(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPrimaryType) {
			listener.exitPrimaryType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPrimaryType) {
			return visitor.visitPrimaryType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredefinedTypeContext extends ParserRuleContext {
	public encodedTypes(): EncodedTypesContext {
		return this.getRuleContext(0, EncodedTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_predefinedType; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPredefinedType) {
			listener.enterPredefinedType(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPredefinedType) {
			listener.exitPredefinedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPredefinedType) {
			return visitor.visitPredefinedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EncodedTypesContext extends ParserRuleContext {
	public TrgAllyStatus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgAllyStatus, 0); }
	public TrgComparison(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgComparison, 0); }
	public TrgCount(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgCount, 0); }
	public TrgModifier(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgModifier, 0); }
	public TrgOrder(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgOrder, 0); }
	public TrgPlayer(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgPlayer, 0); }
	public TrgProperty(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgProperty, 0); }
	public TrgPropState(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgPropState, 0); }
	public TrgResource(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgResource, 0); }
	public TrgScore(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgScore, 0); }
	public TrgSwitchAction(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgSwitchAction, 0); }
	public TrgSwitchState(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgSwitchState, 0); }
	public TrgAIScript(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgAIScript, 0); }
	public TrgLocation(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgLocation, 0); }
	public TrgString(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgString, 0); }
	public TrgSwitch(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgSwitch, 0); }
	public TrgUnit(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgUnit, 0); }
	public TrgTBL(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.TrgTBL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_encodedTypes; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterEncodedTypes) {
			listener.enterEncodedTypes(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitEncodedTypes) {
			listener.exitEncodedTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitEncodedTypes) {
			return visitor.visitEncodedTypes(this);
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
	public lastFormalParameterArg(): LastFormalParameterArgContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterArgContext);
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


export class LastFormalParameterArgContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_lastFormalParameterArg; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterLastFormalParameterArg) {
			listener.enterLastFormalParameterArg(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitLastFormalParameterArg) {
			listener.exitLastFormalParameterArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameterArg) {
			return visitor.visitLastFormalParameterArg(this);
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
export class ArgumentExpressionContext extends SingleExpressionContext {
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
		if (listener.enterArgumentExpression) {
			listener.enterArgumentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitArgumentExpression) {
			listener.exitArgumentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitArgumentExpression) {
			return visitor.visitArgumentExpression(this);
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
export class PostIncreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(epScriptParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPostIncreaseExpression) {
			listener.enterPostIncreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPostIncreaseExpression) {
			listener.exitPostIncreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPostIncreaseExpression) {
			return visitor.visitPostIncreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(epScriptParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncreaseExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(epScriptParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPreIncreaseExpression) {
			listener.enterPreIncreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPreIncreaseExpression) {
			listener.exitPreIncreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPreIncreaseExpression) {
			return visitor.visitPreIncreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(epScriptParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(epScriptParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(epScriptParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	public BitNot(): TerminalNode { return this.getToken(epScriptParser.BitNot, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(epScriptParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicateExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterMultiplicateExpression) {
			listener.enterMultiplicateExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitMultiplicateExpression) {
			listener.exitMultiplicateExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicateExpression) {
			return visitor.visitMultiplicateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddictiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAddictiveExpression) {
			listener.enterAddictiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAddictiveExpression) {
			listener.exitAddictiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAddictiveExpression) {
			return visitor.visitAddictiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LeftShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LeftShiftArithmetic, 0); }
	public RightShiftArithmetic(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.RightShiftArithmetic, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBitShiftExpression) {
			listener.enterBitShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBitShiftExpression) {
			listener.exitBitShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.NotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(epScriptParser.BitAnd, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitXOr(): TerminalNode { return this.getToken(epScriptParser.BitXOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBitXOrExpression) {
			listener.enterBitXOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBitXOrExpression) {
			listener.exitBitXOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(epScriptParser.BitOr, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(epScriptParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(epScriptParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(epScriptParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
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
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
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


export class AssignmentOperatorContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return epScriptParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public BooleanLiterl(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.BooleanLiterl, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return epScriptParser.RULE_literal; }
	// @Override
	public enterRule(listener: epScriptParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: epScriptParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: epScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
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
	public UnitName(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.UnitName, 0); }
	public LocName(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.LocName, 0); }
	public SwitchName(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.SwitchName, 0); }
	public MapString(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.MapString, 0); }
	public StatTxt(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.StatTxt, 0); }
	public VArray(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.VArray, 0); }
	public List(): TerminalNode | undefined { return this.tryGetToken(epScriptParser.List, 0); }
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


