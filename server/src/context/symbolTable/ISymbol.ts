import { IScope } from "./IScope";

/**
 * 기본 심볼.
 *
 * `ISymbol`은 일반적인 프로그래밍 언어 심볼을 표현하기 위한 인터페이스로서, 이에서
 * 파생되는 다른 심볼들이 상속받기 위해 사용된다.
 *
 */
export interface ISymbol {
  name: string;
  scope?: IScope;
}
