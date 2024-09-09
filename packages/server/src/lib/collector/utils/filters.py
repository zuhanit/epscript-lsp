
import sys
import types

sys.path.append("packages/server/src/lib/eudplib")

from eudplib.core.eudfunc.eudtypedfuncn import EUDFullFuncN, EUDFuncN, EUDTypedFuncN, EUDXTypedFuncN
from eudplib.utils.exprproxy import ExprProxy


def isfunction(object):

    EUD_FUNCS = (types.FunctionType, types.MethodType, EUDFullFuncN, EUDFuncN, EUDTypedFuncN,
                 EUDXTypedFuncN)

    return isinstance(object, EUD_FUNCS)


def istypedfunction(object):
    EUD_FUNCS = (EUDTypedFuncN, EUDXTypedFuncN, EUDFullFuncN)

    return isinstance(object, EUD_FUNCS)


def iseudfunc(object):
    return isinstance(object, EUDFuncN)


def isclass(object):
    from eudplib.core.eudstruct import EUDStruct
    EUD_OBJECTS = (type, EUDStruct, ExprProxy)

    return isinstance(object, EUD_OBJECTS)