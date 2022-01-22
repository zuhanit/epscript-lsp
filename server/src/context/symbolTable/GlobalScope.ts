import { Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';
import { IScope } from './IScope';

/**
 * 전역 스코프.
 */
export class GlobalScope extends BaseScope {
	constructor(range: Range, scope: BaseScope) {
		super('global', range, scope);
	}
}