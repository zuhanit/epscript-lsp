from utils.filters import isclass, isfunction
from utils.spec import getFunctionSpec, getClassSpec
import eudplib
import sys
import json
import inspect
import os

sys.path.append("packages/server/src/lib/eudplib")


def getBuiltins():
    data = {
        "functions": inspect.getmembers(eudplib, isfunction),
        "classes": inspect.getmembers(eudplib, isclass)
    }

    def getBuiltinFunctions():
        temp = list(map(lambda fx: getFunctionSpec(
            fx[0], fx[1]), data["functions"]))
        return temp

    def getBuiltinClasses():
        temp = list(map(lambda cls: getClassSpec(
            cls[0], cls[1]), data["classes"]))
        return temp

    return {
        "functions": getBuiltinFunctions(),
        "classes": getBuiltinClasses(),
    }


def generateFunction(function):
    return {
        "name": function['name'],
        "args": function['args'],
        "docs": function['docs'],
    }


def generateClass(cls):
    return {
        "name": cls['name'],
        "args": cls['args'],
        "methods": list(map(generateFunction, cls['methods'])),
        "docs": cls['docs'],
    }


builtins = getBuiltins()

fnc = list(map(generateFunction, builtins["functions"]))
with open(os.path.dirname(__file__) + '/../json/function.json', 'w') as file:
    json.dump(fnc, file, indent=4)

cls = list(map(generateClass, builtins["classes"]))
with open(os.path.dirname(__file__) + '/../json/class.json', 'w') as file:
    json.dump(cls, file, indent=4)
