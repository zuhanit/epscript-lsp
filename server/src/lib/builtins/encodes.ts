import { FunctionSymbol } from '../../context/symbolTable/FunctionSymbol';
import { ParameterSymbol } from '../../context/symbolTable/ParameterSymbol';
import { zeroRange } from '../../util/range';

interface BuiltinEncode {
    name: string;
    args: string[];
    doc: string;
}

export const builtinEncode: BuiltinEncode[] = [
	{
		name: '$L',
		args: [
			't'
		],
		doc: 'Encode Location Name'
	},
	{
		name: '$U',
		args: [
			't'
		],
		doc: 'Encode Unit Name'
	},
	{
		name: '$T',
		args: [
			't'
		],
		doc: 'Encode Map String'
	},
	{
		name: '$B',
		args: [
			't'
		],
		doc: 'Encode stat_txt.tbl'
	},
	{
		name: '$S',
		args: [
			't'
		],
		doc: 'Encode Switch Name'
	},
];