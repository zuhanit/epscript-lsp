import types
from eudplib.core.eudfunc.eudtypedfuncn import EUDFullFuncN, EUDFuncN, EUDTypedFuncN, EUDXTypedFuncN


def isfunction(object):

    EUD_FUNCS = (types.FunctionType, EUDFullFuncN, EUDFuncN, EUDTypedFuncN,
                 EUDXTypedFuncN)

    return isinstance(object, EUD_FUNCS)


def istypedfunction(object):
    EUD_FUNCS = (EUDTypedFuncN, EUDXTypedFuncN, EUDFullFuncN)

    return isinstance(object, EUD_FUNCS)


def iseudfunc(object):
    return isinstance(object, EUDFuncN)


def isclass(object):
    from eudplib.core.eudstruct import EUDStruct
    EUD_OBJECTS = (type, EUDStruct)

    return isinstance(object, EUD_OBJECTS)
