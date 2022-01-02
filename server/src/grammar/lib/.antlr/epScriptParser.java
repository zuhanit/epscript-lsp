// Generated from c:\Users\zuhan\Desktop\Programming\Practice\node\epscript-language-support\server\src\main\grammar\lib\epScriptParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class epScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		BooleanLiterl=1, DecimalLiteral=2, HexIntegerLiteral=3, OpenBracket=4, 
		CloseBracket=5, OpenParen=6, CloseParen=7, OpenBrace=8, CloseBrace=9, 
		Dot=10, QuestionMark=11, Comma=12, Colon=13, SemiColon=14, PlusPlus=15, 
		MinusMinus=16, PlusAssign=17, MinusAssign=18, MultiplyAssign=19, LeftShiftArithmeticAssign=20, 
		RightShiftArithmeticAssign=21, BitAndAssign=22, BitXorAssign=23, BitOrAssign=24, 
		And=25, Or=26, LeftShiftArithmetic=27, RightShiftArithmetic=28, BitNot=29, 
		BitAnd=30, BitOr=31, BitXOr=32, Equals=33, LessThanEquals=34, GreaterThanEquals=35, 
		LessThan=36, MoreThan=37, NotEquals=38, Not=39, Plus=40, Minus=41, Multiply=42, 
		Divide=43, Modulus=44, Assign=45, Import=46, As=47, Var=48, Const=49, 
		Static=50, Function=51, Object=52, L2V=53, Once=54, If=55, Else=56, For=57, 
		Foreach=58, While=59, Break=60, Continue=61, Return=62, Switch=63, Case=64, 
		Default=65, This=66, TrgAllyStatus=67, TrgComparison=68, TrgCount=69, 
		TrgModifier=70, TrgOrder=71, TrgPlayer=72, TrgProperty=73, TrgPropState=74, 
		TrgResource=75, TrgScore=76, TrgSwitchAction=77, TrgSwitchState=78, TrgAIScript=79, 
		TrgLocation=80, TrgString=81, TrgSwitch=82, TrgUnit=83, TrgTBL=84, Identifier=85, 
		StringLiteral=86, WhiteSpaces=87, LineTerminator=88, MultiLineComment=89, 
		SingleLineComment=90, UnexpectedCharacter=91, DoubleStringCharacter=92, 
		SingleStringCharacter=93;
	public static final int
		RULE_program = 0, RULE_sourceElement = 1, RULE_statement = 2, RULE_block = 3, 
		RULE_statementList = 4, RULE_importStatement = 5, RULE_dottedName = 6, 
		RULE_importNamespace = 7, RULE_variableStatement = 8, RULE_variableDeclarationList = 9, 
		RULE_variableDeclaration = 10, RULE_emptyStatement = 11, RULE_assignAble = 12, 
		RULE_expressionStatement = 13, RULE_varModifier = 14, RULE_ifStatement = 15, 
		RULE_iterationStatement = 16, RULE_foreachBlock = 17, RULE_onceStatement = 18, 
		RULE_continueStatement = 19, RULE_breakStatement = 20, RULE_returnStatement = 21, 
		RULE_switchStatement = 22, RULE_caseBlock = 23, RULE_caseClauses = 24, 
		RULE_caseClause = 25, RULE_defaultClause = 26, RULE_objectDeclaration = 27, 
		RULE_objectTail = 28, RULE_objectElement = 29, RULE_objectVariableDeclaration = 30, 
		RULE_typeAnnotation = 31, RULE_type_ = 32, RULE_primaryType = 33, RULE_predefinedType = 34, 
		RULE_encodedTypes = 35, RULE_functionDeclaration = 36, RULE_formalParameterList = 37, 
		RULE_formalParameterArg = 38, RULE_lastFormalParameterArg = 39, RULE_functionBody = 40, 
		RULE_functionDefine = 41, RULE_sourceElements = 42, RULE_arrayLiteral = 43, 
		RULE_elementList = 44, RULE_arrayElement = 45, RULE_arguments = 46, RULE_argumentList = 47, 
		RULE_argument = 48, RULE_expressionSequence = 49, RULE_singleExpression = 50, 
		RULE_anonymosuFunction = 51, RULE_assignmentOperator = 52, RULE_literal = 53, 
		RULE_numericLiteral = 54, RULE_identifierName = 55, RULE_identifier = 56, 
		RULE_reservedWord = 57, RULE_keyword = 58;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"numericLiteral", "identifierName", "identifier", "reservedWord", "keyword"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'['", "']'", "'('", "')'", "'{'", "'}'", "'.'", 
			"'?'", "','", "':'", "';'", "'++'", "'--'", "'+='", "'-='", "'*='", "'<<='", 
			"'>>='", "'&='", "'^='", "'|='", "'&&'", "'||'", "'<<'", "'>>'", "'~'", 
			"'&'", "'|'", "'^'", "'=='", "'<='", "'>='", "'<'", "'>'", "'!='", "'!'", 
			"'+'", "'-'", "'*'", "'/'", "'%'", "'='", "'import'", "'as'", "'var'", 
			"'const'", "'static'", "'function'", "'object'", "'l2v'", "'once'", "'if'", 
			"'else'", "'for'", "'foreach'", "'while'", "'break'", "'continue'", "'return'", 
			"'switch'", "'case'", "'default'", "'this'", "'TrgAllyStatus'", "'TrgComparsion'", 
			"'TrgCount'", "'TrgModifier'", "'TrgOrder'", "'TrgPlayer'", "'TrgProperty'", 
			"'TrgPropState'", "'TrgResource'", "'TrgScore'", "'TrgSwitchAction'", 
			"'TrgSwitchState'", "'TrgAIScript'", "'TrgLocation'", "'TrgString'", 
			"'TrgSwitch'", "'TrgUnit'", "'TrgTBL'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "BooleanLiterl", "DecimalLiteral", "HexIntegerLiteral", "OpenBracket", 
			"CloseBracket", "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", 
			"Dot", "QuestionMark", "Comma", "Colon", "SemiColon", "PlusPlus", "MinusMinus", 
			"PlusAssign", "MinusAssign", "MultiplyAssign", "LeftShiftArithmeticAssign", 
			"RightShiftArithmeticAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
			"And", "Or", "LeftShiftArithmetic", "RightShiftArithmetic", "BitNot", 
			"BitAnd", "BitOr", "BitXOr", "Equals", "LessThanEquals", "GreaterThanEquals", 
			"LessThan", "MoreThan", "NotEquals", "Not", "Plus", "Minus", "Multiply", 
			"Divide", "Modulus", "Assign", "Import", "As", "Var", "Const", "Static", 
			"Function", "Object", "L2V", "Once", "If", "Else", "For", "Foreach", 
			"While", "Break", "Continue", "Return", "Switch", "Case", "Default", 
			"This", "TrgAllyStatus", "TrgComparison", "TrgCount", "TrgModifier", 
			"TrgOrder", "TrgPlayer", "TrgProperty", "TrgPropState", "TrgResource", 
			"TrgScore", "TrgSwitchAction", "TrgSwitchState", "TrgAIScript", "TrgLocation", 
			"TrgString", "TrgSwitch", "TrgUnit", "TrgTBL", "Identifier", "StringLiteral", 
			"WhiteSpaces", "LineTerminator", "MultiLineComment", "SingleLineComment", 
			"UnexpectedCharacter", "DoubleStringCharacter", "SingleStringCharacter"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "epScriptParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public epScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(epScriptParser.EOF, 0); }
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(118);
				sourceElements();
				}
			}

			setState(121);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SourceElementContext extends ParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public SourceElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElement; }
	}

	public final SourceElementContext sourceElement() throws RecognitionException {
		SourceElementContext _localctx = new SourceElementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sourceElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ImportStatementContext importStatement() {
			return getRuleContext(ImportStatementContext.class,0);
		}
		public EmptyStatementContext emptyStatement() {
			return getRuleContext(EmptyStatementContext.class,0);
		}
		public VariableStatementContext variableStatement() {
			return getRuleContext(VariableStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public OnceStatementContext onceStatement() {
			return getRuleContext(OnceStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ObjectDeclarationContext objectDeclaration() {
			return getRuleContext(ObjectDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(139);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(125);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(126);
				importStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(127);
				emptyStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(128);
				variableStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(129);
				ifStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(130);
				iterationStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(131);
				switchStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(132);
				onceStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(133);
				continueStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(134);
				breakStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(135);
				returnStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(136);
				objectDeclaration();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(137);
				functionDeclaration();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(138);
				expressionStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(epScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(epScriptParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(OpenBrace);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(142);
				statementList();
				}
			}

			setState(145);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_statementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(147);
				statement();
				}
				}
				setState(150); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStatementContext extends ParserRuleContext {
		public TerminalNode Import() { return getToken(epScriptParser.Import, 0); }
		public DottedNameContext dottedName() {
			return getRuleContext(DottedNameContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public ImportNamespaceContext importNamespace() {
			return getRuleContext(ImportNamespaceContext.class,0);
		}
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_importStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			match(Import);
			setState(153);
			dottedName(0);
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==As) {
				{
				setState(154);
				importNamespace();
				}
			}

			setState(157);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DottedNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DottedNameContext dottedName() {
			return getRuleContext(DottedNameContext.class,0);
		}
		public TerminalNode Dot() { return getToken(epScriptParser.Dot, 0); }
		public DottedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dottedName; }
	}

	public final DottedNameContext dottedName() throws RecognitionException {
		return dottedName(0);
	}

	private DottedNameContext dottedName(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DottedNameContext _localctx = new DottedNameContext(_ctx, _parentState);
		DottedNameContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_dottedName, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(160);
			identifier();
			}
			_ctx.stop = _input.LT(-1);
			setState(167);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new DottedNameContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_dottedName);
					setState(162);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(163);
					match(Dot);
					setState(164);
					identifier();
					}
					} 
				}
				setState(169);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ImportNamespaceContext extends ParserRuleContext {
		public TerminalNode As() { return getToken(epScriptParser.As, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ImportNamespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importNamespace; }
	}

	public final ImportNamespaceContext importNamespace() throws RecognitionException {
		ImportNamespaceContext _localctx = new ImportNamespaceContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_importNamespace);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			match(As);
			setState(171);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableStatementContext extends ParserRuleContext {
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public VariableStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableStatement; }
	}

	public final VariableStatementContext variableStatement() throws RecognitionException {
		VariableStatementContext _localctx = new VariableStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_variableStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			variableDeclarationList();
			setState(174);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationListContext extends ParserRuleContext {
		public VarModifierContext varModifier() {
			return getRuleContext(VarModifierContext.class,0);
		}
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(epScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(epScriptParser.Comma, i);
		}
		public VariableDeclarationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationList; }
	}

	public final VariableDeclarationListContext variableDeclarationList() throws RecognitionException {
		VariableDeclarationListContext _localctx = new VariableDeclarationListContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variableDeclarationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			varModifier();
			setState(177);
			variableDeclaration();
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(178);
				match(Comma);
				setState(179);
				variableDeclaration();
				}
				}
				setState(184);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public AssignAbleContext assignAble() {
			return getRuleContext(AssignAbleContext.class,0);
		}
		public TerminalNode Assign() { return getToken(epScriptParser.Assign, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_variableDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			assignAble();
			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(186);
				match(Assign);
				setState(187);
				singleExpression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatementContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_emptyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignAbleContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AssignAbleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignAble; }
	}

	public final AssignAbleContext assignAble() throws RecognitionException {
		AssignAbleContext _localctx = new AssignAbleContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_assignAble);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			expressionSequence();
			setState(195);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarModifierContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(epScriptParser.Var, 0); }
		public TerminalNode Const() { return getToken(epScriptParser.Const, 0); }
		public VarModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varModifier; }
	}

	public final VarModifierContext varModifier() throws RecognitionException {
		VarModifierContext _localctx = new VarModifierContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_varModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			_la = _input.LA(1);
			if ( !(_la==Var || _la==Const) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(epScriptParser.If, 0); }
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Else() { return getToken(epScriptParser.Else, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(If);
			setState(200);
			match(OpenParen);
			setState(201);
			expressionSequence();
			setState(202);
			match(CloseParen);
			setState(203);
			statement();
			setState(206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(204);
				match(Else);
				setState(205);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationStatementContext extends ParserRuleContext {
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	 
		public IterationStatementContext() { }
		public void copyFrom(IterationStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class WhileStatementContext extends IterationStatementContext {
		public TerminalNode While() { return getToken(epScriptParser.While, 0); }
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForStatementContext extends IterationStatementContext {
		public TerminalNode For() { return getToken(epScriptParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public List<TerminalNode> SemiColon() { return getTokens(epScriptParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(epScriptParser.SemiColon, i);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<ExpressionSequenceContext> expressionSequence() {
			return getRuleContexts(ExpressionSequenceContext.class);
		}
		public ExpressionSequenceContext expressionSequence(int i) {
			return getRuleContext(ExpressionSequenceContext.class,i);
		}
		public VariableDeclarationListContext variableDeclarationList() {
			return getRuleContext(VariableDeclarationListContext.class,0);
		}
		public ForStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForeachStatementContext extends IterationStatementContext {
		public TerminalNode Foreach() { return getToken(epScriptParser.Foreach, 0); }
		public ForeachBlockContext foreachBlock() {
			return getRuleContext(ForeachBlockContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ForeachStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_iterationStatement);
		int _la;
		try {
			setState(236);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case While:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				match(While);
				setState(209);
				match(OpenParen);
				setState(210);
				expressionSequence();
				setState(211);
				match(CloseParen);
				setState(212);
				statement();
				}
				break;
			case For:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(214);
				match(For);
				setState(215);
				match(OpenParen);
				setState(220);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case BooleanLiterl:
				case DecimalLiteral:
				case HexIntegerLiteral:
				case OpenBracket:
				case OpenParen:
				case PlusPlus:
				case MinusMinus:
				case BitNot:
				case Not:
				case Plus:
				case Minus:
				case Function:
				case This:
				case Identifier:
				case StringLiteral:
					{
					setState(216);
					expressionSequence();
					}
					break;
				case SemiColon:
				case Var:
				case Const:
					{
					setState(218);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==Var || _la==Const) {
						{
						setState(217);
						variableDeclarationList();
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(222);
				match(SemiColon);
				setState(224);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
					{
					setState(223);
					expressionSequence();
					}
				}

				setState(226);
				match(SemiColon);
				setState(228);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
					{
					setState(227);
					expressionSequence();
					}
				}

				setState(230);
				match(CloseParen);
				setState(231);
				statement();
				}
				break;
			case Foreach:
				_localctx = new ForeachStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(232);
				match(Foreach);
				setState(233);
				foreachBlock();
				setState(234);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForeachBlockContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Colon() { return getToken(epScriptParser.Colon, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public ForeachBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_foreachBlock; }
	}

	public final ForeachBlockContext foreachBlock() throws RecognitionException {
		ForeachBlockContext _localctx = new ForeachBlockContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_foreachBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(OpenParen);
			setState(239);
			identifier();
			setState(240);
			match(Colon);
			setState(241);
			singleExpression(0);
			setState(242);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OnceStatementContext extends ParserRuleContext {
		public TerminalNode Once() { return getToken(epScriptParser.Once, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public OnceStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_onceStatement; }
	}

	public final OnceStatementContext onceStatement() throws RecognitionException {
		OnceStatementContext _localctx = new OnceStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_onceStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(Once);
			setState(245);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode Continue() { return getToken(epScriptParser.Continue, 0); }
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_continueStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(Continue);
			setState(249);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(248);
				expressionSequence();
				}
			}

			setState(251);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(epScriptParser.Break, 0); }
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_breakStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			match(Break);
			setState(255);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(254);
				expressionSequence();
				}
			}

			setState(257);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode Return() { return getToken(epScriptParser.Return, 0); }
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(Return);
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(260);
				expressionSequence();
				}
			}

			setState(263);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public TerminalNode Switch() { return getToken(epScriptParser.Switch, 0); }
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public CaseBlockContext caseBlock() {
			return getRuleContext(CaseBlockContext.class,0);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			match(Switch);
			setState(266);
			match(OpenParen);
			setState(267);
			expressionSequence();
			setState(268);
			match(CloseParen);
			setState(269);
			caseBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseBlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(epScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(epScriptParser.CloseBrace, 0); }
		public List<CaseClausesContext> caseClauses() {
			return getRuleContexts(CaseClausesContext.class);
		}
		public CaseClausesContext caseClauses(int i) {
			return getRuleContext(CaseClausesContext.class,i);
		}
		public DefaultClauseContext defaultClause() {
			return getRuleContext(DefaultClauseContext.class,0);
		}
		public CaseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseBlock; }
	}

	public final CaseBlockContext caseBlock() throws RecognitionException {
		CaseBlockContext _localctx = new CaseBlockContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			match(OpenBrace);
			setState(273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(272);
				caseClauses();
				}
			}

			setState(279);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(275);
				defaultClause();
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(276);
					caseClauses();
					}
				}

				}
			}

			setState(281);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClausesContext extends ParserRuleContext {
		public List<CaseClauseContext> caseClause() {
			return getRuleContexts(CaseClauseContext.class);
		}
		public CaseClauseContext caseClause(int i) {
			return getRuleContext(CaseClauseContext.class,i);
		}
		public CaseClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClauses; }
	}

	public final CaseClausesContext caseClauses() throws RecognitionException {
		CaseClausesContext _localctx = new CaseClausesContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(283);
				caseClause();
				}
				}
				setState(286); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Case );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClauseContext extends ParserRuleContext {
		public TerminalNode Case() { return getToken(epScriptParser.Case, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode Colon() { return getToken(epScriptParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public CaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClause; }
	}

	public final CaseClauseContext caseClause() throws RecognitionException {
		CaseClauseContext _localctx = new CaseClauseContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_caseClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(Case);
			setState(289);
			expressionSequence();
			setState(290);
			match(Colon);
			setState(292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(291);
				statementList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultClauseContext extends ParserRuleContext {
		public TerminalNode Default() { return getToken(epScriptParser.Default, 0); }
		public TerminalNode Colon() { return getToken(epScriptParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public DefaultClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultClause; }
	}

	public final DefaultClauseContext defaultClause() throws RecognitionException {
		DefaultClauseContext _localctx = new DefaultClauseContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_defaultClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(294);
			match(Default);
			setState(295);
			match(Colon);
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(296);
				statementList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectDeclarationContext extends ParserRuleContext {
		public TerminalNode Object() { return getToken(epScriptParser.Object, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ObjectTailContext objectTail() {
			return getRuleContext(ObjectTailContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public ObjectDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectDeclaration; }
	}

	public final ObjectDeclarationContext objectDeclaration() throws RecognitionException {
		ObjectDeclarationContext _localctx = new ObjectDeclarationContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_objectDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(Object);
			setState(300);
			identifier();
			setState(301);
			objectTail();
			setState(302);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectTailContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(epScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(epScriptParser.CloseBrace, 0); }
		public List<ObjectElementContext> objectElement() {
			return getRuleContexts(ObjectElementContext.class);
		}
		public ObjectElementContext objectElement(int i) {
			return getRuleContext(ObjectElementContext.class,i);
		}
		public ObjectTailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectTail; }
	}

	public final ObjectTailContext objectTail() throws RecognitionException {
		ObjectTailContext _localctx = new ObjectTailContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_objectTail);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(OpenBrace);
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Var || _la==Function) {
				{
				{
				setState(305);
				objectElement();
				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(311);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectElementContext extends ParserRuleContext {
		public ObjectVariableDeclarationContext objectVariableDeclaration() {
			return getRuleContext(ObjectVariableDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ObjectElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectElement; }
	}

	public final ObjectElementContext objectElement() throws RecognitionException {
		ObjectElementContext _localctx = new ObjectElementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_objectElement);
		try {
			setState(315);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				enterOuterAlt(_localctx, 1);
				{
				setState(313);
				objectVariableDeclaration();
				}
				break;
			case Function:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectVariableDeclarationContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(epScriptParser.Var, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public ObjectVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectVariableDeclaration; }
	}

	public final ObjectVariableDeclarationContext objectVariableDeclaration() throws RecognitionException {
		ObjectVariableDeclarationContext _localctx = new ObjectVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_objectVariableDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(Var);
			setState(318);
			identifier();
			setState(320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(319);
				typeAnnotation();
				}
			}

			setState(322);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeAnnotationContext extends ParserRuleContext {
		public TerminalNode Colon() { return getToken(epScriptParser.Colon, 0); }
		public Type_Context type_() {
			return getRuleContext(Type_Context.class,0);
		}
		public TypeAnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAnnotation; }
	}

	public final TypeAnnotationContext typeAnnotation() throws RecognitionException {
		TypeAnnotationContext _localctx = new TypeAnnotationContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_typeAnnotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			match(Colon);
			setState(325);
			type_();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_Context extends ParserRuleContext {
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public Type_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_; }
	}

	public final Type_Context type_() throws RecognitionException {
		Type_Context _localctx = new Type_Context(_ctx, getState());
		enterRule(_localctx, 64, RULE_type_);
		try {
			setState(329);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TrgAllyStatus:
			case TrgComparison:
			case TrgCount:
			case TrgModifier:
			case TrgOrder:
			case TrgPlayer:
			case TrgProperty:
			case TrgPropState:
			case TrgResource:
			case TrgScore:
			case TrgSwitchAction:
			case TrgSwitchState:
			case TrgAIScript:
			case TrgLocation:
			case TrgString:
			case TrgSwitch:
			case TrgUnit:
			case TrgTBL:
				enterOuterAlt(_localctx, 1);
				{
				setState(327);
				primaryType();
				}
				break;
			case BooleanLiterl:
			case DecimalLiteral:
			case HexIntegerLiteral:
			case OpenBracket:
			case OpenParen:
			case PlusPlus:
			case MinusMinus:
			case BitNot:
			case Not:
			case Plus:
			case Minus:
			case Function:
			case This:
			case Identifier:
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(328);
				singleExpression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryTypeContext extends ParserRuleContext {
		public PredefinedTypeContext predefinedType() {
			return getRuleContext(PredefinedTypeContext.class,0);
		}
		public PrimaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryType; }
	}

	public final PrimaryTypeContext primaryType() throws RecognitionException {
		PrimaryTypeContext _localctx = new PrimaryTypeContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_primaryType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			predefinedType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PredefinedTypeContext extends ParserRuleContext {
		public EncodedTypesContext encodedTypes() {
			return getRuleContext(EncodedTypesContext.class,0);
		}
		public PredefinedTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predefinedType; }
	}

	public final PredefinedTypeContext predefinedType() throws RecognitionException {
		PredefinedTypeContext _localctx = new PredefinedTypeContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_predefinedType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(333);
			encodedTypes();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EncodedTypesContext extends ParserRuleContext {
		public TerminalNode TrgAllyStatus() { return getToken(epScriptParser.TrgAllyStatus, 0); }
		public TerminalNode TrgComparison() { return getToken(epScriptParser.TrgComparison, 0); }
		public TerminalNode TrgCount() { return getToken(epScriptParser.TrgCount, 0); }
		public TerminalNode TrgModifier() { return getToken(epScriptParser.TrgModifier, 0); }
		public TerminalNode TrgOrder() { return getToken(epScriptParser.TrgOrder, 0); }
		public TerminalNode TrgPlayer() { return getToken(epScriptParser.TrgPlayer, 0); }
		public TerminalNode TrgProperty() { return getToken(epScriptParser.TrgProperty, 0); }
		public TerminalNode TrgPropState() { return getToken(epScriptParser.TrgPropState, 0); }
		public TerminalNode TrgResource() { return getToken(epScriptParser.TrgResource, 0); }
		public TerminalNode TrgScore() { return getToken(epScriptParser.TrgScore, 0); }
		public TerminalNode TrgSwitchAction() { return getToken(epScriptParser.TrgSwitchAction, 0); }
		public TerminalNode TrgSwitchState() { return getToken(epScriptParser.TrgSwitchState, 0); }
		public TerminalNode TrgAIScript() { return getToken(epScriptParser.TrgAIScript, 0); }
		public TerminalNode TrgLocation() { return getToken(epScriptParser.TrgLocation, 0); }
		public TerminalNode TrgString() { return getToken(epScriptParser.TrgString, 0); }
		public TerminalNode TrgSwitch() { return getToken(epScriptParser.TrgSwitch, 0); }
		public TerminalNode TrgUnit() { return getToken(epScriptParser.TrgUnit, 0); }
		public TerminalNode TrgTBL() { return getToken(epScriptParser.TrgTBL, 0); }
		public EncodedTypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_encodedTypes; }
	}

	public final EncodedTypesContext encodedTypes() throws RecognitionException {
		EncodedTypesContext _localctx = new EncodedTypesContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_encodedTypes);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			_la = _input.LA(1);
			if ( !(((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (TrgAllyStatus - 67)) | (1L << (TrgComparison - 67)) | (1L << (TrgCount - 67)) | (1L << (TrgModifier - 67)) | (1L << (TrgOrder - 67)) | (1L << (TrgPlayer - 67)) | (1L << (TrgProperty - 67)) | (1L << (TrgPropState - 67)) | (1L << (TrgResource - 67)) | (1L << (TrgScore - 67)) | (1L << (TrgSwitchAction - 67)) | (1L << (TrgSwitchState - 67)) | (1L << (TrgAIScript - 67)) | (1L << (TrgLocation - 67)) | (1L << (TrgString - 67)) | (1L << (TrgSwitch - 67)) | (1L << (TrgUnit - 67)) | (1L << (TrgTBL - 67)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode Function() { return getToken(epScriptParser.Function, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			match(Function);
			setState(338);
			identifier();
			setState(339);
			match(OpenParen);
			setState(341);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(340);
				formalParameterList();
				}
			}

			setState(343);
			match(CloseParen);
			setState(345);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(344);
				typeAnnotation();
				}
			}

			setState(347);
			functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterArgContext> formalParameterArg() {
			return getRuleContexts(FormalParameterArgContext.class);
		}
		public FormalParameterArgContext formalParameterArg(int i) {
			return getRuleContext(FormalParameterArgContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(epScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(epScriptParser.Comma, i);
		}
		public LastFormalParameterArgContext lastFormalParameterArg() {
			return getRuleContext(LastFormalParameterArgContext.class,0);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_formalParameterList);
		int _la;
		try {
			int _alt;
			setState(362);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(349);
				formalParameterArg();
				setState(354);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(350);
						match(Comma);
						setState(351);
						formalParameterArg();
						}
						} 
					}
					setState(356);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
				}
				setState(359);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(357);
					match(Comma);
					setState(358);
					lastFormalParameterArg();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(361);
				lastFormalParameterArg();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterArgContext extends ParserRuleContext {
		public AssignAbleContext assignAble() {
			return getRuleContext(AssignAbleContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public FormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterArg; }
	}

	public final FormalParameterArgContext formalParameterArg() throws RecognitionException {
		FormalParameterArgContext _localctx = new FormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			assignAble();
			setState(366);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(365);
				typeAnnotation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LastFormalParameterArgContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public LastFormalParameterArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lastFormalParameterArg; }
	}

	public final LastFormalParameterArgContext lastFormalParameterArg() throws RecognitionException {
		LastFormalParameterArgContext _localctx = new LastFormalParameterArgContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_lastFormalParameterArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(epScriptParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(epScriptParser.CloseBrace, 0); }
		public SourceElementsContext sourceElements() {
			return getRuleContext(SourceElementsContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_functionBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			match(OpenBrace);
			setState(372);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(371);
				sourceElements();
				}
			}

			setState(374);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDefineContext extends ParserRuleContext {
		public TerminalNode Function() { return getToken(epScriptParser.Function, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public TerminalNode SemiColon() { return getToken(epScriptParser.SemiColon, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FunctionDefineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDefine; }
	}

	public final FunctionDefineContext functionDefine() throws RecognitionException {
		FunctionDefineContext _localctx = new FunctionDefineContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_functionDefine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			match(Function);
			setState(377);
			identifier();
			setState(378);
			match(OpenParen);
			setState(380);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(379);
				formalParameterList();
				}
			}

			setState(382);
			match(CloseParen);
			setState(383);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SourceElementsContext extends ParserRuleContext {
		public List<SourceElementContext> sourceElement() {
			return getRuleContexts(SourceElementContext.class);
		}
		public SourceElementContext sourceElement(int i) {
			return getRuleContext(SourceElementContext.class,i);
		}
		public SourceElementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sourceElements; }
	}

	public final SourceElementsContext sourceElements() throws RecognitionException {
		SourceElementsContext _localctx = new SourceElementsContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_sourceElements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(385);
				sourceElement();
				}
				}
				setState(388); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(epScriptParser.OpenBracket, 0); }
		public ElementListContext elementList() {
			return getRuleContext(ElementListContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(epScriptParser.CloseBracket, 0); }
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_arrayLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(390);
			match(OpenBracket);
			setState(391);
			elementList();
			setState(392);
			match(CloseBracket);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementListContext extends ParserRuleContext {
		public List<TerminalNode> Comma() { return getTokens(epScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(epScriptParser.Comma, i);
		}
		public List<ArrayElementContext> arrayElement() {
			return getRuleContexts(ArrayElementContext.class);
		}
		public ArrayElementContext arrayElement(int i) {
			return getRuleContext(ArrayElementContext.class,i);
		}
		public ElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementList; }
	}

	public final ElementListContext elementList() throws RecognitionException {
		ElementListContext _localctx = new ElementListContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_elementList);
		int _la;
		try {
			int _alt;
			setState(421);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(397);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,36,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(394);
						match(Comma);
						}
						} 
					}
					setState(399);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,36,_ctx);
				}
				setState(401);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
					{
					setState(400);
					arrayElement();
					}
				}

				setState(411);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(404); 
						_errHandler.sync(this);
						_la = _input.LA(1);
						do {
							{
							{
							setState(403);
							match(Comma);
							}
							}
							setState(406); 
							_errHandler.sync(this);
							_la = _input.LA(1);
						} while ( _la==Comma );
						setState(408);
						arrayElement();
						}
						} 
					}
					setState(413);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
				}
				setState(417);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(414);
					match(Comma);
					}
					}
					setState(419);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayElementContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArrayElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayElement; }
	}

	public final ArrayElementContext arrayElement() throws RecognitionException {
		ArrayElementContext _localctx = new ArrayElementContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_arrayElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(423);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public ArgumentListContext argumentList() {
			return getRuleContext(ArgumentListContext.class,0);
		}
		public TerminalNode Comma() { return getToken(epScriptParser.Comma, 0); }
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			match(OpenParen);
			setState(430);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(426);
				argumentList();
				setState(428);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(427);
					match(Comma);
					}
				}

				}
			}

			setState(432);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentListContext extends ParserRuleContext {
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(epScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(epScriptParser.Comma, i);
		}
		public ArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentList; }
	}

	public final ArgumentListContext argumentList() throws RecognitionException {
		ArgumentListContext _localctx = new ArgumentListContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_argumentList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			argument();
			setState(441);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(435);
					match(Comma);
					setState(437);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
						{
						setState(436);
						argument();
						}
					}

					}
					} 
				}
				setState(443);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			singleExpression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(epScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(epScriptParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_expressionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			singleExpression(0);
			setState(451);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(447);
				match(Comma);
				setState(448);
				singleExpression(0);
				}
				}
				setState(453);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SingleExpressionContext extends ParserRuleContext {
		public SingleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_singleExpression; }
	 
		public SingleExpressionContext() { }
		public void copyFrom(SingleExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TernaryExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode QuestionMark() { return getToken(epScriptParser.QuestionMark, 0); }
		public TerminalNode Colon() { return getToken(epScriptParser.Colon, 0); }
		public TernaryExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode And() { return getToken(epScriptParser.And, 0); }
		public LogicalAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicateExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(epScriptParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(epScriptParser.Divide, 0); }
		public TerminalNode Modulus() { return getToken(epScriptParser.Modulus, 0); }
		public MultiplicateExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Or() { return getToken(epScriptParser.Or, 0); }
		public LogicalOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotExpressionContext extends SingleExpressionContext {
		public TerminalNode Not() { return getToken(epScriptParser.Not, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public NotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreDecreaseExpressionContext extends SingleExpressionContext {
		public TerminalNode MinusMinus() { return getToken(epScriptParser.MinusMinus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AnonymousFunctionExpressionContext extends SingleExpressionContext {
		public AnonymosuFunctionContext anonymosuFunction() {
			return getRuleContext(AnonymosuFunctionContext.class,0);
		}
		public AnonymousFunctionExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ThisExpressionContext extends SingleExpressionContext {
		public TerminalNode This() { return getToken(epScriptParser.This, 0); }
		public ThisExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryMinusExpressionContext extends SingleExpressionContext {
		public TerminalNode Minus() { return getToken(epScriptParser.Minus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryMinusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Assign() { return getToken(epScriptParser.Assign, 0); }
		public AssignmentExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostDecreaseExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode MinusMinus() { return getToken(epScriptParser.MinusMinus, 0); }
		public PostDecreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AddictiveExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(epScriptParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(epScriptParser.Minus, 0); }
		public AddictiveExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryPlusExpressionContext extends SingleExpressionContext {
		public TerminalNode Plus() { return getToken(epScriptParser.Plus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public UnaryPlusExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreIncreaseExpressionContext extends SingleExpressionContext {
		public TerminalNode PlusPlus() { return getToken(epScriptParser.PlusPlus, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PreIncreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode Equals() { return getToken(epScriptParser.Equals, 0); }
		public TerminalNode NotEquals() { return getToken(epScriptParser.NotEquals, 0); }
		public EqualityExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitXOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitXOr() { return getToken(epScriptParser.BitXOr, 0); }
		public BitXOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArgumentExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ArgumentExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitShiftExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LeftShiftArithmetic() { return getToken(epScriptParser.LeftShiftArithmetic, 0); }
		public TerminalNode RightShiftArithmetic() { return getToken(epScriptParser.RightShiftArithmetic, 0); }
		public BitShiftExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(epScriptParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(epScriptParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(epScriptParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(epScriptParser.GreaterThanEquals, 0); }
		public RelationalExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitNotExpressionContext extends SingleExpressionContext {
		public TerminalNode BitNot() { return getToken(epScriptParser.BitNot, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public BitNotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends SingleExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayLiteralExpressionContext extends SingleExpressionContext {
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public ArrayLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberDotExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(epScriptParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public MemberDotExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostIncreaseExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(epScriptParser.PlusPlus, 0); }
		public PostIncreaseExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(epScriptParser.OpenBracket, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(epScriptParser.CloseBracket, 0); }
		public MemberExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitAndExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitAnd() { return getToken(epScriptParser.BitAnd, 0); }
		public BitAndExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParanthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public ParanthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitOrExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public TerminalNode BitOr() { return getToken(epScriptParser.BitOr, 0); }
		public BitOrExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentOperatorExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public AssignmentOperatorExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 100;
		enterRecursionRule(_localctx, 100, RULE_singleExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(476);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Function:
				{
				_localctx = new AnonymousFunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(455);
				anonymosuFunction();
				}
				break;
			case PlusPlus:
				{
				_localctx = new PreIncreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(456);
				match(PlusPlus);
				setState(457);
				singleExpression(23);
				}
				break;
			case MinusMinus:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(458);
				match(MinusMinus);
				setState(459);
				singleExpression(22);
				}
				break;
			case Plus:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(460);
				match(Plus);
				setState(461);
				singleExpression(21);
				}
				break;
			case Minus:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(462);
				match(Minus);
				setState(463);
				singleExpression(20);
				}
				break;
			case BitNot:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(464);
				match(BitNot);
				setState(465);
				singleExpression(19);
				}
				break;
			case Not:
				{
				_localctx = new NotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(466);
				match(Not);
				setState(467);
				singleExpression(18);
				}
				break;
			case This:
				{
				_localctx = new ThisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(468);
				match(This);
				}
				break;
			case Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(469);
				identifier();
				}
				break;
			case BooleanLiterl:
			case DecimalLiteral:
			case HexIntegerLiteral:
			case StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(470);
				literal();
				}
				break;
			case OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(471);
				arrayLiteral();
				}
				break;
			case OpenParen:
				{
				_localctx = new ParanthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(472);
				match(OpenParen);
				setState(473);
				expressionSequence();
				setState(474);
				match(CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(537);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(535);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(478);
						if (!(precpred(_ctx, 26))) throw new FailedPredicateException(this, "precpred(_ctx, 26)");
						setState(479);
						match(QuestionMark);
						setState(480);
						singleExpression(0);
						setState(481);
						match(Colon);
						setState(482);
						singleExpression(27);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicateExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(484);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(485);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << Modulus))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(486);
						singleExpression(18);
						}
						break;
					case 3:
						{
						_localctx = new AddictiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(487);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(488);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(489);
						singleExpression(17);
						}
						break;
					case 4:
						{
						_localctx = new BitShiftExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(490);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(491);
						_la = _input.LA(1);
						if ( !(_la==LeftShiftArithmetic || _la==RightShiftArithmetic) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(492);
						singleExpression(16);
						}
						break;
					case 5:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(493);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(494);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThanEquals) | (1L << GreaterThanEquals) | (1L << LessThan) | (1L << MoreThan))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(495);
						singleExpression(15);
						}
						break;
					case 6:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(496);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(497);
						_la = _input.LA(1);
						if ( !(_la==Equals || _la==NotEquals) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(498);
						singleExpression(14);
						}
						break;
					case 7:
						{
						_localctx = new BitAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(499);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(500);
						match(BitAnd);
						setState(501);
						singleExpression(13);
						}
						break;
					case 8:
						{
						_localctx = new BitXOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(502);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(503);
						match(BitXOr);
						setState(504);
						singleExpression(12);
						}
						break;
					case 9:
						{
						_localctx = new BitOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(505);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(506);
						match(BitOr);
						setState(507);
						singleExpression(11);
						}
						break;
					case 10:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(508);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(509);
						match(And);
						setState(510);
						singleExpression(10);
						}
						break;
					case 11:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(511);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(512);
						match(Or);
						setState(513);
						singleExpression(9);
						}
						break;
					case 12:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(514);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(515);
						match(Assign);
						setState(516);
						singleExpression(8);
						}
						break;
					case 13:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(517);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(518);
						assignmentOperator();
						setState(519);
						singleExpression(7);
						}
						break;
					case 14:
						{
						_localctx = new MemberExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(521);
						if (!(precpred(_ctx, 29))) throw new FailedPredicateException(this, "precpred(_ctx, 29)");
						setState(522);
						match(OpenBracket);
						setState(523);
						expressionSequence();
						setState(524);
						match(CloseBracket);
						}
						break;
					case 15:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(526);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(527);
						match(Dot);
						setState(528);
						identifier();
						}
						break;
					case 16:
						{
						_localctx = new ArgumentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(529);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(530);
						arguments();
						}
						break;
					case 17:
						{
						_localctx = new PostIncreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(531);
						if (!(precpred(_ctx, 25))) throw new FailedPredicateException(this, "precpred(_ctx, 25)");
						setState(532);
						match(PlusPlus);
						}
						break;
					case 18:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(533);
						if (!(precpred(_ctx, 24))) throw new FailedPredicateException(this, "precpred(_ctx, 24)");
						setState(534);
						match(MinusMinus);
						}
						break;
					}
					} 
				}
				setState(539);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AnonymosuFunctionContext extends ParserRuleContext {
		public TerminalNode Function() { return getToken(epScriptParser.Function, 0); }
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public AnonymosuFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anonymosuFunction; }
	}

	public final AnonymosuFunctionContext anonymosuFunction() throws RecognitionException {
		AnonymosuFunctionContext _localctx = new AnonymosuFunctionContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_anonymosuFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			match(Function);
			setState(541);
			match(OpenParen);
			setState(543);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(542);
				formalParameterList();
				}
			}

			setState(545);
			match(CloseParen);
			setState(547);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(546);
				typeAnnotation();
				}
			}

			setState(549);
			functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode MultiplyAssign() { return getToken(epScriptParser.MultiplyAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(epScriptParser.PlusAssign, 0); }
		public TerminalNode BitOrAssign() { return getToken(epScriptParser.BitOrAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(epScriptParser.MinusAssign, 0); }
		public TerminalNode BitAndAssign() { return getToken(epScriptParser.BitAndAssign, 0); }
		public TerminalNode BitXorAssign() { return getToken(epScriptParser.BitXorAssign, 0); }
		public TerminalNode LeftShiftArithmeticAssign() { return getToken(epScriptParser.LeftShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftArithmeticAssign() { return getToken(epScriptParser.RightShiftArithmeticAssign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(551);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PlusAssign) | (1L << MinusAssign) | (1L << MultiplyAssign) | (1L << LeftShiftArithmeticAssign) | (1L << RightShiftArithmeticAssign) | (1L << BitAndAssign) | (1L << BitXorAssign) | (1L << BitOrAssign))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode BooleanLiterl() { return getToken(epScriptParser.BooleanLiterl, 0); }
		public TerminalNode StringLiteral() { return getToken(epScriptParser.StringLiteral, 0); }
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_literal);
		try {
			setState(556);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BooleanLiterl:
				enterOuterAlt(_localctx, 1);
				{
				setState(553);
				match(BooleanLiterl);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(554);
				match(StringLiteral);
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(555);
				numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumericLiteralContext extends ParserRuleContext {
		public TerminalNode DecimalLiteral() { return getToken(epScriptParser.DecimalLiteral, 0); }
		public TerminalNode HexIntegerLiteral() { return getToken(epScriptParser.HexIntegerLiteral, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			_la = _input.LA(1);
			if ( !(_la==DecimalLiteral || _la==HexIntegerLiteral) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ReservedWordContext reservedWord() {
			return getRuleContext(ReservedWordContext.class,0);
		}
		public IdentifierNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierName; }
	}

	public final IdentifierNameContext identifierName() throws RecognitionException {
		IdentifierNameContext _localctx = new IdentifierNameContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_identifierName);
		try {
			setState(562);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(560);
				identifier();
				}
				break;
			case Import:
			case As:
			case Var:
			case Const:
			case Static:
			case Function:
			case Object:
			case L2V:
			case Once:
			case If:
			case Else:
			case For:
			case Foreach:
			case While:
			case Break:
			case Continue:
			case Return:
			case Switch:
			case Case:
			case Default:
				enterOuterAlt(_localctx, 2);
				{
				setState(561);
				reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(epScriptParser.Identifier, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(564);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReservedWordContext extends ParserRuleContext {
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public ReservedWordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reservedWord; }
	}

	public final ReservedWordContext reservedWord() throws RecognitionException {
		ReservedWordContext _localctx = new ReservedWordContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_reservedWord);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(566);
			keyword();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode Import() { return getToken(epScriptParser.Import, 0); }
		public TerminalNode As() { return getToken(epScriptParser.As, 0); }
		public TerminalNode Var() { return getToken(epScriptParser.Var, 0); }
		public TerminalNode Const() { return getToken(epScriptParser.Const, 0); }
		public TerminalNode Static() { return getToken(epScriptParser.Static, 0); }
		public TerminalNode Function() { return getToken(epScriptParser.Function, 0); }
		public TerminalNode Object() { return getToken(epScriptParser.Object, 0); }
		public TerminalNode L2V() { return getToken(epScriptParser.L2V, 0); }
		public TerminalNode Once() { return getToken(epScriptParser.Once, 0); }
		public TerminalNode If() { return getToken(epScriptParser.If, 0); }
		public TerminalNode Else() { return getToken(epScriptParser.Else, 0); }
		public TerminalNode For() { return getToken(epScriptParser.For, 0); }
		public TerminalNode Foreach() { return getToken(epScriptParser.Foreach, 0); }
		public TerminalNode While() { return getToken(epScriptParser.While, 0); }
		public TerminalNode Break() { return getToken(epScriptParser.Break, 0); }
		public TerminalNode Continue() { return getToken(epScriptParser.Continue, 0); }
		public TerminalNode Return() { return getToken(epScriptParser.Return, 0); }
		public TerminalNode Switch() { return getToken(epScriptParser.Switch, 0); }
		public TerminalNode Case() { return getToken(epScriptParser.Case, 0); }
		public TerminalNode Default() { return getToken(epScriptParser.Default, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(568);
			_la = _input.LA(1);
			if ( !(((((_la - 46)) & ~0x3f) == 0 && ((1L << (_la - 46)) & ((1L << (Import - 46)) | (1L << (As - 46)) | (1L << (Var - 46)) | (1L << (Const - 46)) | (1L << (Static - 46)) | (1L << (Function - 46)) | (1L << (Object - 46)) | (1L << (L2V - 46)) | (1L << (Once - 46)) | (1L << (If - 46)) | (1L << (Else - 46)) | (1L << (For - 46)) | (1L << (Foreach - 46)) | (1L << (While - 46)) | (1L << (Break - 46)) | (1L << (Continue - 46)) | (1L << (Return - 46)) | (1L << (Switch - 46)) | (1L << (Case - 46)) | (1L << (Default - 46)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 6:
			return dottedName_sempred((DottedNameContext)_localctx, predIndex);
		case 50:
			return singleExpression_sempred((SingleExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean dottedName_sempred(DottedNameContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean singleExpression_sempred(SingleExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 26);
		case 2:
			return precpred(_ctx, 17);
		case 3:
			return precpred(_ctx, 16);
		case 4:
			return precpred(_ctx, 15);
		case 5:
			return precpred(_ctx, 14);
		case 6:
			return precpred(_ctx, 13);
		case 7:
			return precpred(_ctx, 12);
		case 8:
			return precpred(_ctx, 11);
		case 9:
			return precpred(_ctx, 10);
		case 10:
			return precpred(_ctx, 9);
		case 11:
			return precpred(_ctx, 8);
		case 12:
			return precpred(_ctx, 7);
		case 13:
			return precpred(_ctx, 6);
		case 14:
			return precpred(_ctx, 29);
		case 15:
			return precpred(_ctx, 28);
		case 16:
			return precpred(_ctx, 27);
		case 17:
			return precpred(_ctx, 25);
		case 18:
			return precpred(_ctx, 24);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3_\u023d\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\3\2\5"+
		"\2z\n\2\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\5\4\u008e\n\4\3\5\3\5\5\5\u0092\n\5\3\5\3\5\3\6\6\6\u0097\n"+
		"\6\r\6\16\6\u0098\3\7\3\7\3\7\5\7\u009e\n\7\3\7\3\7\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\7\b\u00a8\n\b\f\b\16\b\u00ab\13\b\3\t\3\t\3\t\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\7\13\u00b7\n\13\f\13\16\13\u00ba\13\13\3\f\3\f\3\f\5\f"+
		"\u00bf\n\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3"+
		"\21\3\21\3\21\3\21\5\21\u00d1\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\5\22\u00dd\n\22\5\22\u00df\n\22\3\22\3\22\5\22\u00e3\n"+
		"\22\3\22\3\22\5\22\u00e7\n\22\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u00ef"+
		"\n\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\5\25\u00fc"+
		"\n\25\3\25\3\25\3\26\3\26\5\26\u0102\n\26\3\26\3\26\3\27\3\27\5\27\u0108"+
		"\n\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\5\31\u0114\n\31"+
		"\3\31\3\31\5\31\u0118\n\31\5\31\u011a\n\31\3\31\3\31\3\32\6\32\u011f\n"+
		"\32\r\32\16\32\u0120\3\33\3\33\3\33\3\33\5\33\u0127\n\33\3\34\3\34\3\34"+
		"\5\34\u012c\n\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\7\36\u0135\n\36\f"+
		"\36\16\36\u0138\13\36\3\36\3\36\3\37\3\37\5\37\u013e\n\37\3 \3 \3 \5 "+
		"\u0143\n \3 \3 \3!\3!\3!\3\"\3\"\5\"\u014c\n\"\3#\3#\3$\3$\3%\3%\3&\3"+
		"&\3&\3&\5&\u0158\n&\3&\3&\5&\u015c\n&\3&\3&\3\'\3\'\3\'\7\'\u0163\n\'"+
		"\f\'\16\'\u0166\13\'\3\'\3\'\5\'\u016a\n\'\3\'\5\'\u016d\n\'\3(\3(\5("+
		"\u0171\n(\3)\3)\3*\3*\5*\u0177\n*\3*\3*\3+\3+\3+\3+\5+\u017f\n+\3+\3+"+
		"\3+\3,\6,\u0185\n,\r,\16,\u0186\3-\3-\3-\3-\3.\7.\u018e\n.\f.\16.\u0191"+
		"\13.\3.\5.\u0194\n.\3.\6.\u0197\n.\r.\16.\u0198\3.\7.\u019c\n.\f.\16."+
		"\u019f\13.\3.\7.\u01a2\n.\f.\16.\u01a5\13.\3.\5.\u01a8\n.\3/\3/\3\60\3"+
		"\60\3\60\5\60\u01af\n\60\5\60\u01b1\n\60\3\60\3\60\3\61\3\61\3\61\5\61"+
		"\u01b8\n\61\7\61\u01ba\n\61\f\61\16\61\u01bd\13\61\3\62\3\62\3\63\3\63"+
		"\3\63\7\63\u01c4\n\63\f\63\16\63\u01c7\13\63\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\5\64\u01df\n\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64"+
		"\3\64\3\64\3\64\3\64\3\64\3\64\3\64\7\64\u021a\n\64\f\64\16\64\u021d\13"+
		"\64\3\65\3\65\3\65\5\65\u0222\n\65\3\65\3\65\5\65\u0226\n\65\3\65\3\65"+
		"\3\66\3\66\3\67\3\67\3\67\5\67\u022f\n\67\38\38\39\39\59\u0235\n9\3:\3"+
		":\3;\3;\3<\3<\3<\2\4\16f=\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&"+
		"(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtv\2\f\3\2\62\63\3\2EV"+
		"\3\2,.\3\2*+\3\2\35\36\3\2$\'\4\2##((\3\2\23\32\3\2\4\5\3\2\60C\2\u025f"+
		"\2y\3\2\2\2\4}\3\2\2\2\6\u008d\3\2\2\2\b\u008f\3\2\2\2\n\u0096\3\2\2\2"+
		"\f\u009a\3\2\2\2\16\u00a1\3\2\2\2\20\u00ac\3\2\2\2\22\u00af\3\2\2\2\24"+
		"\u00b2\3\2\2\2\26\u00bb\3\2\2\2\30\u00c0\3\2\2\2\32\u00c2\3\2\2\2\34\u00c4"+
		"\3\2\2\2\36\u00c7\3\2\2\2 \u00c9\3\2\2\2\"\u00ee\3\2\2\2$\u00f0\3\2\2"+
		"\2&\u00f6\3\2\2\2(\u00f9\3\2\2\2*\u00ff\3\2\2\2,\u0105\3\2\2\2.\u010b"+
		"\3\2\2\2\60\u0111\3\2\2\2\62\u011e\3\2\2\2\64\u0122\3\2\2\2\66\u0128\3"+
		"\2\2\28\u012d\3\2\2\2:\u0132\3\2\2\2<\u013d\3\2\2\2>\u013f\3\2\2\2@\u0146"+
		"\3\2\2\2B\u014b\3\2\2\2D\u014d\3\2\2\2F\u014f\3\2\2\2H\u0151\3\2\2\2J"+
		"\u0153\3\2\2\2L\u016c\3\2\2\2N\u016e\3\2\2\2P\u0172\3\2\2\2R\u0174\3\2"+
		"\2\2T\u017a\3\2\2\2V\u0184\3\2\2\2X\u0188\3\2\2\2Z\u01a7\3\2\2\2\\\u01a9"+
		"\3\2\2\2^\u01ab\3\2\2\2`\u01b4\3\2\2\2b\u01be\3\2\2\2d\u01c0\3\2\2\2f"+
		"\u01de\3\2\2\2h\u021e\3\2\2\2j\u0229\3\2\2\2l\u022e\3\2\2\2n\u0230\3\2"+
		"\2\2p\u0234\3\2\2\2r\u0236\3\2\2\2t\u0238\3\2\2\2v\u023a\3\2\2\2xz\5V"+
		",\2yx\3\2\2\2yz\3\2\2\2z{\3\2\2\2{|\7\2\2\3|\3\3\2\2\2}~\5\6\4\2~\5\3"+
		"\2\2\2\177\u008e\5\b\5\2\u0080\u008e\5\f\7\2\u0081\u008e\5\30\r\2\u0082"+
		"\u008e\5\22\n\2\u0083\u008e\5 \21\2\u0084\u008e\5\"\22\2\u0085\u008e\5"+
		".\30\2\u0086\u008e\5&\24\2\u0087\u008e\5(\25\2\u0088\u008e\5*\26\2\u0089"+
		"\u008e\5,\27\2\u008a\u008e\58\35\2\u008b\u008e\5J&\2\u008c\u008e\5\34"+
		"\17\2\u008d\177\3\2\2\2\u008d\u0080\3\2\2\2\u008d\u0081\3\2\2\2\u008d"+
		"\u0082\3\2\2\2\u008d\u0083\3\2\2\2\u008d\u0084\3\2\2\2\u008d\u0085\3\2"+
		"\2\2\u008d\u0086\3\2\2\2\u008d\u0087\3\2\2\2\u008d\u0088\3\2\2\2\u008d"+
		"\u0089\3\2\2\2\u008d\u008a\3\2\2\2\u008d\u008b\3\2\2\2\u008d\u008c\3\2"+
		"\2\2\u008e\7\3\2\2\2\u008f\u0091\7\n\2\2\u0090\u0092\5\n\6\2\u0091\u0090"+
		"\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0094\7\13\2\2"+
		"\u0094\t\3\2\2\2\u0095\u0097\5\6\4\2\u0096\u0095\3\2\2\2\u0097\u0098\3"+
		"\2\2\2\u0098\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099\13\3\2\2\2\u009a"+
		"\u009b\7\60\2\2\u009b\u009d\5\16\b\2\u009c\u009e\5\20\t\2\u009d\u009c"+
		"\3\2\2\2\u009d\u009e\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0\7\20\2\2"+
		"\u00a0\r\3\2\2\2\u00a1\u00a2\b\b\1\2\u00a2\u00a3\5r:\2\u00a3\u00a9\3\2"+
		"\2\2\u00a4\u00a5\f\4\2\2\u00a5\u00a6\7\f\2\2\u00a6\u00a8\5r:\2\u00a7\u00a4"+
		"\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa"+
		"\17\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac\u00ad\7\61\2\2\u00ad\u00ae\5r:\2"+
		"\u00ae\21\3\2\2\2\u00af\u00b0\5\24\13\2\u00b0\u00b1\7\20\2\2\u00b1\23"+
		"\3\2\2\2\u00b2\u00b3\5\36\20\2\u00b3\u00b8\5\26\f\2\u00b4\u00b5\7\16\2"+
		"\2\u00b5\u00b7\5\26\f\2\u00b6\u00b4\3\2\2\2\u00b7\u00ba\3\2\2\2\u00b8"+
		"\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\25\3\2\2\2\u00ba\u00b8\3\2\2"+
		"\2\u00bb\u00be\5\32\16\2\u00bc\u00bd\7/\2\2\u00bd\u00bf\5f\64\2\u00be"+
		"\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\27\3\2\2\2\u00c0\u00c1\7\20\2"+
		"\2\u00c1\31\3\2\2\2\u00c2\u00c3\5r:\2\u00c3\33\3\2\2\2\u00c4\u00c5\5d"+
		"\63\2\u00c5\u00c6\7\20\2\2\u00c6\35\3\2\2\2\u00c7\u00c8\t\2\2\2\u00c8"+
		"\37\3\2\2\2\u00c9\u00ca\79\2\2\u00ca\u00cb\7\b\2\2\u00cb\u00cc\5d\63\2"+
		"\u00cc\u00cd\7\t\2\2\u00cd\u00d0\5\6\4\2\u00ce\u00cf\7:\2\2\u00cf\u00d1"+
		"\5\6\4\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1!\3\2\2\2\u00d2"+
		"\u00d3\7=\2\2\u00d3\u00d4\7\b\2\2\u00d4\u00d5\5d\63\2\u00d5\u00d6\7\t"+
		"\2\2\u00d6\u00d7\5\6\4\2\u00d7\u00ef\3\2\2\2\u00d8\u00d9\7;\2\2\u00d9"+
		"\u00de\7\b\2\2\u00da\u00df\5d\63\2\u00db\u00dd\5\24\13\2\u00dc\u00db\3"+
		"\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00df\3\2\2\2\u00de\u00da\3\2\2\2\u00de"+
		"\u00dc\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e2\7\20\2\2\u00e1\u00e3\5"+
		"d\63\2\u00e2\u00e1\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4"+
		"\u00e6\7\20\2\2\u00e5\u00e7\5d\63\2\u00e6\u00e5\3\2\2\2\u00e6\u00e7\3"+
		"\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\7\t\2\2\u00e9\u00ef\5\6\4\2\u00ea"+
		"\u00eb\7<\2\2\u00eb\u00ec\5$\23\2\u00ec\u00ed\5\6\4\2\u00ed\u00ef\3\2"+
		"\2\2\u00ee\u00d2\3\2\2\2\u00ee\u00d8\3\2\2\2\u00ee\u00ea\3\2\2\2\u00ef"+
		"#\3\2\2\2\u00f0\u00f1\7\b\2\2\u00f1\u00f2\5r:\2\u00f2\u00f3\7\17\2\2\u00f3"+
		"\u00f4\5f\64\2\u00f4\u00f5\7\t\2\2\u00f5%\3\2\2\2\u00f6\u00f7\78\2\2\u00f7"+
		"\u00f8\5\6\4\2\u00f8\'\3\2\2\2\u00f9\u00fb\7?\2\2\u00fa\u00fc\5d\63\2"+
		"\u00fb\u00fa\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fe"+
		"\7\20\2\2\u00fe)\3\2\2\2\u00ff\u0101\7>\2\2\u0100\u0102\5d\63\2\u0101"+
		"\u0100\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0104\7\20"+
		"\2\2\u0104+\3\2\2\2\u0105\u0107\7@\2\2\u0106\u0108\5d\63\2\u0107\u0106"+
		"\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0109\3\2\2\2\u0109\u010a\7\20\2\2"+
		"\u010a-\3\2\2\2\u010b\u010c\7A\2\2\u010c\u010d\7\b\2\2\u010d\u010e\5d"+
		"\63\2\u010e\u010f\7\t\2\2\u010f\u0110\5\60\31\2\u0110/\3\2\2\2\u0111\u0113"+
		"\7\n\2\2\u0112\u0114\5\62\32\2\u0113\u0112\3\2\2\2\u0113\u0114\3\2\2\2"+
		"\u0114\u0119\3\2\2\2\u0115\u0117\5\66\34\2\u0116\u0118\5\62\32\2\u0117"+
		"\u0116\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011a\3\2\2\2\u0119\u0115\3\2"+
		"\2\2\u0119\u011a\3\2\2\2\u011a\u011b\3\2\2\2\u011b\u011c\7\13\2\2\u011c"+
		"\61\3\2\2\2\u011d\u011f\5\64\33\2\u011e\u011d\3\2\2\2\u011f\u0120\3\2"+
		"\2\2\u0120\u011e\3\2\2\2\u0120\u0121\3\2\2\2\u0121\63\3\2\2\2\u0122\u0123"+
		"\7B\2\2\u0123\u0124\5d\63\2\u0124\u0126\7\17\2\2\u0125\u0127\5\n\6\2\u0126"+
		"\u0125\3\2\2\2\u0126\u0127\3\2\2\2\u0127\65\3\2\2\2\u0128\u0129\7C\2\2"+
		"\u0129\u012b\7\17\2\2\u012a\u012c\5\n\6\2\u012b\u012a\3\2\2\2\u012b\u012c"+
		"\3\2\2\2\u012c\67\3\2\2\2\u012d\u012e\7\66\2\2\u012e\u012f\5r:\2\u012f"+
		"\u0130\5:\36\2\u0130\u0131\7\20\2\2\u01319\3\2\2\2\u0132\u0136\7\n\2\2"+
		"\u0133\u0135\5<\37\2\u0134\u0133\3\2\2\2\u0135\u0138\3\2\2\2\u0136\u0134"+
		"\3\2\2\2\u0136\u0137\3\2\2\2\u0137\u0139\3\2\2\2\u0138\u0136\3\2\2\2\u0139"+
		"\u013a\7\13\2\2\u013a;\3\2\2\2\u013b\u013e\5> \2\u013c\u013e\5J&\2\u013d"+
		"\u013b\3\2\2\2\u013d\u013c\3\2\2\2\u013e=\3\2\2\2\u013f\u0140\7\62\2\2"+
		"\u0140\u0142\5r:\2\u0141\u0143\5@!\2\u0142\u0141\3\2\2\2\u0142\u0143\3"+
		"\2\2\2\u0143\u0144\3\2\2\2\u0144\u0145\7\20\2\2\u0145?\3\2\2\2\u0146\u0147"+
		"\7\17\2\2\u0147\u0148\5B\"\2\u0148A\3\2\2\2\u0149\u014c\5D#\2\u014a\u014c"+
		"\5f\64\2\u014b\u0149\3\2\2\2\u014b\u014a\3\2\2\2\u014cC\3\2\2\2\u014d"+
		"\u014e\5F$\2\u014eE\3\2\2\2\u014f\u0150\5H%\2\u0150G\3\2\2\2\u0151\u0152"+
		"\t\3\2\2\u0152I\3\2\2\2\u0153\u0154\7\65\2\2\u0154\u0155\5r:\2\u0155\u0157"+
		"\7\b\2\2\u0156\u0158\5L\'\2\u0157\u0156\3\2\2\2\u0157\u0158\3\2\2\2\u0158"+
		"\u0159\3\2\2\2\u0159\u015b\7\t\2\2\u015a\u015c\5@!\2\u015b\u015a\3\2\2"+
		"\2\u015b\u015c\3\2\2\2\u015c\u015d\3\2\2\2\u015d\u015e\5R*\2\u015eK\3"+
		"\2\2\2\u015f\u0164\5N(\2\u0160\u0161\7\16\2\2\u0161\u0163\5N(\2\u0162"+
		"\u0160\3\2\2\2\u0163\u0166\3\2\2\2\u0164\u0162\3\2\2\2\u0164\u0165\3\2"+
		"\2\2\u0165\u0169\3\2\2\2\u0166\u0164\3\2\2\2\u0167\u0168\7\16\2\2\u0168"+
		"\u016a\5P)\2\u0169\u0167\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016d\3\2\2"+
		"\2\u016b\u016d\5P)\2\u016c\u015f\3\2\2\2\u016c\u016b\3\2\2\2\u016dM\3"+
		"\2\2\2\u016e\u0170\5\32\16\2\u016f\u0171\5@!\2\u0170\u016f\3\2\2\2\u0170"+
		"\u0171\3\2\2\2\u0171O\3\2\2\2\u0172\u0173\5f\64\2\u0173Q\3\2\2\2\u0174"+
		"\u0176\7\n\2\2\u0175\u0177\5V,\2\u0176\u0175\3\2\2\2\u0176\u0177\3\2\2"+
		"\2\u0177\u0178\3\2\2\2\u0178\u0179\7\13\2\2\u0179S\3\2\2\2\u017a\u017b"+
		"\7\65\2\2\u017b\u017c\5r:\2\u017c\u017e\7\b\2\2\u017d\u017f\5L\'\2\u017e"+
		"\u017d\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u0181\7\t"+
		"\2\2\u0181\u0182\7\20\2\2\u0182U\3\2\2\2\u0183\u0185\5\4\3\2\u0184\u0183"+
		"\3\2\2\2\u0185\u0186\3\2\2\2\u0186\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187"+
		"W\3\2\2\2\u0188\u0189\7\6\2\2\u0189\u018a\5Z.\2\u018a\u018b\7\7\2\2\u018b"+
		"Y\3\2\2\2\u018c\u018e\7\16\2\2\u018d\u018c\3\2\2\2\u018e\u0191\3\2\2\2"+
		"\u018f\u018d\3\2\2\2\u018f\u0190\3\2\2\2\u0190\u0193\3\2\2\2\u0191\u018f"+
		"\3\2\2\2\u0192\u0194\5\\/\2\u0193\u0192\3\2\2\2\u0193\u0194\3\2\2\2\u0194"+
		"\u019d\3\2\2\2\u0195\u0197\7\16\2\2\u0196\u0195\3\2\2\2\u0197\u0198\3"+
		"\2\2\2\u0198\u0196\3\2\2\2\u0198\u0199\3\2\2\2\u0199\u019a\3\2\2\2\u019a"+
		"\u019c\5\\/\2\u019b\u0196\3\2\2\2\u019c\u019f\3\2\2\2\u019d\u019b\3\2"+
		"\2\2\u019d\u019e\3\2\2\2\u019e\u01a3\3\2\2\2\u019f\u019d\3\2\2\2\u01a0"+
		"\u01a2\7\16\2\2\u01a1\u01a0\3\2\2\2\u01a2\u01a5\3\2\2\2\u01a3\u01a1\3"+
		"\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a8\3\2\2\2\u01a5\u01a3\3\2\2\2\u01a6"+
		"\u01a8\3\2\2\2\u01a7\u018f\3\2\2\2\u01a7\u01a6\3\2\2\2\u01a8[\3\2\2\2"+
		"\u01a9\u01aa\5f\64\2\u01aa]\3\2\2\2\u01ab\u01b0\7\b\2\2\u01ac\u01ae\5"+
		"`\61\2\u01ad\u01af\7\16\2\2\u01ae\u01ad\3\2\2\2\u01ae\u01af\3\2\2\2\u01af"+
		"\u01b1\3\2\2\2\u01b0\u01ac\3\2\2\2\u01b0\u01b1\3\2\2\2\u01b1\u01b2\3\2"+
		"\2\2\u01b2\u01b3\7\t\2\2\u01b3_\3\2\2\2\u01b4\u01bb\5b\62\2\u01b5\u01b7"+
		"\7\16\2\2\u01b6\u01b8\5b\62\2\u01b7\u01b6\3\2\2\2\u01b7\u01b8\3\2\2\2"+
		"\u01b8\u01ba\3\2\2\2\u01b9\u01b5\3\2\2\2\u01ba\u01bd\3\2\2\2\u01bb\u01b9"+
		"\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bca\3\2\2\2\u01bd\u01bb\3\2\2\2\u01be"+
		"\u01bf\5f\64\2\u01bfc\3\2\2\2\u01c0\u01c5\5f\64\2\u01c1\u01c2\7\16\2\2"+
		"\u01c2\u01c4\5f\64\2\u01c3\u01c1\3\2\2\2\u01c4\u01c7\3\2\2\2\u01c5\u01c3"+
		"\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6e\3\2\2\2\u01c7\u01c5\3\2\2\2\u01c8"+
		"\u01c9\b\64\1\2\u01c9\u01df\5h\65\2\u01ca\u01cb\7\21\2\2\u01cb\u01df\5"+
		"f\64\31\u01cc\u01cd\7\22\2\2\u01cd\u01df\5f\64\30\u01ce\u01cf\7*\2\2\u01cf"+
		"\u01df\5f\64\27\u01d0\u01d1\7+\2\2\u01d1\u01df\5f\64\26\u01d2\u01d3\7"+
		"\37\2\2\u01d3\u01df\5f\64\25\u01d4\u01d5\7)\2\2\u01d5\u01df\5f\64\24\u01d6"+
		"\u01df\7D\2\2\u01d7\u01df\5r:\2\u01d8\u01df\5l\67\2\u01d9\u01df\5X-\2"+
		"\u01da\u01db\7\b\2\2\u01db\u01dc\5d\63\2\u01dc\u01dd\7\t\2\2\u01dd\u01df"+
		"\3\2\2\2\u01de\u01c8\3\2\2\2\u01de\u01ca\3\2\2\2\u01de\u01cc\3\2\2\2\u01de"+
		"\u01ce\3\2\2\2\u01de\u01d0\3\2\2\2\u01de\u01d2\3\2\2\2\u01de\u01d4\3\2"+
		"\2\2\u01de\u01d6\3\2\2\2\u01de\u01d7\3\2\2\2\u01de\u01d8\3\2\2\2\u01de"+
		"\u01d9\3\2\2\2\u01de\u01da\3\2\2\2\u01df\u021b\3\2\2\2\u01e0\u01e1\f\34"+
		"\2\2\u01e1\u01e2\7\r\2\2\u01e2\u01e3\5f\64\2\u01e3\u01e4\7\17\2\2\u01e4"+
		"\u01e5\5f\64\35\u01e5\u021a\3\2\2\2\u01e6\u01e7\f\23\2\2\u01e7\u01e8\t"+
		"\4\2\2\u01e8\u021a\5f\64\24\u01e9\u01ea\f\22\2\2\u01ea\u01eb\t\5\2\2\u01eb"+
		"\u021a\5f\64\23\u01ec\u01ed\f\21\2\2\u01ed\u01ee\t\6\2\2\u01ee\u021a\5"+
		"f\64\22\u01ef\u01f0\f\20\2\2\u01f0\u01f1\t\7\2\2\u01f1\u021a\5f\64\21"+
		"\u01f2\u01f3\f\17\2\2\u01f3\u01f4\t\b\2\2\u01f4\u021a\5f\64\20\u01f5\u01f6"+
		"\f\16\2\2\u01f6\u01f7\7 \2\2\u01f7\u021a\5f\64\17\u01f8\u01f9\f\r\2\2"+
		"\u01f9\u01fa\7\"\2\2\u01fa\u021a\5f\64\16\u01fb\u01fc\f\f\2\2\u01fc\u01fd"+
		"\7!\2\2\u01fd\u021a\5f\64\r\u01fe\u01ff\f\13\2\2\u01ff\u0200\7\33\2\2"+
		"\u0200\u021a\5f\64\f\u0201\u0202\f\n\2\2\u0202\u0203\7\34\2\2\u0203\u021a"+
		"\5f\64\13\u0204\u0205\f\t\2\2\u0205\u0206\7/\2\2\u0206\u021a\5f\64\n\u0207"+
		"\u0208\f\b\2\2\u0208\u0209\5j\66\2\u0209\u020a\5f\64\t\u020a\u021a\3\2"+
		"\2\2\u020b\u020c\f\37\2\2\u020c\u020d\7\6\2\2\u020d\u020e\5d\63\2\u020e"+
		"\u020f\7\7\2\2\u020f\u021a\3\2\2\2\u0210\u0211\f\36\2\2\u0211\u0212\7"+
		"\f\2\2\u0212\u021a\5r:\2\u0213\u0214\f\35\2\2\u0214\u021a\5^\60\2\u0215"+
		"\u0216\f\33\2\2\u0216\u021a\7\21\2\2\u0217\u0218\f\32\2\2\u0218\u021a"+
		"\7\22\2\2\u0219\u01e0\3\2\2\2\u0219\u01e6\3\2\2\2\u0219\u01e9\3\2\2\2"+
		"\u0219\u01ec\3\2\2\2\u0219\u01ef\3\2\2\2\u0219\u01f2\3\2\2\2\u0219\u01f5"+
		"\3\2\2\2\u0219\u01f8\3\2\2\2\u0219\u01fb\3\2\2\2\u0219\u01fe\3\2\2\2\u0219"+
		"\u0201\3\2\2\2\u0219\u0204\3\2\2\2\u0219\u0207\3\2\2\2\u0219\u020b\3\2"+
		"\2\2\u0219\u0210\3\2\2\2\u0219\u0213\3\2\2\2\u0219\u0215\3\2\2\2\u0219"+
		"\u0217\3\2\2\2\u021a\u021d\3\2\2\2\u021b\u0219\3\2\2\2\u021b\u021c\3\2"+
		"\2\2\u021cg\3\2\2\2\u021d\u021b\3\2\2\2\u021e\u021f\7\65\2\2\u021f\u0221"+
		"\7\b\2\2\u0220\u0222\5L\'\2\u0221\u0220\3\2\2\2\u0221\u0222\3\2\2\2\u0222"+
		"\u0223\3\2\2\2\u0223\u0225\7\t\2\2\u0224\u0226\5@!\2\u0225\u0224\3\2\2"+
		"\2\u0225\u0226\3\2\2\2\u0226\u0227\3\2\2\2\u0227\u0228\5R*\2\u0228i\3"+
		"\2\2\2\u0229\u022a\t\t\2\2\u022ak\3\2\2\2\u022b\u022f\7\3\2\2\u022c\u022f"+
		"\7X\2\2\u022d\u022f\5n8\2\u022e\u022b\3\2\2\2\u022e\u022c\3\2\2\2\u022e"+
		"\u022d\3\2\2\2\u022fm\3\2\2\2\u0230\u0231\t\n\2\2\u0231o\3\2\2\2\u0232"+
		"\u0235\5r:\2\u0233\u0235\5t;\2\u0234\u0232\3\2\2\2\u0234\u0233\3\2\2\2"+
		"\u0235q\3\2\2\2\u0236\u0237\7W\2\2\u0237s\3\2\2\2\u0238\u0239\5v<\2\u0239"+
		"u\3\2\2\2\u023a\u023b\t\13\2\2\u023bw\3\2\2\28y\u008d\u0091\u0098\u009d"+
		"\u00a9\u00b8\u00be\u00d0\u00dc\u00de\u00e2\u00e6\u00ee\u00fb\u0101\u0107"+
		"\u0113\u0117\u0119\u0120\u0126\u012b\u0136\u013d\u0142\u014b\u0157\u015b"+
		"\u0164\u0169\u016c\u0170\u0176\u017e\u0186\u018f\u0193\u0198\u019d\u01a3"+
		"\u01a7\u01ae\u01b0\u01b7\u01bb\u01c5\u01de\u0219\u021b\u0221\u0225\u022e"+
		"\u0234";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}