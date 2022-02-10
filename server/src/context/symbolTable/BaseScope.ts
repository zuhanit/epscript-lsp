import { Range } from 'vscode-languageserver';
import { ContextSymbolTable } from '../ContextSymbolTable';
import { BaseSymbol } from './BaseSymbol';
import { IScope } from './IScope';
import { ISymbol } from './ISymbol';

/**
 * 기본 스코프 추상 클래스.
 */
export abstract class BaseScope implements IScope {
	name = 'local';
	range: Range;
	blockRange: Range;
	parent?: BaseScope | undefined;

	/**
	 * 스코프 내 심볼들.
	 * 
	 * 모든 심볼들은 `symbols`에 맵핑되지만, ISymbol에서 상속되지 않은 클래스,
	 * 예를 들어 LocalScope와 같은 경우에는 {@link nestedScopes}에 들어간다.
	 */
	symbols: Map<string, ISymbol> = new Map<string, ISymbol>();

	/**
	 * 스코프 내 스코프들.
	 * 
	 * 중첩 스코프들로, LocalScope나 `FunctionSymbol`과 같은 심볼로 생성된
	 * 모든 스코프들이 들어간다.
	 * 
	 * `SymbolWithScope`는 여기가 아닌 {@link symbols}에
	 * 포함되어야 한다.
	 */
	nestedScopes: IScope[] = [];

	constructor(
		name: string,
		range: Range,
		blockRange: Range,
		parent?: BaseScope,
	) {
		this.name = name;
		this.range = range;
		this.parent = parent;
		this.blockRange = blockRange;
	}

	insert(symbol: ISymbol): void {
		symbol.scope = this;
		this.symbols.set(symbol.name, symbol);
	}

	nest(scope: IScope): void {
		this.nestedScopes.push(scope);
	}

	getNestedScopes(): IScope[] {
		return this.nestedScopes;
	}

	getSymbolByName(name: string): ISymbol | undefined {
		return this.symbols.get(name);
	}

	getSymbols(): ISymbol[] {
		return Array.from(this.symbols.values());
	}

	getAllSymbols(): ISymbol[] {
		const symbols: ISymbol[] = this.getSymbols();
		symbols.forEach(x => {
			if (x instanceof BaseScope) {
				symbols.push(...x.getAllSymbols());
			}
		});
		return symbols;
	}

	/**
	 * 
	 * 현재 스코프까지의 심볼들 얻어오기.
	 * 
	 * @returns 현재 스코프까지의 심볼들
	 */
	getSymbolsUntilThis() {
		const symbols: ISymbol[] = this.getSymbols();
		let parent: BaseScope | undefined = this.parent;

		while (parent) {
			symbols.push(...parent?.getSymbols());
			parent = parent.parent;
		}

		return symbols;
	}

	resolve(name: string): ISymbol | undefined {
		const symbol = this.symbols.get(name);
		if (symbol) return symbol; // 스코프에서 찾았을 시 반환
		if (this.parent) return this.parent.resolve(name); // 부모 스코프에서 찾기
		return undefined; // 모든 경우에도 없을 경우 undefined 반환
	}

	getEnclosingPathToRoot(): IScope[] {
		const scopes: IScope[] = [this];
		let s: IScope | undefined = this.parent;
		while (s) {
			scopes.push(s);
			s = s.parent;
		}
		return scopes;
	}

	/**
	 * 평가된 이름 얻기.
	 * 
	 * 자기 자신을 포함해 루트 스코프까지 스코프들로 이루어진 체이닝 이름을 얻어온다
	 * (예: myModule.myClass.methodName).
	 * 
	 * 일반 `SymbolTable`에서 사용할 경우 predefined.global까지 있음에 주의
	 * @returns 평가된 이름
	 */
	getFullyQualifiedName(): string {
		return `${this.getEnclosingPathToRoot().reverse().map(x => x.name).join('.')}`;
	}

	public static isBaseScope(arg: any): arg is BaseScope {
		return arg instanceof BaseScope;
	}
}