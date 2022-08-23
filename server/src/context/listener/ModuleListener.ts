import { epScriptParserListener } from "../../grammar/src/grammar/lib/epScriptParserListener";
import { BaseListener } from "./BaseListener";

/**
 * 모듈 심볼 테이블 작성을 위한 리스너.
 *
 * 순환 참조 오류를 피하기 위해 `ModuleListener`는 ImportStatement를 건너뜁니다. 그 외의 모든 행동은 동일하게 작동합니다.
 */
export class ModuleListener
  extends BaseListener
  implements epScriptParserListener
{
  enterImportStatement(): void {
    return;
  }

  exitImportStatement(): void {
    return;
  }
}
