import { Range } from "vscode-languageserver";
import { BaseScope } from "../../context/symbolTable/BaseScope";
import { ClassSymbol } from "../../context/symbolTable/ClassSymbol";
import { FunctionSymbol } from "../../context/symbolTable/FunctionSymbol";
import { IScope } from "../../context/symbolTable/IScope";
import { MethodSymbol } from "../../context/symbolTable/MethodSymbol";
import {
  DefaultValue,
  ParameterKind,
  ParameterSymbol,
} from "../../context/symbolTable/ParameterSymbol";
import { zeroRange } from "../../util/range";
import { builtinEncode } from "./encodes";
import eudplibFunction from "../json/function.json";
import eudplibClass from "../json/class.json";

/**
 * EUDDraft 기본 함수들 심볼 형태로 얻어오기.
 *
 * @param scope 들어갈 스코프
 * @returns FunctionSymbol[]
 */
export function getAllEUDFunctions(scope: BaseScope): FunctionSymbol[] {
  const funcs = eudplibFunction.map((fx) => {
    const symbol = new FunctionSymbol(
      fx.name.startsWith("f_")
        ? fx.name.substring(2, fx.name.length + 2)
        : fx.name,
      zeroRange,
      zeroRange,
      scope
    );
    fx.args.forEach((arg) => {
      const argSymbol = new ParameterSymbol(
        arg.name,
        symbol,
        zeroRange,
        arg.kind as ParameterKind,
        arg.default
      );
      symbol.arguments.push(argSymbol);
      symbol.insert(argSymbol);
    });
    symbol.docString = fx.docs;
    return symbol;
  });
  funcs.push(
    ...builtinEncode.map((x) => {
      const symbol = new FunctionSymbol(x.name, zeroRange, zeroRange, scope);
      x.args.forEach((y) => {
        const argSymbol = new ParameterSymbol(
          y,
          symbol,
          zeroRange,
          "POSITIONAL_OR_KEYWORD",
          { value: "empty", type: "str" }
        );
        symbol.arguments.push(argSymbol);
        symbol.insert(argSymbol);
      });
      symbol.docString = x.doc;
      return symbol;
    })
  );

  return funcs;
}

/**
 * EUDDraft 기본 클래스 심볼 형태로 얻어오기.
 *
 * @param scope 들어갈 스코프
 * @returns ClassSymbol[]
 */
export function getAllEUDClasses(scope: BaseScope): ClassSymbol[] {
  const classes = eudplibClass.map((cls) => {
    const symbol = new ClassSymbol(cls.name, zeroRange, zeroRange, scope);
    cls.methods.forEach((method) => {
      const methodSymbol = new MethodSymbol(
        method.name,
        zeroRange,
        zeroRange,
        symbol
      );
      methodSymbol.docString = method.docs;
      method.args.forEach((methodParameter) => {
        methodSymbol.insert(
          new ParameterSymbol(
            methodParameter.name,
            methodSymbol,
            zeroRange,
            methodParameter.kind as ParameterKind,
            methodParameter.default
          )
        );
      });
      symbol.insert(methodSymbol);
    });
    symbol.docString = cls.docs;
    return symbol;
  });
  return classes;
}
