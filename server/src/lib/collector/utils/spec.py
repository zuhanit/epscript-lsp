import inspect
from .filters import iseudfunc, isfunction, istypedfunction


def getFunctionSpec(name, function):
    """
    Get function specs.
    """
    return {
        "name":  name,
        "object": function,
        "args": getFunctionArgsSpec(function),
        "argspec": inspect.signature(function),
        "docs": function.__doc__ if function.__doc__ is not None else ""
    }


def getFunctionArgsSpec(function):
    """
    Get function argument specs.
    """
    if (iseudfunc(function)):
        ARGS_NAMES = [param.name for param in inspect.signature(
            function._bodyfunc).parameters.values()]
        return [
            {
                "name": name,
                "kind": str(inspect._ParameterKind.POSITIONAL_ONLY),
                "default": {
                    "value": "empty",
                    "type": "str"
                },
                "type": "any"
            } for name in ARGS_NAMES
        ]

    if (istypedfunction(function)):
        ARGS_NAMES = [param.name for param in inspect.signature(
            function._bodyfunc).parameters.values()]
        ARGS_TYPES = getFunctionArgsTypes(function)

        return [
            {
                "name": name,
                "kind": str(inspect._ParameterKind.POSITIONAL_ONLY),
                "default": {
                    "value": "empty",
                    "type": "str"
                },
                "type": type
            } for name, type in zip(ARGS_NAMES, ARGS_TYPES)
        ]

    def getParameterInfo(param):
        def getParamTypeByName(name):
            StockTypes = {
                "TrgComparison": ('Comparison', 'cmptype'),
                "TrgModifier": ('TimeModifier', 'Modifier', 'modtype'),
                "TrgOrder": ("OrderType"),
                "TrgPlayer": ('Player', 'p', 'ForPlayer', 'Owner', 'NewOwner'),
                "TrgProperty": ('Properties', 'prop'),
                "TrgResource": ("ResourceType"),
                "TrgScore": ("ScoreType"),
                "TrgAIScript": ('ais', 'script'),
                "TrgLocation": ('Location', 'Where', 'location', 'DestLocation', 'StartLocation'),
                "TrgUnit": ('Unit, OnUnit, UnitType, unit'),
            }

            for k, v in StockTypes.items():
              if name in v:
                return k
            return "any"

        if (param.name == '_fdict'):
            return {
                "name": param.name,
                "kind": str(param.kind),
                "default": {
                    "value": "{}",
                    "type": type(param.default).__name__
                },
                "type": "any"
            }
        else:
            return {
                "name": param.name,
                "kind": str(param.kind),
                "default": {
                    "value": 'empty' if param.default == inspect._empty else str(param.default),
                    "type": type(param.default).__name__
                },
                "type": getParamTypeByName(param.name)
            }
    params = inspect.signature(function).parameters.values()
    return list(map(getParameterInfo, params))


def getFunctionArgsTypes(function):
    def getArgType(type):
        from eudplib.core.eudfunc.consttype import TrgAllyStatus, TrgComparison, TrgCount, TrgModifier, TrgOrder, TrgPlayer, TrgProperty, TrgPropState, TrgResource, TrgScore, TrgSwitchAction, TrgSwitchState, TrgAIScript, TrgLocation, TrgString, TrgSwitch, TrgUnit, TrgTBL, Image, Iscript
        EUD_TYPES = (TrgAllyStatus, TrgComparison, TrgCount, TrgModifier, TrgOrder, TrgPlayer, TrgProperty, TrgPropState,
                     TrgResource, TrgScore, TrgSwitchAction, TrgSwitchState, TrgAIScript, TrgLocation, TrgString, TrgSwitch, TrgUnit, TrgTBL, Image, Iscript, None)
        EUD_TYPES_NAME = ("TrgAllyStatus", "TrgComparison", "TrgCount", "TrgModifier", "TrgOrder", "TrgPlayer", "TrgProperty", "TrgPropState",
                          "TrgResource", "TrgScore", "TrgSwitchAction", "TrgSwitchState", "TrgAIScript", "TrgLocation", "TrgString", "TrgSwitch", "TrgUnit", "TrgTBL", "Image", "Iscript", "any")
        return EUD_TYPES_NAME[EUD_TYPES.index(type)]

    _argstypes = function._argtypes
    ret = []
    if _argstypes is not None:
        for argtype in _argstypes:
            ret.append(getArgType(argtype))
    else:
        ret = [None]
    return ret


def getClassSpec(name, cls):
    return {
        "name": name,
        "args": getFunctionArgsSpec(cls.__init__)[1:],
        # FIXME: It can't collect not function inherited method like __class__, or property.
        "methods": list(map(lambda mem: getFunctionSpec(mem[0], mem[1]), inspect.getmembers(cls, isfunction))),
        "object": cls,
        "docs": cls.__doc__ if cls.__doc__ is not None else ""
    }
