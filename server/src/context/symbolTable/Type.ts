/**
 * 일반 타입.
 * 
 * epScript에서 타입이 모든 곳에 적용되진 않지만, `Class`나 인코딩된 eudplib 정의 타입
 * 등이 사용되는 경우가 많다.
 */
export interface Type {
	name: SymbolType;
}

type SymbolType = 'variable' | 'function' | 'void' | 'class' | 'method' | 'member' | 'module' | 'undefined';