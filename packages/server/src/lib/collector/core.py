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


class Collector:
    __functions__ = list(map(generateFunction, builtins["functions"]))
    __classes__ = list(map(generateClass, builtins["classes"]))

    def print_function_json(self):
        """
        Print eudplib functions as json string.

        This is useful function for call python at other module(like json spawn).
        """
        str = json.dumps(self.__functions__, indent=4)
        print(str)

    def print_class_json(self):
        """
        Print eudplib class as json string.

        This is useful function for call python at other module(like json spawn).
        """
        str = json.dumps(self.__classes__, indent=4)
        print(str)

    def get_function(self):
        return self.__functions__

    def get_class(self):
        return self.__classes__

    def __dump__(self, dict, fname):
        """
        Internal json dumping method.
        """
        source_path = os.path.dirname(__file__)
        file_path = f"{source_path}/../json/{fname}.json"

        with open(file_path, "w") as file:
            json.dump(dict, file, indent=4)

    def dump_function(self):
        self.__dump__(self.__functions__, "function")

    def dump_class(self):
        self.__dump__(self.__classes__, "class")
