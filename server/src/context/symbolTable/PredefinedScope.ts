import { Range } from 'vscode-languageserver';
import { BaseScope } from './BaseScope';

export class PredefinedScope extends BaseScope {
	constructor(range: Range) {
		super('predefined', range);
	}
}