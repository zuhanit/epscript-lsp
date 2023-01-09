import os
import json
from core import Collector

c = Collector()
source_path = os.path.dirname(__file__)


def diff(original, target):
    """
    Check differences with original eudplib json and target by string length.
    """
    diff = len(original) - len(target)
    return True if diff != 0 else False


def check_def(path, target):
    with open(path) as file:
        data = file.read()
        return diff(data, json.dumps(target, indent=4))


def check():
    function_path = f"{source_path}/../json/function.json"
    class_path = f"{source_path}/../json/class.json"

    result = check_def(function_path, c.get_function())
    if result is not True:
        result = check_def(class_path, c.get_class())

    return result


def update():
    c.dump_function()
    c.dump_class()


is_diff = check()
if is_diff is True:
    print("Update eudplib data")
    update()
