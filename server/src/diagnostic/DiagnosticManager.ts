import { ParserRuleContext, Token } from 'antlr4ts';
import { Diagnostic, Range } from 'vscode-languageserver';
import { keys, LanguageManager } from '../i18n/LanguageManager';

export function pushDiagnostic(message: string, diagnostic: Diagnostic[], t: ParserRuleContext): void;

export function pushDiagnostic(message: string, diagnostic: Diagnostic[], t: ParserRuleContext) {
	diagnostic.push({
		message: message,
		range: {
			start: {
				character: t.start.charPositionInLine,
				line: t.start.line - 1,
			},
			end: {
				character: t.stop && t.stop.text
					? t.stop.charPositionInLine + t.stop.text?.length
					: t.start.charPositionInLine,
				line: t.stop
					? t.stop.line - 1
					: t.start.line - 1
			}
		}
	});
}