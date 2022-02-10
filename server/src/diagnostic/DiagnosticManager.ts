import { ParserRuleContext, Token } from 'antlr4ts';
import { Diagnostic } from 'vscode-languageserver';
import { keys, LanguageManager } from '../i18n/LanguageManager';

export function pushDiagnostic(message: string, diagnostic: Diagnostic[], offendingToken: Token) {
	diagnostic.push({
		message: message,
		range: {
			start: {
				character: offendingToken.charPositionInLine,
				line: offendingToken.line - 1,
			},
			end: {
				character: offendingToken.charPositionInLine + offendingToken.stopIndex -
					offendingToken.startIndex + 1,
				line: offendingToken.line - 1,
			},
		}
	});
}