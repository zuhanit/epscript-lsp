import { BaseSymbol } from './BaseSymbol';
import { Type } from './Type';

export class MemberSymbol extends BaseSymbol {
	type: Type = {name: 'member'};
}