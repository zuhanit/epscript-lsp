// Generated from c:\Users\zuhan\Desktop\Programming\vscode-eps-server\static-keyword\epscript-language-server\server\src\grammar\lib\epScriptParser.g4 by ANTLR 4.9.2
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
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

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
		Default=65, This=66, Identifier=67, StringLiteral=68, WhiteSpaces=69, 
		LineTerminator=70, MultiLineComment=71, SingleLineComment=72, UnexpectedCharacter=73, 
		DoubleStringCharacter=74, SingleStringCharacter=75;
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
		RULE_typeAnnotation = 31, RULE_functionDeclaration = 32, RULE_formalParameterList = 33, 
		RULE_formalParameterArg = 34, RULE_lastFormalParameterArg = 35, RULE_functionBody = 36, 
		RULE_functionDefine = 37, RULE_sourceElements = 38, RULE_arrayLiteral = 39, 
		RULE_elementList = 40, RULE_arrayElement = 41, RULE_arguments = 42, RULE_argumentList = 43, 
		RULE_argument = 44, RULE_expressionSequence = 45, RULE_singleExpression = 46, 
		RULE_anonymosuFunction = 47, RULE_postfixOperator = 48, RULE_prefixOperator = 49, 
		RULE_binaryOperator = 50, RULE_numericLiteral = 51, RULE_identifierName = 52, 
		RULE_identifier = 53, RULE_reservedWord = 54, RULE_keyword = 55;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
			"dottedName", "importNamespace", "variableStatement", "variableDeclarationList", 
			"variableDeclaration", "emptyStatement", "assignAble", "expressionStatement", 
			"varModifier", "ifStatement", "iterationStatement", "foreachBlock", "onceStatement", 
			"continueStatement", "breakStatement", "returnStatement", "switchStatement", 
			"caseBlock", "caseClauses", "caseClause", "defaultClause", "objectDeclaration", 
			"objectTail", "objectElement", "objectVariableDeclaration", "typeAnnotation", 
			"functionDeclaration", "formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
			"functionBody", "functionDefine", "sourceElements", "arrayLiteral", "elementList", 
			"arrayElement", "arguments", "argumentList", "argument", "expressionSequence", 
			"singleExpression", "anonymosuFunction", "postfixOperator", "prefixOperator", 
			"binaryOperator", "numericLiteral", "identifierName", "identifier", "reservedWord", 
			"keyword"
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
			"'switch'", "'case'", "'default'", "'this'"
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
			"This", "Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", 
			"MultiLineComment", "SingleLineComment", "UnexpectedCharacter", "DoubleStringCharacter", 
			"SingleStringCharacter"
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
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(112);
				sourceElements();
				}
			}

			setState(115);
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
			setState(117);
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
			setState(133);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(119);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(120);
				importStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(121);
				emptyStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(122);
				variableStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(123);
				ifStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(124);
				iterationStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(125);
				switchStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(126);
				onceStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(127);
				continueStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(128);
				breakStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(129);
				returnStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(130);
				objectDeclaration();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(131);
				functionDeclaration();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(132);
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
			setState(135);
			match(OpenBrace);
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(136);
				statementList();
				}
			}

			setState(139);
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
			setState(142); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(141);
				statement();
				}
				}
				setState(144); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0) );
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
			setState(146);
			match(Import);
			setState(147);
			dottedName(0);
			setState(149);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==As) {
				{
				setState(148);
				importNamespace();
				}
			}

			setState(151);
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
			setState(154);
			identifier();
			}
			_ctx.stop = _input.LT(-1);
			setState(161);
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
					setState(156);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(157);
					match(Dot);
					setState(158);
					identifier();
					}
					} 
				}
				setState(163);
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
			setState(164);
			match(As);
			setState(165);
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
			setState(167);
			variableDeclarationList();
			setState(168);
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
		public TerminalNode Static() { return getToken(epScriptParser.Static, 0); }
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
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Static) {
				{
				setState(170);
				match(Static);
				}
			}

			setState(173);
			varModifier();
			setState(174);
			variableDeclaration();
			setState(179);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(175);
				match(Comma);
				setState(176);
				variableDeclaration();
				}
				}
				setState(181);
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
			setState(182);
			assignAble();
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(183);
				match(Assign);
				setState(184);
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
			setState(187);
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
			setState(189);
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
			setState(191);
			expressionSequence();
			setState(192);
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
			setState(194);
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
			setState(196);
			match(If);
			setState(197);
			match(OpenParen);
			setState(198);
			expressionSequence();
			setState(199);
			match(CloseParen);
			setState(200);
			statement();
			setState(203);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(201);
				match(Else);
				setState(202);
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
			setState(233);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case While:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(205);
				match(While);
				setState(206);
				match(OpenParen);
				setState(207);
				expressionSequence();
				setState(208);
				match(CloseParen);
				setState(209);
				statement();
				}
				break;
			case For:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(211);
				match(For);
				setState(212);
				match(OpenParen);
				setState(217);
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
					setState(213);
					expressionSequence();
					}
					break;
				case SemiColon:
				case Var:
				case Const:
				case Static:
					{
					setState(215);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Var) | (1L << Const) | (1L << Static))) != 0)) {
						{
						setState(214);
						variableDeclarationList();
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(219);
				match(SemiColon);
				setState(221);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
					{
					setState(220);
					expressionSequence();
					}
				}

				setState(223);
				match(SemiColon);
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
					{
					setState(224);
					expressionSequence();
					}
				}

				setState(227);
				match(CloseParen);
				setState(228);
				statement();
				}
				break;
			case Foreach:
				_localctx = new ForeachStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(229);
				match(Foreach);
				setState(230);
				foreachBlock();
				setState(231);
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
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode Colon() { return getToken(epScriptParser.Colon, 0); }
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public List<TerminalNode> Comma() { return getTokens(epScriptParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(epScriptParser.Comma, i);
		}
		public ForeachBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_foreachBlock; }
	}

	public final ForeachBlockContext foreachBlock() throws RecognitionException {
		ForeachBlockContext _localctx = new ForeachBlockContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_foreachBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(OpenParen);
			setState(236);
			identifier();
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(237);
				match(Comma);
				setState(238);
				identifier();
				}
				}
				setState(243);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(244);
			match(Colon);
			setState(245);
			singleExpression(0);
			setState(246);
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
			setState(248);
			match(Once);
			setState(249);
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
			setState(251);
			match(Continue);
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(252);
				expressionSequence();
				}
			}

			setState(255);
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
			setState(257);
			match(Break);
			setState(259);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(258);
				expressionSequence();
				}
			}

			setState(261);
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
			setState(263);
			match(Return);
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(264);
				expressionSequence();
				}
			}

			setState(267);
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
			setState(269);
			match(Switch);
			setState(270);
			match(OpenParen);
			setState(271);
			expressionSequence();
			setState(272);
			match(CloseParen);
			setState(273);
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
			setState(275);
			match(OpenBrace);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(276);
				caseClauses();
				}
			}

			setState(283);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(279);
				defaultClause();
				setState(281);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(280);
					caseClauses();
					}
				}

				}
			}

			setState(285);
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
			setState(288); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(287);
				caseClause();
				}
				}
				setState(290); 
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
			setState(292);
			match(Case);
			setState(293);
			expressionSequence();
			setState(294);
			match(Colon);
			setState(296);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(295);
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
			setState(298);
			match(Default);
			setState(299);
			match(Colon);
			setState(301);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(300);
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
			setState(303);
			match(Object);
			setState(304);
			identifier();
			setState(305);
			objectTail();
			setState(306);
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
			setState(308);
			match(OpenBrace);
			setState(312);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Var || _la==Function) {
				{
				{
				setState(309);
				objectElement();
				}
				}
				setState(314);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(315);
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
			setState(319);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				enterOuterAlt(_localctx, 1);
				{
				setState(317);
				objectVariableDeclaration();
				}
				break;
			case Function:
				enterOuterAlt(_localctx, 2);
				{
				setState(318);
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
			setState(321);
			match(Var);
			setState(322);
			identifier();
			setState(324);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(323);
				typeAnnotation();
				}
			}

			setState(326);
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
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
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
			setState(328);
			match(Colon);
			setState(329);
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
		enterRule(_localctx, 64, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			match(Function);
			setState(332);
			identifier();
			setState(333);
			match(OpenParen);
			setState(335);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(334);
				formalParameterList();
				}
			}

			setState(337);
			match(CloseParen);
			setState(339);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(338);
				typeAnnotation();
				}
			}

			setState(341);
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
		enterRule(_localctx, 66, RULE_formalParameterList);
		int _la;
		try {
			int _alt;
			setState(356);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				formalParameterArg();
				setState(348);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(344);
						match(Comma);
						setState(345);
						formalParameterArg();
						}
						} 
					}
					setState(350);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
				}
				setState(353);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(351);
					match(Comma);
					setState(352);
					lastFormalParameterArg();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
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
		enterRule(_localctx, 68, RULE_formalParameterArg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			assignAble();
			setState(360);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(359);
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
		enterRule(_localctx, 70, RULE_lastFormalParameterArg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
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
		enterRule(_localctx, 72, RULE_functionBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(OpenBrace);
			setState(366);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(365);
				sourceElements();
				}
			}

			setState(368);
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
		enterRule(_localctx, 74, RULE_functionDefine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			match(Function);
			setState(371);
			identifier();
			setState(372);
			match(OpenParen);
			setState(374);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(373);
				formalParameterList();
				}
			}

			setState(376);
			match(CloseParen);
			setState(377);
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
		enterRule(_localctx, 76, RULE_sourceElements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(379);
				sourceElement();
				}
				}
				setState(382); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Import) | (1L << Var) | (1L << Const) | (1L << Static) | (1L << Function) | (1L << Object) | (1L << Once) | (1L << If) | (1L << For) | (1L << Foreach) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Return) | (1L << Switch))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0) );
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
		enterRule(_localctx, 78, RULE_arrayLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(384);
			match(OpenBracket);
			setState(385);
			elementList();
			setState(386);
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
		enterRule(_localctx, 80, RULE_elementList);
		int _la;
		try {
			int _alt;
			setState(415);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(391);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(388);
						match(Comma);
						}
						} 
					}
					setState(393);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
				}
				setState(395);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
					{
					setState(394);
					arrayElement();
					}
				}

				setState(405);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(398); 
						_errHandler.sync(this);
						_la = _input.LA(1);
						do {
							{
							{
							setState(397);
							match(Comma);
							}
							}
							setState(400); 
							_errHandler.sync(this);
							_la = _input.LA(1);
						} while ( _la==Comma );
						setState(402);
						arrayElement();
						}
						} 
					}
					setState(407);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
				}
				setState(411);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(408);
					match(Comma);
					}
					}
					setState(413);
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
		enterRule(_localctx, 82, RULE_arrayElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
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
		enterRule(_localctx, 84, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(419);
			match(OpenParen);
			setState(424);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(420);
				argumentList();
				setState(422);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(421);
					match(Comma);
					}
				}

				}
			}

			setState(426);
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
		enterRule(_localctx, 86, RULE_argumentList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			argument();
			setState(435);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(429);
					match(Comma);
					setState(431);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
						{
						setState(430);
						argument();
						}
					}

					}
					} 
				}
				setState(437);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
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
		enterRule(_localctx, 88, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(438);
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
		enterRule(_localctx, 90, RULE_expressionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			singleExpression(0);
			setState(445);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(441);
				match(Comma);
				setState(442);
				singleExpression(0);
				}
				}
				setState(447);
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
	public static class StringLiteralExpressionContext extends SingleExpressionContext {
		public TerminalNode StringLiteral() { return getToken(epScriptParser.StringLiteral, 0); }
		public StringLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
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
	public static class IdentifierExpressionContext extends SingleExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
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
	public static class NumericLiteralExpressionContext extends SingleExpressionContext {
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public NumericLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
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
	public static class BinaryExpressionContext extends SingleExpressionContext {
		public List<SingleExpressionContext> singleExpression() {
			return getRuleContexts(SingleExpressionContext.class);
		}
		public SingleExpressionContext singleExpression(int i) {
			return getRuleContext(SingleExpressionContext.class,i);
		}
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public BinaryExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParanthesizedExpressionContext extends SingleExpressionContext {
		public TerminalNode OpenParen() { return getToken(epScriptParser.OpenParen, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(epScriptParser.CloseParen, 0); }
		public ParanthesizedExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PrefixExpressionContext extends SingleExpressionContext {
		public PrefixOperatorContext prefixOperator() {
			return getRuleContext(PrefixOperatorContext.class,0);
		}
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PrefixExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostfixExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public PostfixOperatorContext postfixOperator() {
			return getRuleContext(PostfixOperatorContext.class,0);
		}
		public PostfixExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BooleanLiteralExpressionContext extends SingleExpressionContext {
		public TerminalNode BooleanLiterl() { return getToken(epScriptParser.BooleanLiterl, 0); }
		public BooleanLiteralExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CallExpressionContext extends SingleExpressionContext {
		public SingleExpressionContext singleExpression() {
			return getRuleContext(SingleExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public CallExpressionContext(SingleExpressionContext ctx) { copyFrom(ctx); }
	}

	public final SingleExpressionContext singleExpression() throws RecognitionException {
		return singleExpression(0);
	}

	private SingleExpressionContext singleExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SingleExpressionContext _localctx = new SingleExpressionContext(_ctx, _parentState);
		SingleExpressionContext _prevctx = _localctx;
		int _startState = 92;
		enterRecursionRule(_localctx, 92, RULE_singleExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(463);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Function:
				{
				_localctx = new AnonymousFunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(449);
				anonymosuFunction();
				}
				break;
			case PlusPlus:
			case MinusMinus:
			case BitNot:
			case Not:
			case Plus:
			case Minus:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(450);
				prefixOperator();
				setState(451);
				singleExpression(9);
				}
				break;
			case This:
				{
				_localctx = new ThisExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(453);
				match(This);
				}
				break;
			case Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(454);
				identifier();
				}
				break;
			case BooleanLiterl:
				{
				_localctx = new BooleanLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(455);
				match(BooleanLiterl);
				}
				break;
			case StringLiteral:
				{
				_localctx = new StringLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(456);
				match(StringLiteral);
				}
				break;
			case DecimalLiteral:
			case HexIntegerLiteral:
				{
				_localctx = new NumericLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(457);
				numericLiteral();
				}
				break;
			case OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(458);
				arrayLiteral();
				}
				break;
			case OpenParen:
				{
				_localctx = new ParanthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(459);
				match(OpenParen);
				setState(460);
				expressionSequence();
				setState(461);
				match(CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(489);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(487);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
					case 1:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(465);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(466);
						match(QuestionMark);
						setState(467);
						singleExpression(0);
						setState(468);
						match(Colon);
						setState(469);
						singleExpression(12);
						}
						break;
					case 2:
						{
						_localctx = new BinaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(471);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(472);
						binaryOperator();
						setState(473);
						singleExpression(9);
						}
						break;
					case 3:
						{
						_localctx = new MemberExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(475);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(476);
						match(OpenBracket);
						setState(477);
						expressionSequence();
						setState(478);
						match(CloseBracket);
						}
						break;
					case 4:
						{
						_localctx = new MemberDotExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(480);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(481);
						match(Dot);
						setState(482);
						identifier();
						}
						break;
					case 5:
						{
						_localctx = new CallExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(483);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(484);
						arguments();
						}
						break;
					case 6:
						{
						_localctx = new PostfixExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_singleExpression);
						setState(485);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(486);
						postfixOperator();
						}
						break;
					}
					} 
				}
				setState(491);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
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
		enterRule(_localctx, 94, RULE_anonymosuFunction);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(492);
			match(Function);
			setState(493);
			match(OpenParen);
			setState(495);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BooleanLiterl) | (1L << DecimalLiteral) | (1L << HexIntegerLiteral) | (1L << OpenBracket) | (1L << OpenParen) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus) | (1L << Function))) != 0) || ((((_la - 66)) & ~0x3f) == 0 && ((1L << (_la - 66)) & ((1L << (This - 66)) | (1L << (Identifier - 66)) | (1L << (StringLiteral - 66)))) != 0)) {
				{
				setState(494);
				formalParameterList();
				}
			}

			setState(497);
			match(CloseParen);
			setState(499);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(498);
				typeAnnotation();
				}
			}

			setState(501);
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

	public static class PostfixOperatorContext extends ParserRuleContext {
		public TerminalNode PlusPlus() { return getToken(epScriptParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(epScriptParser.MinusMinus, 0); }
		public PostfixOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixOperator; }
	}

	public final PostfixOperatorContext postfixOperator() throws RecognitionException {
		PostfixOperatorContext _localctx = new PostfixOperatorContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_postfixOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(503);
			_la = _input.LA(1);
			if ( !(_la==PlusPlus || _la==MinusMinus) ) {
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

	public static class PrefixOperatorContext extends ParserRuleContext {
		public TerminalNode PlusPlus() { return getToken(epScriptParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(epScriptParser.MinusMinus, 0); }
		public TerminalNode Plus() { return getToken(epScriptParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(epScriptParser.Minus, 0); }
		public TerminalNode BitNot() { return getToken(epScriptParser.BitNot, 0); }
		public TerminalNode Not() { return getToken(epScriptParser.Not, 0); }
		public PrefixOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixOperator; }
	}

	public final PrefixOperatorContext prefixOperator() throws RecognitionException {
		PrefixOperatorContext _localctx = new PrefixOperatorContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_prefixOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(505);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PlusPlus) | (1L << MinusMinus) | (1L << BitNot) | (1L << Not) | (1L << Plus) | (1L << Minus))) != 0)) ) {
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

	public static class BinaryOperatorContext extends ParserRuleContext {
		public TerminalNode Multiply() { return getToken(epScriptParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(epScriptParser.Divide, 0); }
		public TerminalNode Modulus() { return getToken(epScriptParser.Modulus, 0); }
		public TerminalNode Plus() { return getToken(epScriptParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(epScriptParser.Minus, 0); }
		public TerminalNode LessThan() { return getToken(epScriptParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(epScriptParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(epScriptParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(epScriptParser.GreaterThanEquals, 0); }
		public TerminalNode Equals() { return getToken(epScriptParser.Equals, 0); }
		public TerminalNode NotEquals() { return getToken(epScriptParser.NotEquals, 0); }
		public TerminalNode BitAnd() { return getToken(epScriptParser.BitAnd, 0); }
		public TerminalNode BitXOr() { return getToken(epScriptParser.BitXOr, 0); }
		public TerminalNode BitOr() { return getToken(epScriptParser.BitOr, 0); }
		public TerminalNode LeftShiftArithmetic() { return getToken(epScriptParser.LeftShiftArithmetic, 0); }
		public TerminalNode RightShiftArithmetic() { return getToken(epScriptParser.RightShiftArithmetic, 0); }
		public TerminalNode And() { return getToken(epScriptParser.And, 0); }
		public TerminalNode Or() { return getToken(epScriptParser.Or, 0); }
		public TerminalNode Assign() { return getToken(epScriptParser.Assign, 0); }
		public TerminalNode MultiplyAssign() { return getToken(epScriptParser.MultiplyAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(epScriptParser.PlusAssign, 0); }
		public TerminalNode BitOrAssign() { return getToken(epScriptParser.BitOrAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(epScriptParser.MinusAssign, 0); }
		public TerminalNode BitAndAssign() { return getToken(epScriptParser.BitAndAssign, 0); }
		public TerminalNode BitXorAssign() { return getToken(epScriptParser.BitXorAssign, 0); }
		public TerminalNode LeftShiftArithmeticAssign() { return getToken(epScriptParser.LeftShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftArithmeticAssign() { return getToken(epScriptParser.RightShiftArithmeticAssign, 0); }
		public BinaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryOperator; }
	}

	public final BinaryOperatorContext binaryOperator() throws RecognitionException {
		BinaryOperatorContext _localctx = new BinaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_binaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(507);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << PlusAssign) | (1L << MinusAssign) | (1L << MultiplyAssign) | (1L << LeftShiftArithmeticAssign) | (1L << RightShiftArithmeticAssign) | (1L << BitAndAssign) | (1L << BitXorAssign) | (1L << BitOrAssign) | (1L << And) | (1L << Or) | (1L << LeftShiftArithmetic) | (1L << RightShiftArithmetic) | (1L << BitAnd) | (1L << BitOr) | (1L << BitXOr) | (1L << Equals) | (1L << LessThanEquals) | (1L << GreaterThanEquals) | (1L << LessThan) | (1L << MoreThan) | (1L << NotEquals) | (1L << Plus) | (1L << Minus) | (1L << Multiply) | (1L << Divide) | (1L << Modulus) | (1L << Assign))) != 0)) ) {
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
		enterRule(_localctx, 102, RULE_numericLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(509);
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
		enterRule(_localctx, 104, RULE_identifierName);
		try {
			setState(513);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(511);
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
				setState(512);
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
		enterRule(_localctx, 106, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
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
		enterRule(_localctx, 108, RULE_reservedWord);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(517);
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
		enterRule(_localctx, 110, RULE_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(519);
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
		case 46:
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
			return precpred(_ctx, 11);
		case 2:
			return precpred(_ctx, 8);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 13);
		case 5:
			return precpred(_ctx, 12);
		case 6:
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3M\u020c\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\3\2\5\2t\n\2\3\2\3\2\3\3"+
		"\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u0088"+
		"\n\4\3\5\3\5\5\5\u008c\n\5\3\5\3\5\3\6\6\6\u0091\n\6\r\6\16\6\u0092\3"+
		"\7\3\7\3\7\5\7\u0098\n\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00a2\n\b"+
		"\f\b\16\b\u00a5\13\b\3\t\3\t\3\t\3\n\3\n\3\n\3\13\5\13\u00ae\n\13\3\13"+
		"\3\13\3\13\3\13\7\13\u00b4\n\13\f\13\16\13\u00b7\13\13\3\f\3\f\3\f\5\f"+
		"\u00bc\n\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3"+
		"\21\3\21\3\21\3\21\5\21\u00ce\n\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\22\3\22\3\22\5\22\u00da\n\22\5\22\u00dc\n\22\3\22\3\22\5\22\u00e0\n"+
		"\22\3\22\3\22\5\22\u00e4\n\22\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u00ec"+
		"\n\22\3\23\3\23\3\23\3\23\7\23\u00f2\n\23\f\23\16\23\u00f5\13\23\3\23"+
		"\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\5\25\u0100\n\25\3\25\3\25\3\26"+
		"\3\26\5\26\u0106\n\26\3\26\3\26\3\27\3\27\5\27\u010c\n\27\3\27\3\27\3"+
		"\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\5\31\u0118\n\31\3\31\3\31\5\31"+
		"\u011c\n\31\5\31\u011e\n\31\3\31\3\31\3\32\6\32\u0123\n\32\r\32\16\32"+
		"\u0124\3\33\3\33\3\33\3\33\5\33\u012b\n\33\3\34\3\34\3\34\5\34\u0130\n"+
		"\34\3\35\3\35\3\35\3\35\3\35\3\36\3\36\7\36\u0139\n\36\f\36\16\36\u013c"+
		"\13\36\3\36\3\36\3\37\3\37\5\37\u0142\n\37\3 \3 \3 \5 \u0147\n \3 \3 "+
		"\3!\3!\3!\3\"\3\"\3\"\3\"\5\"\u0152\n\"\3\"\3\"\5\"\u0156\n\"\3\"\3\""+
		"\3#\3#\3#\7#\u015d\n#\f#\16#\u0160\13#\3#\3#\5#\u0164\n#\3#\5#\u0167\n"+
		"#\3$\3$\5$\u016b\n$\3%\3%\3&\3&\5&\u0171\n&\3&\3&\3\'\3\'\3\'\3\'\5\'"+
		"\u0179\n\'\3\'\3\'\3\'\3(\6(\u017f\n(\r(\16(\u0180\3)\3)\3)\3)\3*\7*\u0188"+
		"\n*\f*\16*\u018b\13*\3*\5*\u018e\n*\3*\6*\u0191\n*\r*\16*\u0192\3*\7*"+
		"\u0196\n*\f*\16*\u0199\13*\3*\7*\u019c\n*\f*\16*\u019f\13*\3*\5*\u01a2"+
		"\n*\3+\3+\3,\3,\3,\5,\u01a9\n,\5,\u01ab\n,\3,\3,\3-\3-\3-\5-\u01b2\n-"+
		"\7-\u01b4\n-\f-\16-\u01b7\13-\3.\3.\3/\3/\3/\7/\u01be\n/\f/\16/\u01c1"+
		"\13/\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60"+
		"\3\60\3\60\5\60\u01d2\n\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60"+
		"\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\7\60"+
		"\u01ea\n\60\f\60\16\60\u01ed\13\60\3\61\3\61\3\61\5\61\u01f2\n\61\3\61"+
		"\3\61\5\61\u01f6\n\61\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3\65"+
		"\3\66\3\66\5\66\u0204\n\66\3\67\3\67\38\38\39\39\39\2\4\16^:\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\"+
		"^`bdfhjlnp\2\b\3\2\62\63\3\2\21\22\5\2\21\22\37\37)+\5\2\23\36 (*/\3\2"+
		"\4\5\3\2\60C\2\u0221\2s\3\2\2\2\4w\3\2\2\2\6\u0087\3\2\2\2\b\u0089\3\2"+
		"\2\2\n\u0090\3\2\2\2\f\u0094\3\2\2\2\16\u009b\3\2\2\2\20\u00a6\3\2\2\2"+
		"\22\u00a9\3\2\2\2\24\u00ad\3\2\2\2\26\u00b8\3\2\2\2\30\u00bd\3\2\2\2\32"+
		"\u00bf\3\2\2\2\34\u00c1\3\2\2\2\36\u00c4\3\2\2\2 \u00c6\3\2\2\2\"\u00eb"+
		"\3\2\2\2$\u00ed\3\2\2\2&\u00fa\3\2\2\2(\u00fd\3\2\2\2*\u0103\3\2\2\2,"+
		"\u0109\3\2\2\2.\u010f\3\2\2\2\60\u0115\3\2\2\2\62\u0122\3\2\2\2\64\u0126"+
		"\3\2\2\2\66\u012c\3\2\2\28\u0131\3\2\2\2:\u0136\3\2\2\2<\u0141\3\2\2\2"+
		">\u0143\3\2\2\2@\u014a\3\2\2\2B\u014d\3\2\2\2D\u0166\3\2\2\2F\u0168\3"+
		"\2\2\2H\u016c\3\2\2\2J\u016e\3\2\2\2L\u0174\3\2\2\2N\u017e\3\2\2\2P\u0182"+
		"\3\2\2\2R\u01a1\3\2\2\2T\u01a3\3\2\2\2V\u01a5\3\2\2\2X\u01ae\3\2\2\2Z"+
		"\u01b8\3\2\2\2\\\u01ba\3\2\2\2^\u01d1\3\2\2\2`\u01ee\3\2\2\2b\u01f9\3"+
		"\2\2\2d\u01fb\3\2\2\2f\u01fd\3\2\2\2h\u01ff\3\2\2\2j\u0203\3\2\2\2l\u0205"+
		"\3\2\2\2n\u0207\3\2\2\2p\u0209\3\2\2\2rt\5N(\2sr\3\2\2\2st\3\2\2\2tu\3"+
		"\2\2\2uv\7\2\2\3v\3\3\2\2\2wx\5\6\4\2x\5\3\2\2\2y\u0088\5\b\5\2z\u0088"+
		"\5\f\7\2{\u0088\5\30\r\2|\u0088\5\22\n\2}\u0088\5 \21\2~\u0088\5\"\22"+
		"\2\177\u0088\5.\30\2\u0080\u0088\5&\24\2\u0081\u0088\5(\25\2\u0082\u0088"+
		"\5*\26\2\u0083\u0088\5,\27\2\u0084\u0088\58\35\2\u0085\u0088\5B\"\2\u0086"+
		"\u0088\5\34\17\2\u0087y\3\2\2\2\u0087z\3\2\2\2\u0087{\3\2\2\2\u0087|\3"+
		"\2\2\2\u0087}\3\2\2\2\u0087~\3\2\2\2\u0087\177\3\2\2\2\u0087\u0080\3\2"+
		"\2\2\u0087\u0081\3\2\2\2\u0087\u0082\3\2\2\2\u0087\u0083\3\2\2\2\u0087"+
		"\u0084\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0086\3\2\2\2\u0088\7\3\2\2\2"+
		"\u0089\u008b\7\n\2\2\u008a\u008c\5\n\6\2\u008b\u008a\3\2\2\2\u008b\u008c"+
		"\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\7\13\2\2\u008e\t\3\2\2\2\u008f"+
		"\u0091\5\6\4\2\u0090\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0090\3\2"+
		"\2\2\u0092\u0093\3\2\2\2\u0093\13\3\2\2\2\u0094\u0095\7\60\2\2\u0095\u0097"+
		"\5\16\b\2\u0096\u0098\5\20\t\2\u0097\u0096\3\2\2\2\u0097\u0098\3\2\2\2"+
		"\u0098\u0099\3\2\2\2\u0099\u009a\7\20\2\2\u009a\r\3\2\2\2\u009b\u009c"+
		"\b\b\1\2\u009c\u009d\5l\67\2\u009d\u00a3\3\2\2\2\u009e\u009f\f\4\2\2\u009f"+
		"\u00a0\7\f\2\2\u00a0\u00a2\5l\67\2\u00a1\u009e\3\2\2\2\u00a2\u00a5\3\2"+
		"\2\2\u00a3\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\17\3\2\2\2\u00a5\u00a3"+
		"\3\2\2\2\u00a6\u00a7\7\61\2\2\u00a7\u00a8\5l\67\2\u00a8\21\3\2\2\2\u00a9"+
		"\u00aa\5\24\13\2\u00aa\u00ab\7\20\2\2\u00ab\23\3\2\2\2\u00ac\u00ae\7\64"+
		"\2\2\u00ad\u00ac\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00af\3\2\2\2\u00af"+
		"\u00b0\5\36\20\2\u00b0\u00b5\5\26\f\2\u00b1\u00b2\7\16\2\2\u00b2\u00b4"+
		"\5\26\f\2\u00b3\u00b1\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5\u00b3\3\2\2\2"+
		"\u00b5\u00b6\3\2\2\2\u00b6\25\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8\u00bb"+
		"\5\32\16\2\u00b9\u00ba\7/\2\2\u00ba\u00bc\5^\60\2\u00bb\u00b9\3\2\2\2"+
		"\u00bb\u00bc\3\2\2\2\u00bc\27\3\2\2\2\u00bd\u00be\7\20\2\2\u00be\31\3"+
		"\2\2\2\u00bf\u00c0\5l\67\2\u00c0\33\3\2\2\2\u00c1\u00c2\5\\/\2\u00c2\u00c3"+
		"\7\20\2\2\u00c3\35\3\2\2\2\u00c4\u00c5\t\2\2\2\u00c5\37\3\2\2\2\u00c6"+
		"\u00c7\79\2\2\u00c7\u00c8\7\b\2\2\u00c8\u00c9\5\\/\2\u00c9\u00ca\7\t\2"+
		"\2\u00ca\u00cd\5\6\4\2\u00cb\u00cc\7:\2\2\u00cc\u00ce\5\6\4\2\u00cd\u00cb"+
		"\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce!\3\2\2\2\u00cf\u00d0\7=\2\2\u00d0\u00d1"+
		"\7\b\2\2\u00d1\u00d2\5\\/\2\u00d2\u00d3\7\t\2\2\u00d3\u00d4\5\6\4\2\u00d4"+
		"\u00ec\3\2\2\2\u00d5\u00d6\7;\2\2\u00d6\u00db\7\b\2\2\u00d7\u00dc\5\\"+
		"/\2\u00d8\u00da\5\24\13\2\u00d9\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da"+
		"\u00dc\3\2\2\2\u00db\u00d7\3\2\2\2\u00db\u00d9\3\2\2\2\u00dc\u00dd\3\2"+
		"\2\2\u00dd\u00df\7\20\2\2\u00de\u00e0\5\\/\2\u00df\u00de\3\2\2\2\u00df"+
		"\u00e0\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e3\7\20\2\2\u00e2\u00e4\5"+
		"\\/\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5"+
		"\u00e6\7\t\2\2\u00e6\u00ec\5\6\4\2\u00e7\u00e8\7<\2\2\u00e8\u00e9\5$\23"+
		"\2\u00e9\u00ea\5\6\4\2\u00ea\u00ec\3\2\2\2\u00eb\u00cf\3\2\2\2\u00eb\u00d5"+
		"\3\2\2\2\u00eb\u00e7\3\2\2\2\u00ec#\3\2\2\2\u00ed\u00ee\7\b\2\2\u00ee"+
		"\u00f3\5l\67\2\u00ef\u00f0\7\16\2\2\u00f0\u00f2\5l\67\2\u00f1\u00ef\3"+
		"\2\2\2\u00f2\u00f5\3\2\2\2\u00f3\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4"+
		"\u00f6\3\2\2\2\u00f5\u00f3\3\2\2\2\u00f6\u00f7\7\17\2\2\u00f7\u00f8\5"+
		"^\60\2\u00f8\u00f9\7\t\2\2\u00f9%\3\2\2\2\u00fa\u00fb\78\2\2\u00fb\u00fc"+
		"\5\6\4\2\u00fc\'\3\2\2\2\u00fd\u00ff\7?\2\2\u00fe\u0100\5\\/\2\u00ff\u00fe"+
		"\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0101\3\2\2\2\u0101\u0102\7\20\2\2"+
		"\u0102)\3\2\2\2\u0103\u0105\7>\2\2\u0104\u0106\5\\/\2\u0105\u0104\3\2"+
		"\2\2\u0105\u0106\3\2\2\2\u0106\u0107\3\2\2\2\u0107\u0108\7\20\2\2\u0108"+
		"+\3\2\2\2\u0109\u010b\7@\2\2\u010a\u010c\5\\/\2\u010b\u010a\3\2\2\2\u010b"+
		"\u010c\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u010e\7\20\2\2\u010e-\3\2\2\2"+
		"\u010f\u0110\7A\2\2\u0110\u0111\7\b\2\2\u0111\u0112\5\\/\2\u0112\u0113"+
		"\7\t\2\2\u0113\u0114\5\60\31\2\u0114/\3\2\2\2\u0115\u0117\7\n\2\2\u0116"+
		"\u0118\5\62\32\2\u0117\u0116\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u011d\3"+
		"\2\2\2\u0119\u011b\5\66\34\2\u011a\u011c\5\62\32\2\u011b\u011a\3\2\2\2"+
		"\u011b\u011c\3\2\2\2\u011c\u011e\3\2\2\2\u011d\u0119\3\2\2\2\u011d\u011e"+
		"\3\2\2\2\u011e\u011f\3\2\2\2\u011f\u0120\7\13\2\2\u0120\61\3\2\2\2\u0121"+
		"\u0123\5\64\33\2\u0122\u0121\3\2\2\2\u0123\u0124\3\2\2\2\u0124\u0122\3"+
		"\2\2\2\u0124\u0125\3\2\2\2\u0125\63\3\2\2\2\u0126\u0127\7B\2\2\u0127\u0128"+
		"\5\\/\2\u0128\u012a\7\17\2\2\u0129\u012b\5\n\6\2\u012a\u0129\3\2\2\2\u012a"+
		"\u012b\3\2\2\2\u012b\65\3\2\2\2\u012c\u012d\7C\2\2\u012d\u012f\7\17\2"+
		"\2\u012e\u0130\5\n\6\2\u012f\u012e\3\2\2\2\u012f\u0130\3\2\2\2\u0130\67"+
		"\3\2\2\2\u0131\u0132\7\66\2\2\u0132\u0133\5l\67\2\u0133\u0134\5:\36\2"+
		"\u0134\u0135\7\20\2\2\u01359\3\2\2\2\u0136\u013a\7\n\2\2\u0137\u0139\5"+
		"<\37\2\u0138\u0137\3\2\2\2\u0139\u013c\3\2\2\2\u013a\u0138\3\2\2\2\u013a"+
		"\u013b\3\2\2\2\u013b\u013d\3\2\2\2\u013c\u013a\3\2\2\2\u013d\u013e\7\13"+
		"\2\2\u013e;\3\2\2\2\u013f\u0142\5> \2\u0140\u0142\5B\"\2\u0141\u013f\3"+
		"\2\2\2\u0141\u0140\3\2\2\2\u0142=\3\2\2\2\u0143\u0144\7\62\2\2\u0144\u0146"+
		"\5l\67\2\u0145\u0147\5@!\2\u0146\u0145\3\2\2\2\u0146\u0147\3\2\2\2\u0147"+
		"\u0148\3\2\2\2\u0148\u0149\7\20\2\2\u0149?\3\2\2\2\u014a\u014b\7\17\2"+
		"\2\u014b\u014c\5^\60\2\u014cA\3\2\2\2\u014d\u014e\7\65\2\2\u014e\u014f"+
		"\5l\67\2\u014f\u0151\7\b\2\2\u0150\u0152\5D#\2\u0151\u0150\3\2\2\2\u0151"+
		"\u0152\3\2\2\2\u0152\u0153\3\2\2\2\u0153\u0155\7\t\2\2\u0154\u0156\5@"+
		"!\2\u0155\u0154\3\2\2\2\u0155\u0156\3\2\2\2\u0156\u0157\3\2\2\2\u0157"+
		"\u0158\5J&\2\u0158C\3\2\2\2\u0159\u015e\5F$\2\u015a\u015b\7\16\2\2\u015b"+
		"\u015d\5F$\2\u015c\u015a\3\2\2\2\u015d\u0160\3\2\2\2\u015e\u015c\3\2\2"+
		"\2\u015e\u015f\3\2\2\2\u015f\u0163\3\2\2\2\u0160\u015e\3\2\2\2\u0161\u0162"+
		"\7\16\2\2\u0162\u0164\5H%\2\u0163\u0161\3\2\2\2\u0163\u0164\3\2\2\2\u0164"+
		"\u0167\3\2\2\2\u0165\u0167\5H%\2\u0166\u0159\3\2\2\2\u0166\u0165\3\2\2"+
		"\2\u0167E\3\2\2\2\u0168\u016a\5\32\16\2\u0169\u016b\5@!\2\u016a\u0169"+
		"\3\2\2\2\u016a\u016b\3\2\2\2\u016bG\3\2\2\2\u016c\u016d\5^\60\2\u016d"+
		"I\3\2\2\2\u016e\u0170\7\n\2\2\u016f\u0171\5N(\2\u0170\u016f\3\2\2\2\u0170"+
		"\u0171\3\2\2\2\u0171\u0172\3\2\2\2\u0172\u0173\7\13\2\2\u0173K\3\2\2\2"+
		"\u0174\u0175\7\65\2\2\u0175\u0176\5l\67\2\u0176\u0178\7\b\2\2\u0177\u0179"+
		"\5D#\2\u0178\u0177\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u017a\3\2\2\2\u017a"+
		"\u017b\7\t\2\2\u017b\u017c\7\20\2\2\u017cM\3\2\2\2\u017d\u017f\5\4\3\2"+
		"\u017e\u017d\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u017e\3\2\2\2\u0180\u0181"+
		"\3\2\2\2\u0181O\3\2\2\2\u0182\u0183\7\6\2\2\u0183\u0184\5R*\2\u0184\u0185"+
		"\7\7\2\2\u0185Q\3\2\2\2\u0186\u0188\7\16\2\2\u0187\u0186\3\2\2\2\u0188"+
		"\u018b\3\2\2\2\u0189\u0187\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018d\3\2"+
		"\2\2\u018b\u0189\3\2\2\2\u018c\u018e\5T+\2\u018d\u018c\3\2\2\2\u018d\u018e"+
		"\3\2\2\2\u018e\u0197\3\2\2\2\u018f\u0191\7\16\2\2\u0190\u018f\3\2\2\2"+
		"\u0191\u0192\3\2\2\2\u0192\u0190\3\2\2\2\u0192\u0193\3\2\2\2\u0193\u0194"+
		"\3\2\2\2\u0194\u0196\5T+\2\u0195\u0190\3\2\2\2\u0196\u0199\3\2\2\2\u0197"+
		"\u0195\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u019d\3\2\2\2\u0199\u0197\3\2"+
		"\2\2\u019a\u019c\7\16\2\2\u019b\u019a\3\2\2\2\u019c\u019f\3\2\2\2\u019d"+
		"\u019b\3\2\2\2\u019d\u019e\3\2\2\2\u019e\u01a2\3\2\2\2\u019f\u019d\3\2"+
		"\2\2\u01a0\u01a2\3\2\2\2\u01a1\u0189\3\2\2\2\u01a1\u01a0\3\2\2\2\u01a2"+
		"S\3\2\2\2\u01a3\u01a4\5^\60\2\u01a4U\3\2\2\2\u01a5\u01aa\7\b\2\2\u01a6"+
		"\u01a8\5X-\2\u01a7\u01a9\7\16\2\2\u01a8\u01a7\3\2\2\2\u01a8\u01a9\3\2"+
		"\2\2\u01a9\u01ab\3\2\2\2\u01aa\u01a6\3\2\2\2\u01aa\u01ab\3\2\2\2\u01ab"+
		"\u01ac\3\2\2\2\u01ac\u01ad\7\t\2\2\u01adW\3\2\2\2\u01ae\u01b5\5Z.\2\u01af"+
		"\u01b1\7\16\2\2\u01b0\u01b2\5Z.\2\u01b1\u01b0\3\2\2\2\u01b1\u01b2\3\2"+
		"\2\2\u01b2\u01b4\3\2\2\2\u01b3\u01af\3\2\2\2\u01b4\u01b7\3\2\2\2\u01b5"+
		"\u01b3\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6Y\3\2\2\2\u01b7\u01b5\3\2\2\2"+
		"\u01b8\u01b9\5^\60\2\u01b9[\3\2\2\2\u01ba\u01bf\5^\60\2\u01bb\u01bc\7"+
		"\16\2\2\u01bc\u01be\5^\60\2\u01bd\u01bb\3\2\2\2\u01be\u01c1\3\2\2\2\u01bf"+
		"\u01bd\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0]\3\2\2\2\u01c1\u01bf\3\2\2\2"+
		"\u01c2\u01c3\b\60\1\2\u01c3\u01d2\5`\61\2\u01c4\u01c5\5d\63\2\u01c5\u01c6"+
		"\5^\60\13\u01c6\u01d2\3\2\2\2\u01c7\u01d2\7D\2\2\u01c8\u01d2\5l\67\2\u01c9"+
		"\u01d2\7\3\2\2\u01ca\u01d2\7F\2\2\u01cb\u01d2\5h\65\2\u01cc\u01d2\5P)"+
		"\2\u01cd\u01ce\7\b\2\2\u01ce\u01cf\5\\/\2\u01cf\u01d0\7\t\2\2\u01d0\u01d2"+
		"\3\2\2\2\u01d1\u01c2\3\2\2\2\u01d1\u01c4\3\2\2\2\u01d1\u01c7\3\2\2\2\u01d1"+
		"\u01c8\3\2\2\2\u01d1\u01c9\3\2\2\2\u01d1\u01ca\3\2\2\2\u01d1\u01cb\3\2"+
		"\2\2\u01d1\u01cc\3\2\2\2\u01d1\u01cd\3\2\2\2\u01d2\u01eb\3\2\2\2\u01d3"+
		"\u01d4\f\r\2\2\u01d4\u01d5\7\r\2\2\u01d5\u01d6\5^\60\2\u01d6\u01d7\7\17"+
		"\2\2\u01d7\u01d8\5^\60\16\u01d8\u01ea\3\2\2\2\u01d9\u01da\f\n\2\2\u01da"+
		"\u01db\5f\64\2\u01db\u01dc\5^\60\13\u01dc\u01ea\3\2\2\2\u01dd\u01de\f"+
		"\20\2\2\u01de\u01df\7\6\2\2\u01df\u01e0\5\\/\2\u01e0\u01e1\7\7\2\2\u01e1"+
		"\u01ea\3\2\2\2\u01e2\u01e3\f\17\2\2\u01e3\u01e4\7\f\2\2\u01e4\u01ea\5"+
		"l\67\2\u01e5\u01e6\f\16\2\2\u01e6\u01ea\5V,\2\u01e7\u01e8\f\f\2\2\u01e8"+
		"\u01ea\5b\62\2\u01e9\u01d3\3\2\2\2\u01e9\u01d9\3\2\2\2\u01e9\u01dd\3\2"+
		"\2\2\u01e9\u01e2\3\2\2\2\u01e9\u01e5\3\2\2\2\u01e9\u01e7\3\2\2\2\u01ea"+
		"\u01ed\3\2\2\2\u01eb\u01e9\3\2\2\2\u01eb\u01ec\3\2\2\2\u01ec_\3\2\2\2"+
		"\u01ed\u01eb\3\2\2\2\u01ee\u01ef\7\65\2\2\u01ef\u01f1\7\b\2\2\u01f0\u01f2"+
		"\5D#\2\u01f1\u01f0\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3"+
		"\u01f5\7\t\2\2\u01f4\u01f6\5@!\2\u01f5\u01f4\3\2\2\2\u01f5\u01f6\3\2\2"+
		"\2\u01f6\u01f7\3\2\2\2\u01f7\u01f8\5J&\2\u01f8a\3\2\2\2\u01f9\u01fa\t"+
		"\3\2\2\u01fac\3\2\2\2\u01fb\u01fc\t\4\2\2\u01fce\3\2\2\2\u01fd\u01fe\t"+
		"\5\2\2\u01feg\3\2\2\2\u01ff\u0200\t\6\2\2\u0200i\3\2\2\2\u0201\u0204\5"+
		"l\67\2\u0202\u0204\5n8\2\u0203\u0201\3\2\2\2\u0203\u0202\3\2\2\2\u0204"+
		"k\3\2\2\2\u0205\u0206\7E\2\2\u0206m\3\2\2\2\u0207\u0208\5p9\2\u0208o\3"+
		"\2\2\2\u0209\u020a\t\7\2\2\u020aq\3\2\2\28s\u0087\u008b\u0092\u0097\u00a3"+
		"\u00ad\u00b5\u00bb\u00cd\u00d9\u00db\u00df\u00e3\u00eb\u00f3\u00ff\u0105"+
		"\u010b\u0117\u011b\u011d\u0124\u012a\u012f\u013a\u0141\u0146\u0151\u0155"+
		"\u015e\u0163\u0166\u016a\u0170\u0178\u0180\u0189\u018d\u0192\u0197\u019d"+
		"\u01a1\u01a8\u01aa\u01b1\u01b5\u01bf\u01d1\u01e9\u01eb\u01f1\u01f5\u0203";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}