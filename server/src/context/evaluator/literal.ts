import { ClassSymbol } from '../symbolTable/ClassSymbol';
import { FunctionSymbol } from '../symbolTable/FunctionSymbol';
import { ISymbol } from '../symbolTable/ISymbol';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Literal = ClassSymbol | FunctionSymbol | object | string | number | boolean | ISymbol | null | undefined;