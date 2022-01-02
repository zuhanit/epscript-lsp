import { ISymbol } from './ISymbol';

/**
 * 기본 스코프.
 */
export interface IScope {
	/**
	 * 스코프의 이름.
	 * 
	 * 함수나 클래스와 같은 스코프들은 이름을 가지나, 단순 코드 블럭과 같이
	 * 이름을 갖지 않을 경우엔 local로 설정한다.
	 */
	name: string;

	/**
	 * 부모 스코프.
	 * 
	 * undefined일 경우 루트 스코프이다.
	 */
	parent: IScope | undefined;

	
	/**
	 * 스코프에 심볼을 삽입.
	 * 
	 * 이름이 중복된 심볼의 경우 덮어씌워짐에 주의.
	 * 
	 * @param symbol 심볼
	 */
	insert(symbol: ISymbol): void;
	
	/**
	 * 스코프에 스코프를 삽입.
	 * 
	 * {@link insert}와 비슷하나 `FunctionSymbol`과 같이 `SymbolWithScope`를 상속한
	 * 심볼의 경우 스코프를 삽입해야하므로 이 경우에 사용한다.
	 * 
	 * @param scope 스코프
	 */
	nest(scope: IScope): void;

	/**
	 * 중첩 스코프 목록 얻어오기.
	 */
	getNestedScopes(): IScope[];

	/**
	 * 이름으로 심볼 검색.
	 * 
	 * @param 이름
	 */
	getSymbolByName(name: string): ISymbol | undefined;

	/**
	 * 심볼 얻어오기.
	 * 
	 * 중첩 스코프가 아닌 현재 스코프에서만 심볼을 얻어오므로, 중첩 스코프에서도 얻어오고 싶을 경우
	 * {@link getAllSymbols} 메소드를 사용해야 한다.
	 * 
	 */
	getSymbols(): ISymbol[];
	
	/**
	 * 중첩된 스코프를 포함해 심볼 얻어오기.
	 */
	getAllSymbols(): ISymbol[];

	/**
	 * 부모 스코프를 포함해 심볼 얻어오기.
	 */
	resolve(name: string): ISymbol | undefined;


	/**
	 * 루트 스코프까지의 스코프 경로.
	 * 
	 * 첫번째 원소는 자기 자신, 마지막 원소는 루트 스코프이다.
	 * 
	 * @returns IScope[] 루트 스코프까지의 스코프들
	 */
	getEnclosingPathToRoot(): IScope[];
}