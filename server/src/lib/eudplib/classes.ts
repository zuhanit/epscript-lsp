interface BuiltinClass {
	name: string;
	methods: BuiltinMethod[];
	doc: string;
	init: BuiltinInitializer
}

interface BuiltinMethod {
	name: string;
	args: string[];
	doc: string;
}

interface BuiltinInitializer {
	args: string[];
	doc: string;
}

export const builtinClasses: BuiltinClass[] = [
    {
        "name": "Action",
        "methods": [
            {
                "name": "CheckArgs",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "CollectDependency",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "Disabled",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "SetParentTrigger",
                "args": [
                    "trg",
                    "index"
                ],
                "doc": ""
            },
            {
                "name": "WritePayload",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": "\n    Action class.\n\n    Memory layout.\n\n     ======  ============= ========  ==========\n     Offset  Field Name    Position  EPD Player\n     ======  ============= ========  ==========\n       +00   locid1         dword0   EPD(act)+0\n       +04   strid          dword1   EPD(act)+1\n       +08   wavid          dword2   EPD(act)+2\n       +0C   time           dword3   EPD(act)+3\n       +10   player1        dword4   EPD(act)+4\n       +14   player2        dword5   EPD(act)+5\n       +18   unitid         dword6   EPD(act)+6\n       +1A   acttype\n       +1B   amount\n       +1C   flags          dword7   EPD(act)+7\n       +1D   internal[3\n     ======  ============= ========  ==========\n    ",
        "init": {
            "args": [
                "locid1",
                "strid",
                "wavid",
                "time",
                "player1",
                "player2",
                "unitid",
                "acttype",
                "amount",
                "flags",
                "*",
                "eudx=0"
            ],
            "doc": "\n        See :mod:`eudplib.base.stocktrg` for stock actions list.\n        "
        }
    },
    {
        "name": "CPByteWriter",
        "methods": [
            {
                "name": "flushdword",
                "args": [
                    ""
                ],
                "doc": "Flush buffer."
            },
            {
                "name": "writebyte",
                "args": [
                    "byte"
                ],
                "doc": "Write byte to current position.\n\n        Write a byte to current position of EUDByteWriter. Writer will advance\n        by 1 byte.\n\n        .. note::\n            Bytes could be buffered before written to memory. After you\n            finished using writebytes, you must call `flushdword` to flush the\n            buffer.\n        "
            }
        ],
        "doc": "Write byte by byte",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "CPString",
        "methods": [
            {
                "name": "Display",
                "args": [
                    "action=[]"
                ],
                "doc": ""
            },
            {
                "name": "GetNextPtrMemory",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "GetVTable",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "\n    store String in SetDeaths Actions, easy to concatenate.\n    ",
        "init": {
            "args": [
                "content=None"
            ],
            "doc": "Constructor for CPString\n        :param content: Initial CPString content / capacity. Capacity of\n            CPString is determined by size of this. If content is integer, then\n            initial capacity and content of CPString will be set to\n            content(int) and empty string.\n        :type content: str, bytes, int\n        "
        }
    },
    {
        "name": "Condition",
        "methods": [
            {
                "name": "CheckArgs",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "CollectDependency",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "Disabled",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "SetParentTrigger",
                "args": [
                    "trg",
                    "index"
                ],
                "doc": ""
            },
            {
                "name": "WritePayload",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": "\n    Condition class.\n\n    Memory layout:\n\n     ======  =============  ========  ===========\n     Offset  Field name     Position  EPD Player\n     ======  =============  ========  ===========\n       +00   locid           dword0   EPD(cond)+0\n       +04   player          dword1   EPD(cond)+1\n       +08   amount          dword2   EPD(cond)+2\n       +0C   unitid          dword3   EPD(cond)+3\n       +0E   comparison\n       +0F   condtype\n       +10   restype         dword4   EPD(cond)+4\n       +11   flags\n       +12   internal[2]\n     ======  =============  ========  ===========\n    ",
        "init": {
            "args": [
                "locid",
                "player",
                "amount",
                "unitid",
                "comparison",
                "condtype",
                "restype",
                "flags",
                "*",
                "eudx=0"
            ],
            "doc": ""
        }
    },
    {
        "name": "ConstExpr",
        "methods": [
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": " Class for general expression with rlocints.\n    ",
        "init": {
            "args": [
                "baseobj",
                "offset=0",
                "rlocmode=4"
            ],
            "doc": ""
        }
    },
    {
        "name": "CtrlStruOpener",
        "methods": [
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__del__",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "f"
            ],
            "doc": ""
        }
    },
    {
        "name": "DBString",
        "methods": [
            {
                "name": "Display",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "GetStringMemoryAddr",
                "args": [
                    ""
                ],
                "doc": "Get memory address of DBString content.\n\n        :returns: Memory address of DBString content.\n        "
            },
            {
                "name": "Play",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getattribute__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getitem__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__setitem__",
                "args": [
                    "name",
                    "newvalue"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "getValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "cast",
                "args": [
                    "_from"
                ],
                "doc": ""
            }
        ],
        "doc": "Object for storing single modifiable string.\n\n    Manipluating STR section is hard. DBString stores only one string, so that\n    modifying its structure is substantially easier than modifying entire STR\n    section. You can do anything you would do with normal string with DBString.\n    ",
        "init": {
            "args": [
                "content=None",
                "*",
                "_from=None"
            ],
            "doc": "Constructor for DBString\n\n        :param content: Initial DBString content / capacity. Capacity of\n            DBString is determined by size of this. If content is integer, then\n            initial capacity and content of DBString will be set to\n            content(int) and empty string.\n\n        :type content: str, bytes, int\n        "
        }
    },
    {
        "name": "Db",
        "methods": [
            {
                "name": "CollectDependency",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "DynamicConstructed",
                "args": [
                    ""
                ],
                "doc": " Whether function is constructed dynamically.\n\n        Dynamically constructed EUDObject may have their dependency list\n        generated during object construction. So their dependency list is\n        re-examined before allocation phase.\n        "
            },
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": "\n        What this object should be evaluated to when used in eudplib program.\n\n        :return: Default) Memory address of this object.\n\n        .. note::\n            In overriding this method, you can use\n            :func:`eudplib.GetObjectAddr`.\n        "
            },
            {
                "name": "GetDataSize",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "WritePayload",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "getValueAddr",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "Class for raw data object",
        "init": {
            "args": [
                "b"
            ],
            "doc": ""
        }
    },
    {
        "name": "EPDCUnitMap",
        "methods": [
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__setattr__",
                "args": [
                    "name",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "getdwepd",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "getepd",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "getpos",
                "args": [
                    "name"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "epd"
            ],
            "doc": ""
        }
    },
    {
        "name": "EPError",
        "methods": [],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "EPSFinder",
        "methods": [
            {
                "name": "_getFinder",
                "args": [
                    "path"
                ],
                "doc": ""
            },
            {
                "name": "find_spec",
                "args": [
                    "fullname",
                    "path",
                    "target=None"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EPSLoader",
        "methods": [
            {
                "name": "__eq__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "_cache_bytecode",
                "args": [
                    "source_path",
                    "bytecode_path",
                    "data"
                ],
                "doc": ""
            },
            {
                "name": "contents",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "create_module",
                "args": [
                    "spec"
                ],
                "doc": "Use default semantics for module creation."
            },
            {
                "name": "exec_module",
                "args": [
                    "module"
                ],
                "doc": "Execute the module."
            },
            {
                "name": "get_code",
                "args": [
                    "fullname"
                ],
                "doc": "Concrete implementation of InspectLoader.get_code.\n\n        Reading of bytecode requires path_stats to be implemented. To write\n        bytecode, set_data must also be implemented.\n\n        "
            },
            {
                "name": "get_data",
                "args": [
                    "path"
                ],
                "doc": "Return the data from path as raw bytes."
            },
            {
                "name": "get_filename",
                "args": [
                    "name=None",
                    "*args",
                    "**kwargs"
                ],
                "doc": "Return the path to the source file as found by the finder."
            },
            {
                "name": "get_resource_reader",
                "args": [
                    "name=None",
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "get_source",
                "args": [
                    "fullname"
                ],
                "doc": "Concrete implementation of InspectLoader.get_source."
            },
            {
                "name": "is_package",
                "args": [
                    "fullname"
                ],
                "doc": "Concrete implementation of InspectLoader.is_package by checking if\n        the path returned by get_filename has a filename of '__init__.py'."
            },
            {
                "name": "is_resource",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "load_module",
                "args": [
                    "name=None",
                    "*args",
                    "**kwargs"
                ],
                "doc": "Load a module from a file.\n\n        This method is deprecated.  Use exec_module() instead.\n\n        "
            },
            {
                "name": "open_resource",
                "args": [
                    "resource"
                ],
                "doc": ""
            },
            {
                "name": "path_mtime",
                "args": [
                    "path"
                ],
                "doc": "Optional method that returns the modification time (an int) for the\n        specified path (a str).\n\n        Raises OSError when the path cannot be handled.\n        "
            },
            {
                "name": "path_stats",
                "args": [
                    "path"
                ],
                "doc": "Return the metadata for the path."
            },
            {
                "name": "resource_path",
                "args": [
                    "resource"
                ],
                "doc": ""
            },
            {
                "name": "set_data",
                "args": [
                    "path",
                    "data",
                    "*",
                    "_mode=438"
                ],
                "doc": "Write bytes data to a file."
            },
            {
                "name": "source_to_code",
                "args": [
                    "data",
                    "path",
                    "*",
                    "_optimize=-1"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "fullname",
                "path"
            ],
            "doc": "Cache the module name and the path to the file found by the\n        finder."
        }
    },
    {
        "name": "EPWarning",
        "methods": [],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "EUDArray",
        "methods": [
            {
                "name": "__add__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getattribute__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getitem__",
                "args": [
                    "key"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__iter__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__setitem__",
                "args": [
                    "key",
                    "item"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "get",
                "args": [
                    "key"
                ],
                "doc": ""
            },
            {
                "name": "getValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "set",
                "args": [
                    "key",
                    "item"
                ],
                "doc": ""
            },
            {
                "name": "cast",
                "args": [
                    "_from"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "initval=None",
                "*",
                "_from=None"
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDByteReader",
        "methods": [
            {
                "name": "readbyte",
                "args": [
                    ""
                ],
                "doc": "Read byte from current address. ByteReader will advance by 1 bytes.\n\n        :returns: Read byte\n        "
            },
            {
                "name": "seekepd",
                "args": [
                    "epdoffset"
                ],
                "doc": "Seek EUDByteReader to specific epd player address"
            },
            {
                "name": "seekoffset",
                "args": [
                    "offset"
                ],
                "doc": "Seek EUDByteReader to specific address"
            }
        ],
        "doc": "Read byte by byte.",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDByteStream",
        "methods": [
            {
                "name": "copyto",
                "args": [
                    "bytestream"
                ],
                "doc": ""
            },
            {
                "name": "readbyte",
                "args": [
                    ""
                ],
                "doc": "Read byte from current address. ByteReader will advance by 1 bytes.\n\n        :returns: Read byte\n        "
            },
            {
                "name": "seekepd",
                "args": [
                    "epdoffset"
                ],
                "doc": "Seek EUDByteWriter to specific epd player address"
            },
            {
                "name": "seekoffset",
                "args": [
                    "offset"
                ],
                "doc": "Seek EUDByteWriter to specific address"
            },
            {
                "name": "writebyte",
                "args": [
                    "byte"
                ],
                "doc": "Write byte to current position.\n\n        Write a byte to current position of EUDByteWriter.\n        ByteWriter will advance by 1 byte.\n        "
            },
            {
                "name": "flushdword",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "Write and read byte by byte.",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDByteWriter",
        "methods": [
            {
                "name": "seekepd",
                "args": [
                    "epdoffset"
                ],
                "doc": "Seek EUDByteWriter to specific epd player address"
            },
            {
                "name": "seekoffset",
                "args": [
                    "offset"
                ],
                "doc": "Seek EUDByteWriter to specific address"
            },
            {
                "name": "writebyte",
                "args": [
                    "byte"
                ],
                "doc": "Write byte to current position.\n\n        Write a byte to current position of EUDByteWriter.\n        ByteWriter will advance by 1 byte.\n        "
            },
            {
                "name": "flushdword",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "Write byte by byte.",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDFuncN",
        "methods": [
            {
                "name": "_AddReturn",
                "args": [
                    "retv",
                    "needjump"
                ],
                "doc": ""
            },
            {
                "name": "_CreateFuncArgs",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "_CreateFuncBody",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "ret=None"
                ],
                "doc": ""
            },
            {
                "name": "size",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "argn",
                "callerfunc",
                "bodyfunc",
                "*",
                "traced"
            ],
            "doc": " EUDFuncN\n\n        :param callerfunc: Function to be wrapped.\n        :param argn: Count of arguments got by callerfunc\n        :param bodyfunc: Where function should return to\n        "
        }
    },
    {
        "name": "EUDGrp",
        "methods": [
            {
                "name": "CollectDependency",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "DynamicConstructed",
                "args": [
                    ""
                ],
                "doc": " Whether function is constructed dynamically.\n\n        Dynamically constructed EUDObject may have their dependency list\n        generated during object construction. So their dependency list is\n        re-examined before allocation phase.\n        "
            },
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "GetDataSize",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "WritePayload",
                "args": [
                    "buf"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": "Object for GRP\n\n    Starcraft modifies GRP in certain way before it is used ingame. This object\n    emulates that modification so that SC recognizes GRP correctly.\n    ",
        "init": {
            "args": [
                "content"
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDLightVariable",
        "methods": [
            {
                "name": "AddNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AddNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "Assign",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtLeast",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtLeastX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "AtMost",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtMostX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "Exactly",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "ExactlyX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "SetNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SetNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "SubtractNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SubtractNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__iadd__",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "__isub__",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "checkNonRValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getValueAddr",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "initvalue=0"
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDObject",
        "methods": [
            {
                "name": "CollectDependency",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "DynamicConstructed",
                "args": [
                    ""
                ],
                "doc": " Whether function is constructed dynamically.\n\n        Dynamically constructed EUDObject may have their dependency list\n        generated during object construction. So their dependency list is\n        re-examined before allocation phase.\n        "
            },
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": "\n        What this object should be evaluated to when used in eudplib program.\n\n        :return: Default) Memory address of this object.\n\n        .. note::\n            In overriding this method, you can use\n            :func:`eudplib.GetObjectAddr`.\n        "
            },
            {
                "name": "GetDataSize",
                "args": [
                    ""
                ],
                "doc": "Memory size of object."
            },
            {
                "name": "WritePayload",
                "args": [
                    "pbuffer"
                ],
                "doc": "Write object"
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": "\n    Class for standalone object on memory\n\n    .. note::\n        Object collection occures in three steps:\n\n        - Collection phase : collects object used in map generation. Object\n        used in WritePayload method are being collected. Methods Evaluate\n        and WritePayload are called during this phase.\n        - Allocation phase : Object have their offset assigned. GetDataSize\n        method is called on this phase, so if GetDataSize is being called,\n        it means that every object required in map has been collected.\n        WritePayload and GetDataSize method should behave exactly the same as\n        it should on Writing phase here.\n        - Writing phase : Object is written into payload.\n    ",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDSCAnd",
        "methods": [
            {
                "name": "__call__",
                "args": [
                    "cond=None",
                    "*",
                    "neg=False"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDSCOr",
        "methods": [
            {
                "name": "__call__",
                "args": [
                    "cond=None",
                    "*",
                    "neg=False"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDStruct",
        "methods": [
            {
                "name": "__add__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getattribute__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getitem__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__setattr__",
                "args": [
                    "name",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "__setitem__",
                "args": [
                    "name",
                    "newvalue"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "asVariable",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "constructor",
                "args": [
                    ""
                ],
                "doc": "Constructor for individual structures.\n\n        Default constructor accepts no arguments, but derived classes may\n        accept additional arguments.\n\n        This function is called when\n            - Argument is allocated from pool   (self.isPooled = True)\n            - Argument is generated             (self.isPooled = False)\n\n        You may choose to either allocate member from pool or just allocate\n        members statically via self.isPooled.\n        "
            },
            {
                "name": "constructor_static",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": "Specialized constructor for static variables.\n\n        Static variable may not require allocation for member variables.\n        Function may specialize their behavior by overriding this function"
            },
            {
                "name": "copy",
                "args": [
                    ""
                ],
                "doc": " Create struct clone "
            },
            {
                "name": "copyto",
                "args": [
                    "inst"
                ],
                "doc": " Copy struct to other instance "
            },
            {
                "name": "destructor",
                "args": [
                    ""
                ],
                "doc": "Destructor for individual structures.\n\n        Destructor accepts no arguments. Destructor is called when\n            - Manually called. (Ex: stack variable)\n            - free() is called for object\n        "
            },
            {
                "name": "getValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getfield",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "setall",
                "args": [
                    "values"
                ],
                "doc": ""
            },
            {
                "name": "setfield",
                "args": [
                    "name",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "alloc",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "cast",
                "args": [
                    "_from"
                ],
                "doc": ""
            },
            {
                "name": "free",
                "args": [
                    "data"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "*args",
                "_from=None",
                "**kwargs"
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDVArrayReader",
        "methods": [
            {
                "name": "_maketrg",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "read",
                "args": [
                    "acts=[]"
                ],
                "doc": ""
            },
            {
                "name": "seek",
                "args": [
                    "varr_ptr",
                    "varr_epd",
                    "eudv",
                    "acts=[]"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDVariable",
        "methods": [
            {
                "name": "AddDest",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "AddNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AddNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "Assign",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "AtLeast",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtLeastX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "AtMost",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtMostX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "Exactly",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "ExactlyX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "GetVTable",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "QueueAddTo",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "QueueAssignTo",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "QueueSubtractTo",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "SetDest",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "SetNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SetNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "SubtractDest",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "SubtractNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SubtractNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__iadd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__iand__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__ifloordiv__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__iifloordiv__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__iimod__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__iimul__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__ilshift__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__imod__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__imul__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__ior__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__irshift__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__isub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__ixor__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rifloordiv__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rimod__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rimul__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rmod__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "checkNonRValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getDestAddr",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getValueAddr",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "makeL",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "makeR",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "\n    Full variable.\n    ",
        "init": {
            "args": [
                "initval=0"
            ],
            "doc": ""
        }
    },
    {
        "name": "EUDXVariable",
        "methods": [
            {
                "name": "AddDest",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "AddMask",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AddMaskX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "AddNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AddNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "Assign",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "AtLeast",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtLeastX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "AtMost",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "AtMostX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "Exactly",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "ExactlyX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "GetVTable",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "MaskAtLeast",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "MaskAtLeastX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "MaskAtMost",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "MaskAtMostX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "MaskExactly",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "MaskExactlyX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "QueueAddTo",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "QueueAssignTo",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "QueueSubtractTo",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "SetDest",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "SetMask",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SetMaskX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "SetNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SetNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "SubtractDest",
                "args": [
                    "dest"
                ],
                "doc": ""
            },
            {
                "name": "SubtractMask",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SubtractMaskX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "SubtractNumber",
                "args": [
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "SubtractNumberX",
                "args": [
                    "value",
                    "mask"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__iadd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__iand__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__ifloordiv__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__iifloordiv__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__iimod__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__iimul__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__ilshift__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__imod__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__imul__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__ior__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__irshift__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__isub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__ixor__",
                "args": [
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    "x"
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rifloordiv__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rimod__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rimul__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rmod__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "lhs"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "x",
                    "y"
                ],
                "doc": ""
            },
            {
                "name": "checkNonRValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getDestAddr",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getMaskAddr",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "getValueAddr",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "makeL",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "makeR",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "initval=0",
                "mask=-1"
            ],
            "doc": ""
        }
    },
    {
        "name": "ExprProxy",
        "methods": [
            {
                "name": "__add__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getattribute__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getitem__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__setitem__",
                "args": [
                    "name",
                    "newvalue"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "getValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "cast",
                "args": [
                    "_from"
                ],
                "doc": ""
            }
        ],
        "doc": " Class which can contain both ConstExpr and EUDVariable ",
        "init": {
            "args": [
                "initval"
            ],
            "doc": ""
        }
    },
    {
        "name": "Forward",
        "methods": [
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "IsSet",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "Reset",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getitem__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "expr"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__setitem__",
                "args": [
                    "name",
                    "newvalue"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": "Class for forward definition.\n    ",
        "init": {
            "args": [
                ""
            ],
            "doc": ""
        }
    },
    {
        "name": "PVariable",
        "methods": [
            {
                "name": "__add__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__and__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__bool__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__call__",
                "args": [
                    "*args",
                    "**kwargs"
                ],
                "doc": ""
            },
            {
                "name": "__eq__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ge__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__getattr__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getattribute__",
                "args": [
                    "name"
                ],
                "doc": ""
            },
            {
                "name": "__getitem__",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "__gt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__hash__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__invert__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__iter__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__le__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lshift__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__lt__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ne__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__or__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rand__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rfloordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__ror__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rxor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__setitem__",
                "args": [
                    "i",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__xor__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "_consteudset",
                "args": [
                    "i",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "_constget",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "_constset",
                "args": [
                    "i",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "_eudget",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "_eudset",
                "args": [
                    "i",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "_get",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "_set",
                "args": [
                    "i",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "fill",
                "args": [
                    "values",
                    "*",
                    "assert_expected_values_len=None"
                ],
                "doc": ""
            },
            {
                "name": "get",
                "args": [
                    "i"
                ],
                "doc": ""
            },
            {
                "name": "getValue",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "set",
                "args": [
                    "i",
                    "value"
                ],
                "doc": ""
            },
            {
                "name": "cast",
                "args": [
                    "_from"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "initvars=None",
                "*",
                "_from=None"
            ],
            "doc": ""
        }
    },
    {
        "name": "RawTrigger",
        "methods": [
            {
                "name": "CollectDependency",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "DynamicConstructed",
                "args": [
                    ""
                ],
                "doc": " Whether function is constructed dynamically.\n\n        Dynamically constructed EUDObject may have their dependency list\n        generated during object construction. So their dependency list is\n        re-examined before allocation phase.\n        "
            },
            {
                "name": "Evaluate",
                "args": [
                    ""
                ],
                "doc": "\n        What this object should be evaluated to when used in eudplib program.\n\n        :return: Default) Memory address of this object.\n\n        .. note::\n            In overriding this method, you can use\n            :func:`eudplib.GetObjectAddr`.\n        "
            },
            {
                "name": "GetDataSize",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "GetNextPtrMemory",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "WritePayload",
                "args": [
                    "pbuffer"
                ],
                "doc": ""
            },
            {
                "name": "__add__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mod__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__neg__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__radd__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__rmul__",
                "args": [
                    "k"
                ],
                "doc": ""
            },
            {
                "name": "__rsub__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "other"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "prevptr=None",
                "nextptr=None",
                "conditions=None",
                "actions=None",
                "*args",
                "preserved=True",
                "trigSection=None"
            ],
            "doc": ""
        }
    },
    {
        "name": "RlocInt_C",
        "methods": [
            {
                "name": "__add__",
                "args": [
                    "lhs",
                    "rhs"
                ],
                "doc": ""
            },
            {
                "name": "__floordiv__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__mul__",
                "args": [
                    "other"
                ],
                "doc": ""
            },
            {
                "name": "__repr__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__str__",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "__sub__",
                "args": [
                    "lhs",
                    "rhs"
                ],
                "doc": ""
            }
        ],
        "doc": "Relocatable int",
        "init": {
            "args": [
                "offset",
                "rlocmode"
            ],
            "doc": ""
        }
    },
    {
        "name": "StringBuffer",
        "methods": [
            {
                "name": "Display",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "DisplayAt",
                "args": [
                    "line"
                ],
                "doc": ""
            },
            {
                "name": "Play",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "append",
                "args": [
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "appendf",
                "args": [
                    "format_string",
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "delete",
                "args": [
                    "start",
                    "length=1"
                ],
                "doc": ""
            },
            {
                "name": "fadeIn",
                "args": [
                    "*args",
                    "color=None",
                    "wait=1",
                    "reset=True",
                    "line=-1",
                    "tag=None"
                ],
                "doc": ""
            },
            {
                "name": "fadeInf",
                "args": [
                    "format_string",
                    "*args",
                    "color=None",
                    "wait=1",
                    "reset=True",
                    "line=-1",
                    "tag=None"
                ],
                "doc": ""
            },
            {
                "name": "fadeOut",
                "args": [
                    "*args",
                    "color=None",
                    "wait=1",
                    "reset=True",
                    "line=-1",
                    "tag=None"
                ],
                "doc": ""
            },
            {
                "name": "fadeOutf",
                "args": [
                    "format_string",
                    "*args",
                    "color=None",
                    "wait=1",
                    "reset=True",
                    "line=-1",
                    "tag=None"
                ],
                "doc": ""
            },
            {
                "name": "insert",
                "args": [
                    "index",
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "insertf",
                "args": [
                    "index",
                    "format_string",
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "length",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "print",
                "args": [
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "printAt",
                "args": [
                    "line",
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "printf",
                "args": [
                    "format_string",
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "printfAt",
                "args": [
                    "line",
                    "format_string",
                    "*args"
                ],
                "doc": ""
            },
            {
                "name": "CPBranch",
                "args": [
                    ""
                ],
                "doc": ""
            },
            {
                "name": "_init_template",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "Object for storing single modifiable string.\n\n    Manipluating STR section is easy. :)\n    You can do anything you would do with normal string with StringBuffer.\n    ",
        "init": {
            "args": [
                "content=None"
            ],
            "doc": "Constructor for StringBuffer\n\n        :param content: Initial StringBuffer content / capacity. Capacity of\n            StringBuffer is determined by size of this. If content is integer, then\n            initial capacity and content of StringBuffer will be set to\n            content(int) and empty string.\n\n        :type content: str, bytes, int\n        "
        }
    },
    {
        "name": "TBL",
        "methods": [
            {
                "name": "AddString",
                "args": [
                    "string"
                ],
                "doc": ""
            },
            {
                "name": "ForceAddString",
                "args": [
                    "string"
                ],
                "doc": ""
            },
            {
                "name": "GetString",
                "args": [
                    "index"
                ],
                "doc": ""
            },
            {
                "name": "GetStringIndex",
                "args": [
                    "string"
                ],
                "doc": ""
            },
            {
                "name": "LoadTBL",
                "args": [
                    "content"
                ],
                "doc": ""
            },
            {
                "name": "LoadTBLWithChk",
                "args": [
                    "content",
                    "init_chkt"
                ],
                "doc": ""
            },
            {
                "name": "SaveTBL",
                "args": [
                    ""
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [
                "content=None",
                "init_chkt=None",
                "load_entry=2",
                "save_entry=2"
            ],
            "doc": ""
        }
    },
    {
        "name": "TracebackType",
        "methods": [],
        "doc": "TracebackType(tb_next, tb_frame, tb_lasti, tb_lineno)\n--\n\nCreate a new traceback object.",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgAIScript",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgAllyStatus",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgComparison",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgCount",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgLocation",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgModifier",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgOrder",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgPlayer",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgPropState",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgProperty",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgResource",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgScore",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgString",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgSwitch",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgSwitchAction",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgSwitchState",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgTBL",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "TrgUnit",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "s"
                ],
                "doc": ""
            }
        ],
        "doc": "",
        "init": {
            "args": [],
            "doc": ""
        }
    },
    {
        "name": "UnitProperty",
        "methods": [],
        "doc": "\n    UnitProperty class. Used in 'Create Unit with Properties' action.\n    ",
        "init": {
            "args": [
                "hitpoint=None",
                "shield=None",
                "energy=None",
                "resource=None",
                "hanger=None",
                "cloaked=None",
                "burrowed=None",
                "intransit=None",
                "hallucinated=None",
                "invincible=None"
            ],
            "doc": "\n        Properties : Value/None (Don't care)\n\n        - hitpoint : 0~100(%)  if) When unit's hitpoint is greater than 167772,\n        - shield   : 0~100(%)   you should give hitpoint None to make 100%% HP.\n        - energy   : 0~100(%)\n        - resource : 0~4294967295\n        - hanger   : 0~65536 (Count)\n\n        Special properties : True(Enabled)/False(Disabled)/None(Don't care)\n\n        - clocked      : Unit is clocked.\n        - burrowed     : Unit is burrowed.\n        - intransit    : Unit is lifted. (In transit)\n        - hallucinated : Unit is hallucination.\n        - invincible   : Unit is invincible.\n\n        >>> UnitProperty(hitpoint = 50, burrowed = True) # HP 50%, burrowed\n        "
        }
    },
    {
        "name": "epd2s",
        "methods": [],
        "doc": "",
        "init": {
            "args": [
                "value"
            ],
            "doc": ""
        }
    },
    {
        "name": "hptr",
        "methods": [],
        "doc": "",
        "init": {
            "args": [
                "value"
            ],
            "doc": ""
        }
    },
    {
        "name": "ptr2s",
        "methods": [],
        "doc": "",
        "init": {
            "args": [
                "value"
            ],
            "doc": ""
        }
    },
    {
        "name": "selftype",
        "methods": [
            {
                "name": "cast",
                "args": [
                    "_from"
                ],
                "doc": ""
            }
        ],
        "doc": " When used in EUDFuncMethod's type declaration, This is interpreted\n    as the owning class itself\n    ",
        "init": {
            "args": [],
            "doc": ""
        }
    }
];