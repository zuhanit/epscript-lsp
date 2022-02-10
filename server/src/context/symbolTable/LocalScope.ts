import { Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';
import { IScope } from './IScope';
import { SymbolWithScope } from './SymbolWithScope';

/**
 * { ... } 와 같은 코드 블럭 스코프.
 */
export class LocalScope extends SymbolWithScope {
	constructor(
		range: Range,
		parent: BaseScope,
	) {
		// 중복 방지를 임시방편으로 처리했으나 nestedScope로 처리하는 게 맞다...
		super('local' + range.start.line + range.start.character, range, range, parent);
	}
}