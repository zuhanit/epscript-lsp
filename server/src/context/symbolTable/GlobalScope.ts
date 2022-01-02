import { BaseScope } from './BaseScope';
import { IScope } from './IScope';

/**
 * 전역 스코프.
 */
export class GlobalScope extends BaseScope {
	constructor(scope: IScope) {
		super('global', scope);
	}
}