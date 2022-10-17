window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "autom",
          "french",
          "index",
          "readm",
          "robot",
          "systemsummari"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "Robot.html": [
          "class",
          "electron",
          "execut",
          "handl",
          "initi",
          "main",
          "program",
          "robot",
          "start",
          "task",
          "window"
        ],
        "Robot.html#.EXEC_FOLDER": [
          "disk",
          "exec_fold",
          "fetch",
          "find",
          "lt;static",
          "member",
          "program",
          "readonly&gt",
          "robot.exec_fold",
          "task'"
        ],
        "Robot.html#id": [
          "api_helper.credenti",
          "configur",
          "credenti",
          "fetch",
          "id",
          "member",
          "robot#id",
          "us"
        ],
        "Robot.html#_initBrowser": [
          "_initbrows",
          "browser",
          "function",
          "initi",
          "robot#_initbrows",
          "task'",
          "window"
        ],
        "Robot.html#_end": [
          "_end",
          "clean",
          "delet",
          "destroy",
          "end",
          "execut",
          "function",
          "robot",
          "robot#_end",
          "robot'",
          "run",
          "stop",
          "task",
          "task'",
          "window"
        ],
        "Robot.html#run": [
          "5s",
          "alway",
          "await",
          "call",
          "complet",
          "end",
          "entri",
          "execut",
          "fetch",
          "first",
          "function",
          "itself",
          "lt;async&gt",
          "main",
          "pend",
          "point",
          "potenti",
          "recurs",
          "robot",
          "robot#run",
          "run",
          "start",
          "task"
        ],
        "Robot.html#stop": [
          "call",
          "close",
          "error",
          "execut",
          "function",
          "internali",
          "public",
          "robot",
          "robot#stop",
          "robot._end",
          "stop",
          "task'",
          "trigger",
          "window",
          "windowclosedduringprocess"
        ],
        "Robot.html#pause": [
          "call",
          "function",
          "paus",
          "recurs",
          "robot#paus",
          "robot.run",
          "stop"
        ],
        "ScriptStep.html": [
          "class",
          "client",
          "execut",
          "script",
          "scriptstep",
          "step",
          "web"
        ],
        "ScriptStep.html#consoleMessage": [
          "callback",
          "consol",
          "consolemessag",
          "error",
          "event",
          "fetch",
          "function",
          "messag",
          "scriptstep#consolemessag",
          "store",
          "window'"
        ],
        "ScriptStep.html#_executeScript": [
          "_executescript",
          "append",
          "bind",
          "callback",
          "consol",
          "data",
          "event",
          "execut",
          "function",
          "lt;async&gt",
          "messag",
          "object",
          "return",
          "script",
          "scriptstep#_executescript",
          "sessiondata",
          "step'"
        ],
        "ScriptStep.html#init": [
          "access",
          "client",
          "env",
          "execut",
          "function",
          "init",
          "initi",
          "insid",
          "lt;async&gt",
          "prepend",
          "script",
          "scriptstep#init",
          "sessiondata",
          "step",
          "step'",
          "task'",
          "variabl",
          "web"
        ],
        "ScriptStep.html#_timedOut": [
          "_timedout",
          "function",
          "reach",
          "scriptstep#_timedout",
          "step'",
          "steperror",
          "timeout",
          "trigger"
        ],
        "ScriptStep.html#_stepActionsIterator": [
          "_stepactionsiter",
          "action",
          "download",
          "endwith",
          "execut",
          "function",
          "handl",
          "inputurl",
          "lt;generator&gt",
          "match",
          "provid",
          "script",
          "scriptstep#_stepactionsiter",
          "startwith",
          "step",
          "trigger",
          "yield"
        ],
        "ScriptStep.html#execute": [
          "creat",
          "entri",
          "execut",
          "function",
          "gener",
          "point",
          "provid",
          "scriptstep#execut",
          "startwith",
          "step",
          "stepactioniter",
          "trigger",
          "url"
        ],
        "ScriptStep.html#inputUrl": [
          "endwith",
          "function",
          "inputurl",
          "promis",
          "provid",
          "reach",
          "render",
          "resolv",
          "scriptstep#inputurl",
          "step'",
          "stepactioniter",
          "url"
        ],
        "ScriptStep.html#success": [
          "function",
          "promis",
          "resolv",
          "scriptstep#success",
          "step",
          "success"
        ],
        "ScriptStep.html#error": [
          "error",
          "function",
          "promis",
          "reject",
          "scriptstep#error",
          "step"
        ],
        "ScriptStep.html#domReady": [
          "boolean",
          "chang",
          "dom",
          "domreadi",
          "function",
          "pend",
          "script",
          "scriptstep#domreadi",
          "state",
          "trigger"
        ],
        "SequenceStep.html": [
          "class",
          "execut",
          "modul",
          "nodej",
          "sequencestep",
          "step"
        ],
        "SequenceStep.html#init": [
          "file",
          "function",
          "init",
          "initi",
          "lt;async&gt",
          "requir",
          "script",
          "sequence'",
          "sequencestep#init",
          "step"
        ],
        "SequenceStep.html#_executeScript": [
          "_executescript",
          "execut",
          "function",
          "lt;async&gt",
          "script",
          "sequence'",
          "sequencestep#_executescript"
        ],
        "Step.html": [
          "class",
          "lt;abstract&gt",
          "parent",
          "scriptstep",
          "sequencestep",
          "step"
        ],
        "Step.html#_timedOut": [
          "_timedout",
          "function",
          "reach",
          "step#_timedout",
          "step'",
          "steperror",
          "timeout",
          "trigger"
        ],
        "Step.html#_stepActionsIterator": [
          "_stepactionsiter",
          "action",
          "download",
          "endwith",
          "execut",
          "function",
          "handl",
          "inputurl",
          "lt;generator&gt",
          "match",
          "provid",
          "script",
          "startwith",
          "step",
          "step#_stepactionsiter",
          "trigger",
          "yield"
        ],
        "Step.html#execute": [
          "creat",
          "entri",
          "execut",
          "function",
          "gener",
          "point",
          "provid",
          "startwith",
          "step",
          "step#execut",
          "stepactioniter",
          "trigger",
          "url"
        ],
        "Step.html#inputUrl": [
          "endwith",
          "function",
          "inputurl",
          "promis",
          "provid",
          "reach",
          "render",
          "resolv",
          "step#inputurl",
          "step'",
          "stepactioniter",
          "url"
        ],
        "Step.html#success": [
          "function",
          "promis",
          "resolv",
          "step",
          "step#success",
          "success"
        ],
        "Step.html#error": [
          "error",
          "function",
          "promis",
          "reject",
          "step",
          "step#error"
        ],
        "Step.html#domReady": [
          "boolean",
          "chang",
          "dom",
          "domreadi",
          "function",
          "pend",
          "script",
          "state",
          "step#domreadi",
          "trigger"
        ],
        "Task.html": [
          "class",
          "config",
          "execut",
          "fetch",
          "file",
          "handl",
          "log",
          "pars",
          "program",
          "step",
          "task"
        ],
        "Task.html#.PENDING": [
          "api_helper.credenti",
          "id",
          "lt;static",
          "member",
          "pend",
          "readonly&gt",
          "statu",
          "task",
          "task.pend"
        ],
        "Task.html#.PROCESSING": [
          "api_helper.credenti",
          "id",
          "lt;static",
          "member",
          "process",
          "readonly&gt",
          "statu",
          "task",
          "task.process"
        ],
        "Task.html#.FAILED": [
          "api_helper.credenti",
          "fail",
          "id",
          "lt;static",
          "member",
          "readonly&gt",
          "statu",
          "task",
          "task.fail"
        ],
        "Task.html#.DONE": [
          "api_helper.credenti",
          "done",
          "id",
          "lt;static",
          "member",
          "readonly&gt",
          "statu",
          "task",
          "task.don"
        ],
        "Task.html#snippetUtils": [
          "constructor",
          "lt;readonly&gt",
          "member",
          "provid",
          "return",
          "snippetutil",
          "step",
          "task#snippetutil"
        ],
        "Task.html#.fetch": [
          "api",
          "class",
          "creat",
          "fetch",
          "function",
          "id",
          "lt;async",
          "match",
          "new",
          "pend",
          "process",
          "robot",
          "set",
          "static&gt",
          "statu",
          "succes",
          "task",
          "task'",
          "task.fetch",
          "upon"
        ],
        "Task.html#elapsedTime": [
          "elapsedtim",
          "function",
          "give",
          "millisecond",
          "number",
          "start",
          "task#elapsedtim",
          "task'",
          "time"
        ],
        "Task.html#log": [
          "api",
          "clean",
          "error",
          "execut",
          "file",
          "function",
          "handl",
          "json",
          "log",
          "param",
          "sent",
          "task#log",
          "task'",
          "task._logfilepath",
          "write"
        ],
        "Task.html#sendLogFile": [
          "api",
          "file",
          "function",
          "log",
          "lt;async&gt",
          "send",
          "sendlogfil",
          "task#sendlogfil"
        ],
        "Task.html#init": [
          "config",
          "download",
          "file",
          "function",
          "init",
          "initi",
          "lt;async&gt",
          "pars",
          "program",
          "task",
          "task#init",
          "task'",
          "unzip"
        ],
        "Task.html#executeSteps": [
          "array",
          "await",
          "complet",
          "depend",
          "executestep",
          "function",
          "initi",
          "loop",
          "lt;async&gt",
          "over",
          "scriptstep",
          "sequencestep",
          "start",
          "step",
          "step'",
          "task#executestep",
          "type"
        ],
        "Task.html#executeErrorSteps": [
          "array",
          "call",
          "definit",
          "error",
          "execut",
          "executeerrorstep",
          "function",
          "index",
          "lt;async&gt",
          "name",
          "normal",
          "onc",
          "onerror",
          "resolv",
          "step",
          "task#executeerrorstep",
          "task.executestep",
          "those",
          "trigger",
          "type",
          "valid"
        ],
        "Task.html#failed": [
          "api",
          "call",
          "error",
          "execut",
          "fail",
          "failur",
          "file",
          "function",
          "log",
          "lt;async&gt",
          "task",
          "task#fail",
          "task.fail",
          "through",
          "updat",
          "upon"
        ],
        "Task.html#finalize": [
          "call",
          "data",
          "execut",
          "file",
          "final",
          "function",
          "log",
          "lt;async&gt",
          "session",
          "success",
          "task",
          "task#fin",
          "task.don",
          "updat",
          "upon"
        ],
        "Task.html#start": [
          "alway",
          "api",
          "befor",
          "file",
          "function",
          "initi",
          "log",
          "lt;async&gt",
          "return",
          "send",
          "start",
          "task",
          "task#start",
          "task'"
        ],
        "Task.html#stop": [
          "download",
          "function",
          "pend",
          "promis",
          "reject",
          "stop",
          "task#stop",
          "task'"
        ],
        "Task.html#inputUrl": [
          "call",
          "client",
          "configur",
          "each",
          "function",
          "input",
          "inputurl",
          "load",
          "match",
          "ongo",
          "sent",
          "startwith/endwith",
          "step",
          "task#inputurl",
          "url",
          "us"
        ],
        "Task.html#willDownload": [
          "array",
          "build",
          "client",
          "download",
          "entri",
          "event",
          "file",
          "function",
          "inform",
          "name",
          "path",
          "save",
          "set",
          "task#willdownload",
          "trigger",
          "willdownload"
        ],
        "Task.html#domReady": [
          "chang",
          "dom",
          "domreadi",
          "execut",
          "function",
          "propag",
          "script",
          "state",
          "step",
          "stop/start",
          "task#domreadi"
        ],
        "module-api_helper.html": [
          "api_help",
          "modul",
          "module:api_help"
        ]
      },
      "length": 55
    },
    "tokenStore": {
      "root": {
        "5": {
          "docs": {},
          "s": {
            "docs": {
              "Robot.html#run": {
                "ref": "Robot.html#run",
                "tf": 2.631578947368421
              }
            }
          }
        },
        "docs": {},
        "a": {
          "docs": {},
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 200
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "i": {
              "docs": {
                "Task.html#.fetch": {
                  "ref": "Task.html#.fetch",
                  "tf": 5.263157894736842
                },
                "Task.html#log": {
                  "ref": "Task.html#log",
                  "tf": 3.3333333333333335
                },
                "Task.html#sendLogFile": {
                  "ref": "Task.html#sendLogFile",
                  "tf": 12.5
                },
                "Task.html#failed": {
                  "ref": "Task.html#failed",
                  "tf": 3.8461538461538463
                },
                "Task.html#start": {
                  "ref": "Task.html#start",
                  "tf": 4.545454545454546
                }
              },
              "_": {
                "docs": {},
                "h": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "p": {
                        "docs": {
                          "module-api_helper.html": {
                            "ref": "module-api_helper.html",
                            "tf": 600
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            ".": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "Robot.html#id": {
                                                  "ref": "Robot.html#id",
                                                  "tf": 10
                                                },
                                                "Task.html#.PENDING": {
                                                  "ref": "Task.html#.PENDING",
                                                  "tf": 10
                                                },
                                                "Task.html#.PROCESSING": {
                                                  "ref": "Task.html#.PROCESSING",
                                                  "tf": 10
                                                },
                                                "Task.html#.FAILED": {
                                                  "ref": "Task.html#.FAILED",
                                                  "tf": 10
                                                },
                                                "Task.html#.DONE": {
                                                  "ref": "Task.html#.DONE",
                                                  "tf": 10
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 3.571428571428571
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "w": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "Task.html#start": {
                      "ref": "Task.html#start",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            }
          },
          "w": {
            "docs": {},
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "Task.html#executeSteps": {
                      "ref": "Task.html#executeSteps",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "c": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "ScriptStep.html#init": {
                        "ref": "ScriptStep.html#init",
                        "tf": 3.571428571428571
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "ScriptStep.html#_stepActionsIterator": {
                        "ref": "ScriptStep.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "Step.html#_stepActionsIterator": {
                        "ref": "Step.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "Task.html#executeSteps": {
                      "ref": "Task.html#executeSteps",
                      "tf": 3.3333333333333335
                    },
                    "Task.html#executeErrorSteps": {
                      "ref": "Task.html#executeErrorSteps",
                      "tf": 5.555555555555555
                    },
                    "Task.html#willDownload": {
                      "ref": "Task.html#willDownload",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 200
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "Robot.html#.EXEC_FOLDER": {
                      "ref": "Robot.html#.EXEC_FOLDER",
                      "tf": 10
                    },
                    "Robot.html#id": {
                      "ref": "Robot.html#id",
                      "tf": 10
                    },
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "ScriptStep.html#consoleMessage": {
                      "ref": "ScriptStep.html#consoleMessage",
                      "tf": 5
                    },
                    "Task.html": {
                      "ref": "Task.html",
                      "tf": 3.8461538461538463
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 680.2631578947369
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Robot.html#.EXEC_FOLDER": {
                    "ref": "Robot.html#.EXEC_FOLDER",
                    "tf": 10
                  }
                }
              },
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "Task.html#finalize": {
                      "ref": "Task.html#finalize",
                      "tf": 700
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "SequenceStep.html#init": {
                    "ref": "SequenceStep.html#init",
                    "tf": 8.333333333333332
                  },
                  "Task.html": {
                    "ref": "Task.html",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#log": {
                    "ref": "Task.html#log",
                    "tf": 3.3333333333333335
                  },
                  "Task.html#sendLogFile": {
                    "ref": "Task.html#sendLogFile",
                    "tf": 12.5
                  },
                  "Task.html#init": {
                    "ref": "Task.html#init",
                    "tf": 5.555555555555555
                  },
                  "Task.html#failed": {
                    "ref": "Task.html#failed",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#finalize": {
                    "ref": "Task.html#finalize",
                    "tf": 4.166666666666666
                  },
                  "Task.html#start": {
                    "ref": "Task.html#start",
                    "tf": 4.545454545454546
                  },
                  "Task.html#willDownload": {
                    "ref": "Task.html#willDownload",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Robot.html#_initBrowser": {
                            "ref": "Robot.html#_initBrowser",
                            "tf": 110
                          },
                          "Robot.html#_end": {
                            "ref": "Robot.html#_end",
                            "tf": 110
                          },
                          "Robot.html#run": {
                            "ref": "Robot.html#run",
                            "tf": 110
                          },
                          "Robot.html#stop": {
                            "ref": "Robot.html#stop",
                            "tf": 113.57142857142857
                          },
                          "Robot.html#pause": {
                            "ref": "Robot.html#pause",
                            "tf": 110
                          },
                          "ScriptStep.html#consoleMessage": {
                            "ref": "ScriptStep.html#consoleMessage",
                            "tf": 110
                          },
                          "ScriptStep.html#_executeScript": {
                            "ref": "ScriptStep.html#_executeScript",
                            "tf": 110
                          },
                          "ScriptStep.html#init": {
                            "ref": "ScriptStep.html#init",
                            "tf": 110
                          },
                          "ScriptStep.html#_timedOut": {
                            "ref": "ScriptStep.html#_timedOut",
                            "tf": 110
                          },
                          "ScriptStep.html#_stepActionsIterator": {
                            "ref": "ScriptStep.html#_stepActionsIterator",
                            "tf": 110
                          },
                          "ScriptStep.html#execute": {
                            "ref": "ScriptStep.html#execute",
                            "tf": 110
                          },
                          "ScriptStep.html#inputUrl": {
                            "ref": "ScriptStep.html#inputUrl",
                            "tf": 110
                          },
                          "ScriptStep.html#success": {
                            "ref": "ScriptStep.html#success",
                            "tf": 110
                          },
                          "ScriptStep.html#error": {
                            "ref": "ScriptStep.html#error",
                            "tf": 110
                          },
                          "ScriptStep.html#domReady": {
                            "ref": "ScriptStep.html#domReady",
                            "tf": 110
                          },
                          "SequenceStep.html#init": {
                            "ref": "SequenceStep.html#init",
                            "tf": 110
                          },
                          "SequenceStep.html#_executeScript": {
                            "ref": "SequenceStep.html#_executeScript",
                            "tf": 110
                          },
                          "Step.html#_timedOut": {
                            "ref": "Step.html#_timedOut",
                            "tf": 110
                          },
                          "Step.html#_stepActionsIterator": {
                            "ref": "Step.html#_stepActionsIterator",
                            "tf": 110
                          },
                          "Step.html#execute": {
                            "ref": "Step.html#execute",
                            "tf": 110
                          },
                          "Step.html#inputUrl": {
                            "ref": "Step.html#inputUrl",
                            "tf": 110
                          },
                          "Step.html#success": {
                            "ref": "Step.html#success",
                            "tf": 110
                          },
                          "Step.html#error": {
                            "ref": "Step.html#error",
                            "tf": 110
                          },
                          "Step.html#domReady": {
                            "ref": "Step.html#domReady",
                            "tf": 110
                          },
                          "Task.html#.fetch": {
                            "ref": "Task.html#.fetch",
                            "tf": 110
                          },
                          "Task.html#elapsedTime": {
                            "ref": "Task.html#elapsedTime",
                            "tf": 110
                          },
                          "Task.html#log": {
                            "ref": "Task.html#log",
                            "tf": 110
                          },
                          "Task.html#sendLogFile": {
                            "ref": "Task.html#sendLogFile",
                            "tf": 110
                          },
                          "Task.html#init": {
                            "ref": "Task.html#init",
                            "tf": 110
                          },
                          "Task.html#executeSteps": {
                            "ref": "Task.html#executeSteps",
                            "tf": 110
                          },
                          "Task.html#executeErrorSteps": {
                            "ref": "Task.html#executeErrorSteps",
                            "tf": 110
                          },
                          "Task.html#failed": {
                            "ref": "Task.html#failed",
                            "tf": 110
                          },
                          "Task.html#finalize": {
                            "ref": "Task.html#finalize",
                            "tf": 110
                          },
                          "Task.html#start": {
                            "ref": "Task.html#start",
                            "tf": 110
                          },
                          "Task.html#stop": {
                            "ref": "Task.html#stop",
                            "tf": 110
                          },
                          "Task.html#inputUrl": {
                            "ref": "Task.html#inputUrl",
                            "tf": 110
                          },
                          "Task.html#willDownload": {
                            "ref": "Task.html#willDownload",
                            "tf": 110
                          },
                          "Task.html#domReady": {
                            "ref": "Task.html#domReady",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "Task.html#.FAILED": {
                    "ref": "Task.html#.FAILED",
                    "tf": 693.3333333333334
                  },
                  "Task.html#failed": {
                    "ref": "Task.html#failed",
                    "tf": 700
                  }
                },
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Task.html#failed": {
                        "ref": "Task.html#failed",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    },
                    "Task.html#executeErrorSteps": {
                      "ref": "Task.html#executeErrorSteps",
                      "tf": 1.8518518518518516
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "ScriptStep.html#init": {
                    "ref": "ScriptStep.html#init",
                    "tf": 700
                  },
                  "SequenceStep.html#init": {
                    "ref": "SequenceStep.html#init",
                    "tf": 700
                  },
                  "Task.html#init": {
                    "ref": "Task.html#init",
                    "tf": 700
                  }
                },
                "i": {
                  "docs": {
                    "Robot.html": {
                      "ref": "Robot.html",
                      "tf": 4.545454545454546
                    },
                    "Robot.html#_initBrowser": {
                      "ref": "Robot.html#_initBrowser",
                      "tf": 12.5
                    },
                    "ScriptStep.html#init": {
                      "ref": "ScriptStep.html#init",
                      "tf": 3.571428571428571
                    },
                    "SequenceStep.html#init": {
                      "ref": "SequenceStep.html#init",
                      "tf": 8.333333333333332
                    },
                    "Task.html#init": {
                      "ref": "Task.html#init",
                      "tf": 5.555555555555555
                    },
                    "Task.html#executeSteps": {
                      "ref": "Task.html#executeSteps",
                      "tf": 6.666666666666667
                    },
                    "Task.html#start": {
                      "ref": "Task.html#start",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {
                            "Robot.html#stop": {
                              "ref": "Robot.html#stop",
                              "tf": 3.571428571428571
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "ScriptStep.html#init": {
                      "ref": "ScriptStep.html#init",
                      "tf": 3.571428571428571
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "u": {
                "docs": {},
                "t": {
                  "docs": {
                    "Task.html#inputUrl": {
                      "ref": "Task.html#inputUrl",
                      "tf": 3.3333333333333335
                    }
                  },
                  "u": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "ScriptStep.html#_stepActionsIterator": {
                            "ref": "ScriptStep.html#_stepActionsIterator",
                            "tf": 3.8461538461538463
                          },
                          "ScriptStep.html#inputUrl": {
                            "ref": "ScriptStep.html#inputUrl",
                            "tf": 750
                          },
                          "Step.html#_stepActionsIterator": {
                            "ref": "Step.html#_stepActionsIterator",
                            "tf": 3.8461538461538463
                          },
                          "Step.html#inputUrl": {
                            "ref": "Step.html#inputUrl",
                            "tf": 750
                          },
                          "Task.html#inputUrl": {
                            "ref": "Task.html#inputUrl",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Task.html#willDownload": {
                        "ref": "Task.html#willDownload",
                        "tf": 3.3333333333333335
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "Robot.html#id": {
                "ref": "Robot.html#id",
                "tf": 750
              },
              "Task.html#.PENDING": {
                "ref": "Task.html#.PENDING",
                "tf": 10
              },
              "Task.html#.PROCESSING": {
                "ref": "Task.html#.PROCESSING",
                "tf": 10
              },
              "Task.html#.FAILED": {
                "ref": "Task.html#.FAILED",
                "tf": 10
              },
              "Task.html#.DONE": {
                "ref": "Task.html#.DONE",
                "tf": 10
              },
              "Task.html#.fetch": {
                "ref": "Task.html#.fetch",
                "tf": 2.631578947368421
              }
            }
          },
          "t": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "Robot.html#run": {
                        "ref": "Robot.html#run",
                        "tf": 2.631578947368421
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Robot.html#.EXEC_FOLDER": {
                                  "ref": "Robot.html#.EXEC_FOLDER",
                                  "tf": 33.33333333333333
                                },
                                "Task.html#.PENDING": {
                                  "ref": "Task.html#.PENDING",
                                  "tf": 33.33333333333333
                                },
                                "Task.html#.PROCESSING": {
                                  "ref": "Task.html#.PROCESSING",
                                  "tf": 33.33333333333333
                                },
                                "Task.html#.FAILED": {
                                  "ref": "Task.html#.FAILED",
                                  "tf": 33.33333333333333
                                },
                                "Task.html#.DONE": {
                                  "ref": "Task.html#.DONE",
                                  "tf": 33.33333333333333
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "ScriptStep.html#_timedOut": {
                      "ref": "ScriptStep.html#_timedOut",
                      "tf": 10
                    },
                    "ScriptStep.html#inputUrl": {
                      "ref": "ScriptStep.html#inputUrl",
                      "tf": 5
                    },
                    "Step.html#_timedOut": {
                      "ref": "Step.html#_timedOut",
                      "tf": 10
                    },
                    "Step.html#inputUrl": {
                      "ref": "Step.html#inputUrl",
                      "tf": 5
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Robot.html#run": {
                        "ref": "Robot.html#run",
                        "tf": 2.631578947368421
                      },
                      "Robot.html#pause": {
                        "ref": "Robot.html#pause",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 3.571428571428571
                      },
                      "Task.html#snippetUtils": {
                        "ref": "Task.html#snippetUtils",
                        "tf": 10
                      },
                      "Task.html#start": {
                        "ref": "Task.html#start",
                        "tf": 4.545454545454546
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "ScriptStep.html#inputUrl": {
                        "ref": "ScriptStep.html#inputUrl",
                        "tf": 5
                      },
                      "Step.html#inputUrl": {
                        "ref": "Step.html#inputUrl",
                        "tf": 5
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "o": {
                "docs": {},
                "l": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "ScriptStep.html#inputUrl": {
                        "ref": "ScriptStep.html#inputUrl",
                        "tf": 5
                      },
                      "ScriptStep.html#success": {
                        "ref": "ScriptStep.html#success",
                        "tf": 16.666666666666664
                      },
                      "Step.html#inputUrl": {
                        "ref": "Step.html#inputUrl",
                        "tf": 5
                      },
                      "Step.html#success": {
                        "ref": "Step.html#success",
                        "tf": 16.666666666666664
                      },
                      "Task.html#executeErrorSteps": {
                        "ref": "Task.html#executeErrorSteps",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            },
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "ScriptStep.html#error": {
                        "ref": "ScriptStep.html#error",
                        "tf": 16.666666666666664
                      },
                      "Step.html#error": {
                        "ref": "Step.html#error",
                        "tf": 16.666666666666664
                      },
                      "Task.html#stop": {
                        "ref": "Task.html#stop",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "i": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "SequenceStep.html#init": {
                        "ref": "SequenceStep.html#init",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "b": {
              "docs": {},
              "o": {
                "docs": {},
                "t": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 200
                    },
                    "Robot.html": {
                      "ref": "Robot.html",
                      "tf": 1904.5454545454545
                    },
                    "Robot.html#_end": {
                      "ref": "Robot.html#_end",
                      "tf": 3.8461538461538463
                    },
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "Robot.html#stop": {
                      "ref": "Robot.html#stop",
                      "tf": 3.571428571428571
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 2.631578947368421
                    }
                  },
                  ".": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "x": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "_": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Robot.html#.EXEC_FOLDER": {
                                          "ref": "Robot.html#.EXEC_FOLDER",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "_": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Robot.html#stop": {
                                "ref": "Robot.html#stop",
                                "tf": 3.571428571428571
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "Robot.html#pause": {
                              "ref": "Robot.html#pause",
                              "tf": 12.5
                            }
                          }
                        }
                      }
                    }
                  },
                  "#": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Robot.html#id": {
                            "ref": "Robot.html#id",
                            "tf": 1150
                          }
                        }
                      }
                    },
                    "_": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "w": {
                                      "docs": {},
                                      "s": {
                                        "docs": {
                                          "Robot.html#_initBrowser": {
                                            "ref": "Robot.html#_initBrowser",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Robot.html#_end": {
                                "ref": "Robot.html#_end",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "Robot.html#run": {
                              "ref": "Robot.html#run",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    },
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "Robot.html#stop": {
                                "ref": "Robot.html#stop",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Robot.html#pause": {
                                "ref": "Robot.html#pause",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "'": {
                    "docs": {
                      "Robot.html#_end": {
                        "ref": "Robot.html#_end",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {
                "Robot.html#_end": {
                  "ref": "Robot.html#_end",
                  "tf": 3.8461538461538463
                },
                "Robot.html#run": {
                  "ref": "Robot.html#run",
                  "tf": 700
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "y": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "index.html": {
                                      "ref": "index.html",
                                      "tf": 70
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "Robot.html": {
                      "ref": "Robot.html",
                      "tf": 4.545454545454546
                    },
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "Task.html#elapsedTime": {
                      "ref": "Task.html#elapsedTime",
                      "tf": 10
                    },
                    "Task.html#executeSteps": {
                      "ref": "Task.html#executeSteps",
                      "tf": 3.3333333333333335
                    },
                    "Task.html#start": {
                      "ref": "Task.html#start",
                      "tf": 704.5454545454545
                    }
                  },
                  "w": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {
                            "ScriptStep.html#_stepActionsIterator": {
                              "ref": "ScriptStep.html#_stepActionsIterator",
                              "tf": 3.8461538461538463
                            },
                            "ScriptStep.html#execute": {
                              "ref": "ScriptStep.html#execute",
                              "tf": 4.545454545454546
                            },
                            "Step.html#_stepActionsIterator": {
                              "ref": "Step.html#_stepActionsIterator",
                              "tf": 3.8461538461538463
                            },
                            "Step.html#execute": {
                              "ref": "Step.html#execute",
                              "tf": 4.545454545454546
                            }
                          },
                          "/": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "w": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {
                                            "Task.html#inputUrl": {
                                              "ref": "Task.html#inputUrl",
                                              "tf": 3.3333333333333335
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "e": {
                  "docs": {
                    "ScriptStep.html#domReady": {
                      "ref": "ScriptStep.html#domReady",
                      "tf": 7.142857142857142
                    },
                    "Step.html#domReady": {
                      "ref": "Step.html#domReady",
                      "tf": 7.142857142857142
                    },
                    "Task.html#domReady": {
                      "ref": "Task.html#domReady",
                      "tf": 11.11111111111111
                    }
                  }
                },
                "u": {
                  "docs": {
                    "Task.html#.PENDING": {
                      "ref": "Task.html#.PENDING",
                      "tf": 10
                    },
                    "Task.html#.PROCESSING": {
                      "ref": "Task.html#.PROCESSING",
                      "tf": 10
                    },
                    "Task.html#.FAILED": {
                      "ref": "Task.html#.FAILED",
                      "tf": 10
                    },
                    "Task.html#.DONE": {
                      "ref": "Task.html#.DONE",
                      "tf": 10
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 2.631578947368421
                    }
                  }
                },
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "g": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Task.html#.fetch": {
                              "ref": "Task.html#.fetch",
                              "tf": 25
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "Robot.html#_end": {
                    "ref": "Robot.html#_end",
                    "tf": 3.8461538461538463
                  },
                  "Robot.html#stop": {
                    "ref": "Robot.html#stop",
                    "tf": 753.5714285714286
                  },
                  "Robot.html#pause": {
                    "ref": "Robot.html#pause",
                    "tf": 12.5
                  },
                  "Task.html#stop": {
                    "ref": "Task.html#stop",
                    "tf": 758.3333333333334
                  }
                },
                "/": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Task.html#domReady": {
                                "ref": "Task.html#domReady",
                                "tf": 5.555555555555555
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "e": {
                  "docs": {
                    "ScriptStep.html#consoleMessage": {
                      "ref": "ScriptStep.html#consoleMessage",
                      "tf": 5
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "p": {
                "docs": {
                  "ScriptStep.html": {
                    "ref": "ScriptStep.html",
                    "tf": 10
                  },
                  "ScriptStep.html#init": {
                    "ref": "ScriptStep.html#init",
                    "tf": 3.571428571428571
                  },
                  "ScriptStep.html#_stepActionsIterator": {
                    "ref": "ScriptStep.html#_stepActionsIterator",
                    "tf": 3.8461538461538463
                  },
                  "ScriptStep.html#execute": {
                    "ref": "ScriptStep.html#execute",
                    "tf": 4.545454545454546
                  },
                  "ScriptStep.html#success": {
                    "ref": "ScriptStep.html#success",
                    "tf": 16.666666666666664
                  },
                  "ScriptStep.html#error": {
                    "ref": "ScriptStep.html#error",
                    "tf": 16.666666666666664
                  },
                  "SequenceStep.html": {
                    "ref": "SequenceStep.html",
                    "tf": 12.5
                  },
                  "SequenceStep.html#init": {
                    "ref": "SequenceStep.html#init",
                    "tf": 8.333333333333332
                  },
                  "Step.html": {
                    "ref": "Step.html",
                    "tf": 1850
                  },
                  "Step.html#_stepActionsIterator": {
                    "ref": "Step.html#_stepActionsIterator",
                    "tf": 3.8461538461538463
                  },
                  "Step.html#execute": {
                    "ref": "Step.html#execute",
                    "tf": 4.545454545454546
                  },
                  "Step.html#success": {
                    "ref": "Step.html#success",
                    "tf": 16.666666666666664
                  },
                  "Step.html#error": {
                    "ref": "Step.html#error",
                    "tf": 16.666666666666664
                  },
                  "Task.html": {
                    "ref": "Task.html",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#snippetUtils": {
                    "ref": "Task.html#snippetUtils",
                    "tf": 10
                  },
                  "Task.html#executeSteps": {
                    "ref": "Task.html#executeSteps",
                    "tf": 6.666666666666667
                  },
                  "Task.html#executeErrorSteps": {
                    "ref": "Task.html#executeErrorSteps",
                    "tf": 11.11111111111111
                  },
                  "Task.html#inputUrl": {
                    "ref": "Task.html#inputUrl",
                    "tf": 6.666666666666667
                  },
                  "Task.html#domReady": {
                    "ref": "Task.html#domReady",
                    "tf": 5.555555555555555
                  }
                },
                "'": {
                  "docs": {
                    "ScriptStep.html#_executeScript": {
                      "ref": "ScriptStep.html#_executeScript",
                      "tf": 3.571428571428571
                    },
                    "ScriptStep.html#init": {
                      "ref": "ScriptStep.html#init",
                      "tf": 3.571428571428571
                    },
                    "ScriptStep.html#_timedOut": {
                      "ref": "ScriptStep.html#_timedOut",
                      "tf": 10
                    },
                    "ScriptStep.html#inputUrl": {
                      "ref": "ScriptStep.html#inputUrl",
                      "tf": 5
                    },
                    "Step.html#_timedOut": {
                      "ref": "Step.html#_timedOut",
                      "tf": 10
                    },
                    "Step.html#inputUrl": {
                      "ref": "Step.html#inputUrl",
                      "tf": 5
                    },
                    "Task.html#executeSteps": {
                      "ref": "Task.html#executeSteps",
                      "tf": 3.3333333333333335
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "ScriptStep.html#_timedOut": {
                              "ref": "ScriptStep.html#_timedOut",
                              "tf": 10
                            },
                            "Step.html#_timedOut": {
                              "ref": "Step.html#_timedOut",
                              "tf": 10
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "ScriptStep.html#execute": {
                                        "ref": "ScriptStep.html#execute",
                                        "tf": 4.545454545454546
                                      },
                                      "ScriptStep.html#inputUrl": {
                                        "ref": "ScriptStep.html#inputUrl",
                                        "tf": 5
                                      },
                                      "Step.html#execute": {
                                        "ref": "Step.html#execute",
                                        "tf": 4.545454545454546
                                      },
                                      "Step.html#inputUrl": {
                                        "ref": "Step.html#inputUrl",
                                        "tf": 5
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "#": {
                  "docs": {},
                  "_": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Step.html#_timedOut": {
                                        "ref": "Step.html#_timedOut",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {
                                                    "Step.html#_stepActionsIterator": {
                                                      "ref": "Step.html#_stepActionsIterator",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "e": {
                    "docs": {},
                    "x": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Step.html#execute": {
                                  "ref": "Step.html#execute",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "r": {
                            "docs": {
                              "Step.html#error": {
                                "ref": "Step.html#error",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Step.html#inputUrl": {
                                      "ref": "Step.html#inputUrl",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "s": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "s": {
                                "docs": {
                                  "Step.html#success": {
                                    "ref": "Step.html#success",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Step.html#domReady": {
                                      "ref": "Step.html#domReady",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "p": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "ScriptStep.html": {
                        "ref": "ScriptStep.html",
                        "tf": 10
                      },
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 7.142857142857142
                      },
                      "ScriptStep.html#init": {
                        "ref": "ScriptStep.html#init",
                        "tf": 3.571428571428571
                      },
                      "ScriptStep.html#_stepActionsIterator": {
                        "ref": "ScriptStep.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "ScriptStep.html#domReady": {
                        "ref": "ScriptStep.html#domReady",
                        "tf": 7.142857142857142
                      },
                      "SequenceStep.html#init": {
                        "ref": "SequenceStep.html#init",
                        "tf": 8.333333333333332
                      },
                      "SequenceStep.html#_executeScript": {
                        "ref": "SequenceStep.html#_executeScript",
                        "tf": 16.666666666666664
                      },
                      "Step.html#_stepActionsIterator": {
                        "ref": "Step.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "Step.html#domReady": {
                        "ref": "Step.html#domReady",
                        "tf": 7.142857142857142
                      },
                      "Task.html#domReady": {
                        "ref": "Task.html#domReady",
                        "tf": 5.555555555555555
                      }
                    },
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "ScriptStep.html": {
                                "ref": "ScriptStep.html",
                                "tf": 1900
                              },
                              "Step.html": {
                                "ref": "Step.html",
                                "tf": 12.5
                              },
                              "Task.html#executeSteps": {
                                "ref": "Task.html#executeSteps",
                                "tf": 3.3333333333333335
                              }
                            },
                            "#": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {
                                                          "ScriptStep.html#consoleMessage": {
                                                            "ref": "ScriptStep.html#consoleMessage",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "_": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "x": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "ScriptStep.html#_executeScript": {
                                                              "ref": "ScriptStep.html#_executeScript",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "ScriptStep.html#_timedOut": {
                                                    "ref": "ScriptStep.html#_timedOut",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {
                                                                "ScriptStep.html#_stepActionsIterator": {
                                                                  "ref": "ScriptStep.html#_stepActionsIterator",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "ScriptStep.html#init": {
                                          "ref": "ScriptStep.html#init",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  },
                                  "p": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "u": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "ScriptStep.html#inputUrl": {
                                                  "ref": "ScriptStep.html#inputUrl",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "e": {
                                "docs": {},
                                "x": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "ScriptStep.html#execute": {
                                              "ref": "ScriptStep.html#execute",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "r": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "ScriptStep.html#error": {
                                            "ref": "ScriptStep.html#error",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "s": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "s": {
                                            "docs": {
                                              "ScriptStep.html#success": {
                                                "ref": "ScriptStep.html#success",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "d": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "ScriptStep.html#domReady": {
                                                  "ref": "ScriptStep.html#domReady",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Task.html#finalize": {
                          "ref": "Task.html#finalize",
                          "tf": 4.166666666666666
                        }
                      },
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "ScriptStep.html#_executeScript": {
                                  "ref": "ScriptStep.html#_executeScript",
                                  "tf": 3.571428571428571
                                },
                                "ScriptStep.html#init": {
                                  "ref": "ScriptStep.html#init",
                                  "tf": 3.571428571428571
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "p": {
                                "docs": {
                                  "SequenceStep.html": {
                                    "ref": "SequenceStep.html",
                                    "tf": 1900
                                  },
                                  "Step.html": {
                                    "ref": "Step.html",
                                    "tf": 12.5
                                  },
                                  "Task.html#executeSteps": {
                                    "ref": "Task.html#executeSteps",
                                    "tf": 3.3333333333333335
                                  }
                                },
                                "#": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "SequenceStep.html#init": {
                                              "ref": "SequenceStep.html#init",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "_": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "x": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "SequenceStep.html#_executeScript": {
                                                                  "ref": "SequenceStep.html#_executeScript",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "'": {
                          "docs": {
                            "SequenceStep.html#init": {
                              "ref": "SequenceStep.html#init",
                              "tf": 8.333333333333332
                            },
                            "SequenceStep.html#_executeScript": {
                              "ref": "SequenceStep.html#_executeScript",
                              "tf": 16.666666666666664
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {
                "Task.html#.fetch": {
                  "ref": "Task.html#.fetch",
                  "tf": 2.631578947368421
                },
                "Task.html#willDownload": {
                  "ref": "Task.html#willDownload",
                  "tf": 3.3333333333333335
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "Task.html#log": {
                    "ref": "Task.html#log",
                    "tf": 3.3333333333333335
                  },
                  "Task.html#inputUrl": {
                    "ref": "Task.html#inputUrl",
                    "tf": 3.3333333333333335
                  }
                }
              },
              "d": {
                "docs": {
                  "Task.html#sendLogFile": {
                    "ref": "Task.html#sendLogFile",
                    "tf": 12.5
                  },
                  "Task.html#start": {
                    "ref": "Task.html#start",
                    "tf": 4.545454545454546
                  }
                },
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "f": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Task.html#sendLogFile": {
                                "ref": "Task.html#sendLogFile",
                                "tf": 700
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "c": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Task.html#.fetch": {
                        "ref": "Task.html#.fetch",
                        "tf": 2.631578947368421
                      }
                    },
                    "s": {
                      "docs": {
                        "ScriptStep.html#success": {
                          "ref": "ScriptStep.html#success",
                          "tf": 750
                        },
                        "Step.html#success": {
                          "ref": "Step.html#success",
                          "tf": 750
                        },
                        "Task.html#finalize": {
                          "ref": "Task.html#finalize",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "i": {
              "docs": {},
              "p": {
                "docs": {},
                "p": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "Task.html#snippetUtils": {
                                  "ref": "Task.html#snippetUtils",
                                  "tf": 710
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Task.html#willDownload": {
                    "ref": "Task.html#willDownload",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "w": {
              "docs": {},
              "n": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "ScriptStep.html#_stepActionsIterator": {
                            "ref": "ScriptStep.html#_stepActionsIterator",
                            "tf": 3.8461538461538463
                          },
                          "Step.html#_stepActionsIterator": {
                            "ref": "Step.html#_stepActionsIterator",
                            "tf": 3.8461538461538463
                          },
                          "Task.html#init": {
                            "ref": "Task.html#init",
                            "tf": 5.555555555555555
                          },
                          "Task.html#stop": {
                            "ref": "Task.html#stop",
                            "tf": 8.333333333333332
                          },
                          "Task.html#willDownload": {
                            "ref": "Task.html#willDownload",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {
                "ScriptStep.html#domReady": {
                  "ref": "ScriptStep.html#domReady",
                  "tf": 7.142857142857142
                },
                "Step.html#domReady": {
                  "ref": "Step.html#domReady",
                  "tf": 7.142857142857142
                },
                "Task.html#domReady": {
                  "ref": "Task.html#domReady",
                  "tf": 5.555555555555555
                }
              },
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "ScriptStep.html#domReady": {
                            "ref": "ScriptStep.html#domReady",
                            "tf": 750
                          },
                          "Step.html#domReady": {
                            "ref": "Step.html#domReady",
                            "tf": 750
                          },
                          "Task.html#domReady": {
                            "ref": "Task.html#domReady",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {
                  "Task.html#.DONE": {
                    "ref": "Task.html#.DONE",
                    "tf": 693.3333333333334
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "k": {
                "docs": {
                  "Robot.html#.EXEC_FOLDER": {
                    "ref": "Robot.html#.EXEC_FOLDER",
                    "tf": 10
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "Robot.html#_end": {
                      "ref": "Robot.html#_end",
                      "tf": 7.6923076923076925
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "Robot.html#_end": {
                          "ref": "Robot.html#_end",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Task.html#executeSteps": {
                        "ref": "Task.html#executeSteps",
                        "tf": 3.3333333333333335
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Task.html#executeErrorSteps": {
                          "ref": "Task.html#executeErrorSteps",
                          "tf": 3.7037037037037033
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "ScriptStep.html#_executeScript": {
                    "ref": "ScriptStep.html#_executeScript",
                    "tf": 3.571428571428571
                  },
                  "Task.html#finalize": {
                    "ref": "Task.html#finalize",
                    "tf": 4.166666666666666
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "ScriptStep.html#execute": {
                      "ref": "ScriptStep.html#execute",
                      "tf": 4.545454545454546
                    },
                    "Step.html#execute": {
                      "ref": "Step.html#execute",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Task.html#elapsedTime": {
                    "ref": "Task.html#elapsedTime",
                    "tf": 10
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Robot.html": {
                      "ref": "Robot.html",
                      "tf": 114.54545454545455
                    },
                    "ScriptStep.html": {
                      "ref": "ScriptStep.html",
                      "tf": 110
                    },
                    "SequenceStep.html": {
                      "ref": "SequenceStep.html",
                      "tf": 110
                    },
                    "Step.html": {
                      "ref": "Step.html",
                      "tf": 122.5
                    },
                    "Task.html": {
                      "ref": "Task.html",
                      "tf": 110
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "n": {
                  "docs": {
                    "Robot.html#_end": {
                      "ref": "Robot.html#_end",
                      "tf": 3.8461538461538463
                    },
                    "Task.html#log": {
                      "ref": "Task.html#log",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "s": {
                "docs": {},
                "e": {
                  "docs": {
                    "Robot.html#stop": {
                      "ref": "Robot.html#stop",
                      "tf": 3.571428571428571
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "ScriptStep.html": {
                        "ref": "ScriptStep.html",
                        "tf": 10
                      },
                      "ScriptStep.html#init": {
                        "ref": "ScriptStep.html#init",
                        "tf": 3.571428571428571
                      },
                      "Task.html#inputUrl": {
                        "ref": "Task.html#inputUrl",
                        "tf": 3.3333333333333335
                      },
                      "Task.html#willDownload": {
                        "ref": "Task.html#willDownload",
                        "tf": 3.3333333333333335
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Task.html": {
                        "ref": "Task.html",
                        "tf": 3.8461538461538463
                      },
                      "Task.html#init": {
                        "ref": "Task.html#init",
                        "tf": 5.555555555555555
                      }
                    },
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Robot.html#id": {
                            "ref": "Robot.html#id",
                            "tf": 10
                          },
                          "Task.html#inputUrl": {
                            "ref": "Task.html#inputUrl",
                            "tf": 3.3333333333333335
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "ScriptStep.html#consoleMessage": {
                        "ref": "ScriptStep.html#consoleMessage",
                        "tf": 10
                      },
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 3.571428571428571
                      }
                    },
                    "e": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "ScriptStep.html#consoleMessage": {
                                      "ref": "ScriptStep.html#consoleMessage",
                                      "tf": 750
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Task.html#snippetUtils": {
                                  "ref": "Task.html#snippetUtils",
                                  "tf": 10
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Robot.html#run": {
                          "ref": "Robot.html#run",
                          "tf": 2.631578947368421
                        },
                        "Task.html#executeSteps": {
                          "ref": "Task.html#executeSteps",
                          "tf": 3.3333333333333335
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "d": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Robot.html#id": {
                            "ref": "Robot.html#id",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "ScriptStep.html#execute": {
                      "ref": "ScriptStep.html#execute",
                      "tf": 4.545454545454546
                    },
                    "Step.html#execute": {
                      "ref": "Step.html#execute",
                      "tf": 4.545454545454546
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "Robot.html#run": {
                    "ref": "Robot.html#run",
                    "tf": 2.631578947368421
                  },
                  "Robot.html#stop": {
                    "ref": "Robot.html#stop",
                    "tf": 3.571428571428571
                  },
                  "Robot.html#pause": {
                    "ref": "Robot.html#pause",
                    "tf": 12.5
                  },
                  "Task.html#executeErrorSteps": {
                    "ref": "Task.html#executeErrorSteps",
                    "tf": 1.8518518518518516
                  },
                  "Task.html#failed": {
                    "ref": "Task.html#failed",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#finalize": {
                    "ref": "Task.html#finalize",
                    "tf": 4.166666666666666
                  },
                  "Task.html#inputUrl": {
                    "ref": "Task.html#inputUrl",
                    "tf": 3.3333333333333335
                  }
                },
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "k": {
                        "docs": {
                          "ScriptStep.html#consoleMessage": {
                            "ref": "ScriptStep.html#consoleMessage",
                            "tf": 5
                          },
                          "ScriptStep.html#_executeScript": {
                            "ref": "ScriptStep.html#_executeScript",
                            "tf": 3.571428571428571
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "g": {
                  "docs": {
                    "ScriptStep.html#domReady": {
                      "ref": "ScriptStep.html#domReady",
                      "tf": 7.142857142857142
                    },
                    "Step.html#domReady": {
                      "ref": "Step.html#domReady",
                      "tf": 7.142857142857142
                    },
                    "Task.html#domReady": {
                      "ref": "Task.html#domReady",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {
                            "Robot.html#.EXEC_FOLDER": {
                              "ref": "Robot.html#.EXEC_FOLDER",
                              "tf": 33.33333333333333
                            },
                            "Task.html#.PENDING": {
                              "ref": "Task.html#.PENDING",
                              "tf": 33.33333333333333
                            },
                            "Task.html#.PROCESSING": {
                              "ref": "Task.html#.PROCESSING",
                              "tf": 33.33333333333333
                            },
                            "Task.html#.FAILED": {
                              "ref": "Task.html#.FAILED",
                              "tf": 33.33333333333333
                            },
                            "Task.html#.DONE": {
                              "ref": "Task.html#.DONE",
                              "tf": 33.33333333333333
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "Task.html#.fetch": {
                            "ref": "Task.html#.fetch",
                            "tf": 25
                          }
                        },
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Robot.html#run": {
                                  "ref": "Robot.html#run",
                                  "tf": 50
                                },
                                "ScriptStep.html#_executeScript": {
                                  "ref": "ScriptStep.html#_executeScript",
                                  "tf": 50
                                },
                                "ScriptStep.html#init": {
                                  "ref": "ScriptStep.html#init",
                                  "tf": 50
                                },
                                "SequenceStep.html#init": {
                                  "ref": "SequenceStep.html#init",
                                  "tf": 50
                                },
                                "SequenceStep.html#_executeScript": {
                                  "ref": "SequenceStep.html#_executeScript",
                                  "tf": 50
                                },
                                "Task.html#sendLogFile": {
                                  "ref": "Task.html#sendLogFile",
                                  "tf": 50
                                },
                                "Task.html#init": {
                                  "ref": "Task.html#init",
                                  "tf": 50
                                },
                                "Task.html#executeSteps": {
                                  "ref": "Task.html#executeSteps",
                                  "tf": 50
                                },
                                "Task.html#executeErrorSteps": {
                                  "ref": "Task.html#executeErrorSteps",
                                  "tf": 50
                                },
                                "Task.html#failed": {
                                  "ref": "Task.html#failed",
                                  "tf": 50
                                },
                                "Task.html#finalize": {
                                  "ref": "Task.html#finalize",
                                  "tf": 50
                                },
                                "Task.html#start": {
                                  "ref": "Task.html#start",
                                  "tf": 50
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Step.html": {
                                        "ref": "Step.html",
                                        "tf": 50
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "&": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "ScriptStep.html#_stepActionsIterator": {
                                          "ref": "ScriptStep.html#_stepActionsIterator",
                                          "tf": 50
                                        },
                                        "Step.html#_stepActionsIterator": {
                                          "ref": "Step.html#_stepActionsIterator",
                                          "tf": 50
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Task.html#snippetUtils": {
                                        "ref": "Task.html#snippetUtils",
                                        "tf": 50
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "g": {
              "docs": {
                "Task.html": {
                  "ref": "Task.html",
                  "tf": 3.8461538461538463
                },
                "Task.html#log": {
                  "ref": "Task.html#log",
                  "tf": 710
                },
                "Task.html#sendLogFile": {
                  "ref": "Task.html#sendLogFile",
                  "tf": 12.5
                },
                "Task.html#failed": {
                  "ref": "Task.html#failed",
                  "tf": 3.8461538461538463
                },
                "Task.html#finalize": {
                  "ref": "Task.html#finalize",
                  "tf": 4.166666666666666
                },
                "Task.html#start": {
                  "ref": "Task.html#start",
                  "tf": 4.545454545454546
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "Task.html#executeSteps": {
                    "ref": "Task.html#executeSteps",
                    "tf": 3.3333333333333335
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "Task.html#inputUrl": {
                    "ref": "Task.html#inputUrl",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "SequenceStep.html": {
                      "ref": "SequenceStep.html",
                      "tf": 12.5
                    },
                    "module-api_helper.html": {
                      "ref": "module-api_helper.html",
                      "tf": 110
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "_": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "p": {
                                      "docs": {
                                        "module-api_helper.html": {
                                          "ref": "module-api_helper.html",
                                          "tf": 1300
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "i": {
              "docs": {},
              "n": {
                "docs": {
                  "Robot.html": {
                    "ref": "Robot.html",
                    "tf": 4.545454545454546
                  },
                  "Robot.html#run": {
                    "ref": "Robot.html#run",
                    "tf": 2.631578947368421
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "ScriptStep.html#_stepActionsIterator": {
                      "ref": "ScriptStep.html#_stepActionsIterator",
                      "tf": 3.8461538461538463
                    },
                    "Step.html#_stepActionsIterator": {
                      "ref": "Step.html#_stepActionsIterator",
                      "tf": 3.8461538461538463
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 2.631578947368421
                    },
                    "Task.html#inputUrl": {
                      "ref": "Task.html#inputUrl",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Robot.html#.EXEC_FOLDER": {
                        "ref": "Robot.html#.EXEC_FOLDER",
                        "tf": 110
                      },
                      "Robot.html#id": {
                        "ref": "Robot.html#id",
                        "tf": 110
                      },
                      "Task.html#.PENDING": {
                        "ref": "Task.html#.PENDING",
                        "tf": 110
                      },
                      "Task.html#.PROCESSING": {
                        "ref": "Task.html#.PROCESSING",
                        "tf": 110
                      },
                      "Task.html#.FAILED": {
                        "ref": "Task.html#.FAILED",
                        "tf": 110
                      },
                      "Task.html#.DONE": {
                        "ref": "Task.html#.DONE",
                        "tf": 110
                      },
                      "Task.html#snippetUtils": {
                        "ref": "Task.html#snippetUtils",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "ScriptStep.html#consoleMessage": {
                        "ref": "ScriptStep.html#consoleMessage",
                        "tf": 10
                      },
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 3.571428571428571
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "d": {
                              "docs": {
                                "Task.html#elapsedTime": {
                                  "ref": "Task.html#elapsedTime",
                                  "tf": 10
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "l": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Robot.html": {
                            "ref": "Robot.html",
                            "tf": 4.545454545454546
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "Task.html#elapsedTime": {
                                "ref": "Task.html#elapsedTime",
                                "tf": 700
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "x": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Robot.html": {
                        "ref": "Robot.html",
                        "tf": 4.545454545454546
                      },
                      "Robot.html#_end": {
                        "ref": "Robot.html#_end",
                        "tf": 3.8461538461538463
                      },
                      "Robot.html#run": {
                        "ref": "Robot.html#run",
                        "tf": 2.631578947368421
                      },
                      "Robot.html#stop": {
                        "ref": "Robot.html#stop",
                        "tf": 3.571428571428571
                      },
                      "ScriptStep.html": {
                        "ref": "ScriptStep.html",
                        "tf": 10
                      },
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 3.571428571428571
                      },
                      "ScriptStep.html#init": {
                        "ref": "ScriptStep.html#init",
                        "tf": 3.571428571428571
                      },
                      "ScriptStep.html#_stepActionsIterator": {
                        "ref": "ScriptStep.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "ScriptStep.html#execute": {
                        "ref": "ScriptStep.html#execute",
                        "tf": 754.5454545454545
                      },
                      "SequenceStep.html": {
                        "ref": "SequenceStep.html",
                        "tf": 12.5
                      },
                      "SequenceStep.html#_executeScript": {
                        "ref": "SequenceStep.html#_executeScript",
                        "tf": 16.666666666666664
                      },
                      "Step.html#_stepActionsIterator": {
                        "ref": "Step.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "Step.html#execute": {
                        "ref": "Step.html#execute",
                        "tf": 754.5454545454545
                      },
                      "Task.html": {
                        "ref": "Task.html",
                        "tf": 3.8461538461538463
                      },
                      "Task.html#log": {
                        "ref": "Task.html#log",
                        "tf": 3.3333333333333335
                      },
                      "Task.html#executeErrorSteps": {
                        "ref": "Task.html#executeErrorSteps",
                        "tf": 1.8518518518518516
                      },
                      "Task.html#failed": {
                        "ref": "Task.html#failed",
                        "tf": 7.6923076923076925
                      },
                      "Task.html#finalize": {
                        "ref": "Task.html#finalize",
                        "tf": 8.333333333333332
                      },
                      "Task.html#domReady": {
                        "ref": "Task.html#domReady",
                        "tf": 5.555555555555555
                      }
                    },
                    "e": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "p": {
                              "docs": {
                                "Task.html#executeSteps": {
                                  "ref": "Task.html#executeSteps",
                                  "tf": 700
                                }
                              }
                            }
                          }
                        }
                      },
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "p": {
                                        "docs": {
                                          "Task.html#executeErrorSteps": {
                                            "ref": "Task.html#executeErrorSteps",
                                            "tf": 700
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "_": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Robot.html#.EXEC_FOLDER": {
                              "ref": "Robot.html#.EXEC_FOLDER",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "d": {
              "docs": {
                "Robot.html#_end": {
                  "ref": "Robot.html#_end",
                  "tf": 3.8461538461538463
                },
                "Robot.html#run": {
                  "ref": "Robot.html#run",
                  "tf": 2.631578947368421
                }
              },
              "w": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "ScriptStep.html#_stepActionsIterator": {
                          "ref": "ScriptStep.html#_stepActionsIterator",
                          "tf": 3.8461538461538463
                        },
                        "ScriptStep.html#inputUrl": {
                          "ref": "ScriptStep.html#inputUrl",
                          "tf": 5
                        },
                        "Step.html#_stepActionsIterator": {
                          "ref": "Step.html#_stepActionsIterator",
                          "tf": 3.8461538461538463
                        },
                        "Step.html#inputUrl": {
                          "ref": "Step.html#inputUrl",
                          "tf": 5
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "ScriptStep.html#execute": {
                      "ref": "ScriptStep.html#execute",
                      "tf": 4.545454545454546
                    },
                    "Step.html#execute": {
                      "ref": "Step.html#execute",
                      "tf": 4.545454545454546
                    },
                    "Task.html#willDownload": {
                      "ref": "Task.html#willDownload",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {
                "ScriptStep.html#init": {
                  "ref": "ScriptStep.html#init",
                  "tf": 3.571428571428571
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Robot.html#stop": {
                      "ref": "Robot.html#stop",
                      "tf": 3.571428571428571
                    },
                    "ScriptStep.html#consoleMessage": {
                      "ref": "ScriptStep.html#consoleMessage",
                      "tf": 5
                    },
                    "ScriptStep.html#error": {
                      "ref": "ScriptStep.html#error",
                      "tf": 750
                    },
                    "Step.html#error": {
                      "ref": "Step.html#error",
                      "tf": 750
                    },
                    "Task.html#log": {
                      "ref": "Task.html#log",
                      "tf": 3.3333333333333335
                    },
                    "Task.html#executeErrorSteps": {
                      "ref": "Task.html#executeErrorSteps",
                      "tf": 3.7037037037037033
                    },
                    "Task.html#failed": {
                      "ref": "Task.html#failed",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "ScriptStep.html#consoleMessage": {
                      "ref": "ScriptStep.html#consoleMessage",
                      "tf": 5
                    },
                    "ScriptStep.html#_executeScript": {
                      "ref": "ScriptStep.html#_executeScript",
                      "tf": 3.571428571428571
                    },
                    "Task.html#willDownload": {
                      "ref": "Task.html#willDownload",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Task.html#inputUrl": {
                    "ref": "Task.html#inputUrl",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "Robot.html": {
                      "ref": "Robot.html",
                      "tf": 4.545454545454546
                    },
                    "ScriptStep.html#_stepActionsIterator": {
                      "ref": "ScriptStep.html#_stepActionsIterator",
                      "tf": 3.8461538461538463
                    },
                    "Step.html#_stepActionsIterator": {
                      "ref": "Step.html#_stepActionsIterator",
                      "tf": 3.8461538461538463
                    },
                    "Task.html": {
                      "ref": "Task.html",
                      "tf": 3.8461538461538463
                    },
                    "Task.html#log": {
                      "ref": "Task.html#log",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "g": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Robot.html": {
                          "ref": "Robot.html",
                          "tf": 4.545454545454546
                        },
                        "Robot.html#.EXEC_FOLDER": {
                          "ref": "Robot.html#.EXEC_FOLDER",
                          "tf": 10
                        },
                        "Task.html": {
                          "ref": "Task.html",
                          "tf": 3.8461538461538463
                        },
                        "Task.html#init": {
                          "ref": "Task.html#init",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "ScriptStep.html#_stepActionsIterator": {
                        "ref": "ScriptStep.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "ScriptStep.html#execute": {
                        "ref": "ScriptStep.html#execute",
                        "tf": 4.545454545454546
                      },
                      "ScriptStep.html#inputUrl": {
                        "ref": "ScriptStep.html#inputUrl",
                        "tf": 5
                      },
                      "Step.html#_stepActionsIterator": {
                        "ref": "Step.html#_stepActionsIterator",
                        "tf": 3.8461538461538463
                      },
                      "Step.html#execute": {
                        "ref": "Step.html#execute",
                        "tf": 4.545454545454546
                      },
                      "Step.html#inputUrl": {
                        "ref": "Step.html#inputUrl",
                        "tf": 5
                      },
                      "Task.html#snippetUtils": {
                        "ref": "Task.html#snippetUtils",
                        "tf": 10
                      }
                    }
                  }
                }
              },
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "ScriptStep.html#inputUrl": {
                        "ref": "ScriptStep.html#inputUrl",
                        "tf": 5
                      },
                      "ScriptStep.html#success": {
                        "ref": "ScriptStep.html#success",
                        "tf": 16.666666666666664
                      },
                      "ScriptStep.html#error": {
                        "ref": "ScriptStep.html#error",
                        "tf": 16.666666666666664
                      },
                      "Step.html#inputUrl": {
                        "ref": "Step.html#inputUrl",
                        "tf": 5
                      },
                      "Step.html#success": {
                        "ref": "Step.html#success",
                        "tf": 16.666666666666664
                      },
                      "Step.html#error": {
                        "ref": "Step.html#error",
                        "tf": 16.666666666666664
                      },
                      "Task.html#stop": {
                        "ref": "Task.html#stop",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Task.html#.PROCESSING": {
                          "ref": "Task.html#.PROCESSING",
                          "tf": 693.3333333333334
                        },
                        "Task.html#.fetch": {
                          "ref": "Task.html#.fetch",
                          "tf": 2.631578947368421
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Task.html#domReady": {
                        "ref": "Task.html#domReady",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "ScriptStep.html#init": {
                          "ref": "ScriptStep.html#init",
                          "tf": 3.571428571428571
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Robot.html#run": {
                    "ref": "Robot.html#run",
                    "tf": 2.631578947368421
                  },
                  "ScriptStep.html#domReady": {
                    "ref": "ScriptStep.html#domReady",
                    "tf": 7.142857142857142
                  },
                  "Step.html#domReady": {
                    "ref": "Step.html#domReady",
                    "tf": 7.142857142857142
                  },
                  "Task.html#.PENDING": {
                    "ref": "Task.html#.PENDING",
                    "tf": 693.3333333333334
                  },
                  "Task.html#.fetch": {
                    "ref": "Task.html#.fetch",
                    "tf": 2.631578947368421
                  },
                  "Task.html#stop": {
                    "ref": "Task.html#stop",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "i": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Robot.html#run": {
                      "ref": "Robot.html#run",
                      "tf": 2.631578947368421
                    },
                    "ScriptStep.html#execute": {
                      "ref": "ScriptStep.html#execute",
                      "tf": 4.545454545454546
                    },
                    "Step.html#execute": {
                      "ref": "Step.html#execute",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Robot.html#run": {
                          "ref": "Robot.html#run",
                          "tf": 2.631578947368421
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Robot.html#stop": {
                        "ref": "Robot.html#stop",
                        "tf": 3.571428571428571
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "s": {
                "docs": {
                  "Robot.html#pause": {
                    "ref": "Robot.html#pause",
                    "tf": 750
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Step.html": {
                        "ref": "Step.html",
                        "tf": 12.5
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {
                  "Task.html": {
                    "ref": "Task.html",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#init": {
                    "ref": "Task.html#init",
                    "tf": 5.555555555555555
                  }
                }
              },
              "a": {
                "docs": {},
                "m": {
                  "docs": {
                    "Task.html#log": {
                      "ref": "Task.html#log",
                      "tf": 50
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "Task.html#willDownload": {
                    "ref": "Task.html#willDownload",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "k": {
                "docs": {
                  "Robot.html": {
                    "ref": "Robot.html",
                    "tf": 4.545454545454546
                  },
                  "Robot.html#_end": {
                    "ref": "Robot.html#_end",
                    "tf": 3.8461538461538463
                  },
                  "Robot.html#run": {
                    "ref": "Robot.html#run",
                    "tf": 2.631578947368421
                  },
                  "Task.html": {
                    "ref": "Task.html",
                    "tf": 1915.3846153846155
                  },
                  "Task.html#.PENDING": {
                    "ref": "Task.html#.PENDING",
                    "tf": 10
                  },
                  "Task.html#.PROCESSING": {
                    "ref": "Task.html#.PROCESSING",
                    "tf": 10
                  },
                  "Task.html#.FAILED": {
                    "ref": "Task.html#.FAILED",
                    "tf": 10
                  },
                  "Task.html#.DONE": {
                    "ref": "Task.html#.DONE",
                    "tf": 10
                  },
                  "Task.html#.fetch": {
                    "ref": "Task.html#.fetch",
                    "tf": 30.263157894736842
                  },
                  "Task.html#init": {
                    "ref": "Task.html#init",
                    "tf": 5.555555555555555
                  },
                  "Task.html#failed": {
                    "ref": "Task.html#failed",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#finalize": {
                    "ref": "Task.html#finalize",
                    "tf": 4.166666666666666
                  },
                  "Task.html#start": {
                    "ref": "Task.html#start",
                    "tf": 4.545454545454546
                  }
                },
                "'": {
                  "docs": {
                    "Robot.html#.EXEC_FOLDER": {
                      "ref": "Robot.html#.EXEC_FOLDER",
                      "tf": 10
                    },
                    "Robot.html#_initBrowser": {
                      "ref": "Robot.html#_initBrowser",
                      "tf": 12.5
                    },
                    "Robot.html#_end": {
                      "ref": "Robot.html#_end",
                      "tf": 3.8461538461538463
                    },
                    "Robot.html#stop": {
                      "ref": "Robot.html#stop",
                      "tf": 3.571428571428571
                    },
                    "ScriptStep.html#init": {
                      "ref": "ScriptStep.html#init",
                      "tf": 3.571428571428571
                    },
                    "Task.html#.fetch": {
                      "ref": "Task.html#.fetch",
                      "tf": 2.631578947368421
                    },
                    "Task.html#elapsedTime": {
                      "ref": "Task.html#elapsedTime",
                      "tf": 10
                    },
                    "Task.html#log": {
                      "ref": "Task.html#log",
                      "tf": 3.3333333333333335
                    },
                    "Task.html#init": {
                      "ref": "Task.html#init",
                      "tf": 5.555555555555555
                    },
                    "Task.html#start": {
                      "ref": "Task.html#start",
                      "tf": 4.545454545454546
                    },
                    "Task.html#stop": {
                      "ref": "Task.html#stop",
                      "tf": 8.333333333333332
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Task.html#.PENDING": {
                              "ref": "Task.html#.PENDING",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "s": {
                                "docs": {
                                  "Task.html#.PROCESSING": {
                                    "ref": "Task.html#.PROCESSING",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "f": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "Task.html#.FAILED": {
                              "ref": "Task.html#.FAILED",
                              "tf": 1150
                            },
                            "Task.html#failed": {
                              "ref": "Task.html#failed",
                              "tf": 3.8461538461538463
                            }
                          }
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "h": {
                            "docs": {
                              "Task.html#.fetch": {
                                "ref": "Task.html#.fetch",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Task.html#.DONE": {
                            "ref": "Task.html#.DONE",
                            "tf": 1150
                          },
                          "Task.html#finalize": {
                            "ref": "Task.html#finalize",
                            "tf": 4.166666666666666
                          }
                        }
                      }
                    }
                  },
                  "_": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "f": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "p": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {
                                            "Task.html#log": {
                                              "ref": "Task.html#log",
                                              "tf": 3.3333333333333335
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "e": {
                    "docs": {},
                    "x": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "p": {
                                        "docs": {
                                          "Task.html#executeErrorSteps": {
                                            "ref": "Task.html#executeErrorSteps",
                                            "tf": 1.8518518518518516
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "#": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Task.html#snippetUtils": {
                                            "ref": "Task.html#snippetUtils",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "f": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "l": {
                                      "docs": {
                                        "Task.html#sendLogFile": {
                                          "ref": "Task.html#sendLogFile",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Task.html#start": {
                                "ref": "Task.html#start",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "Task.html#stop": {
                              "ref": "Task.html#stop",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    }
                  },
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "Task.html#elapsedTime": {
                                          "ref": "Task.html#elapsedTime",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "x": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "p": {
                                        "docs": {
                                          "Task.html#executeSteps": {
                                            "ref": "Task.html#executeSteps",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {
                                                    "Task.html#executeErrorSteps": {
                                                      "ref": "Task.html#executeErrorSteps",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "l": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "Task.html#log": {
                            "ref": "Task.html#log",
                            "tf": 1150
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Task.html#init": {
                              "ref": "Task.html#init",
                              "tf": 1150
                            }
                          }
                        }
                      },
                      "p": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Task.html#inputUrl": {
                                      "ref": "Task.html#inputUrl",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "f": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "Task.html#failed": {
                              "ref": "Task.html#failed",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Task.html#finalize": {
                            "ref": "Task.html#finalize",
                            "tf": 1150
                          }
                        }
                      }
                    }
                  },
                  "w": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "w": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "Task.html#willDownload": {
                                              "ref": "Task.html#willDownload",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Task.html#domReady": {
                                      "ref": "Task.html#domReady",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Robot.html#stop": {
                          "ref": "Robot.html#stop",
                          "tf": 3.571428571428571
                        },
                        "ScriptStep.html#_timedOut": {
                          "ref": "ScriptStep.html#_timedOut",
                          "tf": 10
                        },
                        "ScriptStep.html#_stepActionsIterator": {
                          "ref": "ScriptStep.html#_stepActionsIterator",
                          "tf": 3.8461538461538463
                        },
                        "ScriptStep.html#execute": {
                          "ref": "ScriptStep.html#execute",
                          "tf": 4.545454545454546
                        },
                        "ScriptStep.html#domReady": {
                          "ref": "ScriptStep.html#domReady",
                          "tf": 7.142857142857142
                        },
                        "Step.html#_timedOut": {
                          "ref": "Step.html#_timedOut",
                          "tf": 10
                        },
                        "Step.html#_stepActionsIterator": {
                          "ref": "Step.html#_stepActionsIterator",
                          "tf": 3.8461538461538463
                        },
                        "Step.html#execute": {
                          "ref": "Step.html#execute",
                          "tf": 4.545454545454546
                        },
                        "Step.html#domReady": {
                          "ref": "Step.html#domReady",
                          "tf": 7.142857142857142
                        },
                        "Task.html#executeErrorSteps": {
                          "ref": "Task.html#executeErrorSteps",
                          "tf": 1.8518518518518516
                        },
                        "Task.html#willDownload": {
                          "ref": "Task.html#willDownload",
                          "tf": 3.3333333333333335
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Task.html#elapsedTime": {
                    "ref": "Task.html#elapsedTime",
                    "tf": 10
                  }
                },
                "o": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "ScriptStep.html#_timedOut": {
                          "ref": "ScriptStep.html#_timedOut",
                          "tf": 10
                        },
                        "Step.html#_timedOut": {
                          "ref": "Step.html#_timedOut",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {
                  "Task.html#executeSteps": {
                    "ref": "Task.html#executeSteps",
                    "tf": 3.3333333333333335
                  },
                  "Task.html#executeErrorSteps": {
                    "ref": "Task.html#executeErrorSteps",
                    "tf": 1.8518518518518516
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "o": {
              "docs": {},
              "s": {
                "docs": {},
                "e": {
                  "docs": {
                    "Task.html#executeErrorSteps": {
                      "ref": "Task.html#executeErrorSteps",
                      "tf": 1.8518518518518516
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Task.html#failed": {
                          "ref": "Task.html#failed",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "o": {
                  "docs": {},
                  "w": {
                    "docs": {
                      "Robot.html": {
                        "ref": "Robot.html",
                        "tf": 4.545454545454546
                      },
                      "Robot.html#_initBrowser": {
                        "ref": "Robot.html#_initBrowser",
                        "tf": 12.5
                      },
                      "Robot.html#_end": {
                        "ref": "Robot.html#_end",
                        "tf": 3.8461538461538463
                      },
                      "Robot.html#stop": {
                        "ref": "Robot.html#stop",
                        "tf": 3.571428571428571
                      }
                    },
                    "c": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "Robot.html#stop": {
                                                              "ref": "Robot.html#stop",
                                                              "tf": 3.571428571428571
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "'": {
                      "docs": {
                        "ScriptStep.html#consoleMessage": {
                          "ref": "ScriptStep.html#consoleMessage",
                          "tf": 5
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "w": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Task.html#willDownload": {
                                    "ref": "Task.html#willDownload",
                                    "tf": 750
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "b": {
              "docs": {
                "ScriptStep.html": {
                  "ref": "ScriptStep.html",
                  "tf": 10
                },
                "ScriptStep.html#init": {
                  "ref": "ScriptStep.html#init",
                  "tf": 3.571428571428571
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {
                    "Task.html#log": {
                      "ref": "Task.html#log",
                      "tf": 6.666666666666667
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "Robot.html#id": {
                "ref": "Robot.html#id",
                "tf": 10
              },
              "Task.html#inputUrl": {
                "ref": "Task.html#inputUrl",
                "tf": 3.3333333333333335
              }
            }
          },
          "r": {
            "docs": {},
            "l": {
              "docs": {
                "ScriptStep.html#execute": {
                  "ref": "ScriptStep.html#execute",
                  "tf": 4.545454545454546
                },
                "ScriptStep.html#inputUrl": {
                  "ref": "ScriptStep.html#inputUrl",
                  "tf": 10
                },
                "Step.html#execute": {
                  "ref": "Step.html#execute",
                  "tf": 4.545454545454546
                },
                "Step.html#inputUrl": {
                  "ref": "Step.html#inputUrl",
                  "tf": 10
                },
                "Task.html#inputUrl": {
                  "ref": "Task.html#inputUrl",
                  "tf": 6.666666666666667
                }
              }
            }
          },
          "p": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "Task.html#.fetch": {
                    "ref": "Task.html#.fetch",
                    "tf": 2.631578947368421
                  },
                  "Task.html#failed": {
                    "ref": "Task.html#failed",
                    "tf": 3.8461538461538463
                  },
                  "Task.html#finalize": {
                    "ref": "Task.html#finalize",
                    "tf": 4.166666666666666
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Task.html#failed": {
                      "ref": "Task.html#failed",
                      "tf": 3.8461538461538463
                    },
                    "Task.html#finalize": {
                      "ref": "Task.html#finalize",
                      "tf": 4.166666666666666
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "z": {
              "docs": {},
              "i": {
                "docs": {},
                "p": {
                  "docs": {
                    "Task.html#init": {
                      "ref": "Task.html#init",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          }
        },
        "_": {
          "docs": {},
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "w": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Robot.html#_initBrowser": {
                                "ref": "Robot.html#_initBrowser",
                                "tf": 750
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Robot.html#_end": {
                    "ref": "Robot.html#_end",
                    "tf": 750
                  }
                }
              }
            },
            "x": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "ScriptStep.html#_executeScript": {
                                        "ref": "ScriptStep.html#_executeScript",
                                        "tf": 700
                                      },
                                      "SequenceStep.html#_executeScript": {
                                        "ref": "SequenceStep.html#_executeScript",
                                        "tf": 700
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "i": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "ScriptStep.html#_timedOut": {
                              "ref": "ScriptStep.html#_timedOut",
                              "tf": 750
                            },
                            "Step.html#_timedOut": {
                              "ref": "Step.html#_timedOut",
                              "tf": 750
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {
                                          "ScriptStep.html#_stepActionsIterator": {
                                            "ref": "ScriptStep.html#_stepActionsIterator",
                                            "tf": 700
                                          },
                                          "Step.html#_stepActionsIterator": {
                                            "ref": "Step.html#_stepActionsIterator",
                                            "tf": 700
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Robot.html#_initBrowser": {
                          "ref": "Robot.html#_initBrowser",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "ScriptStep.html#_executeScript": {
                    "ref": "ScriptStep.html#_executeScript",
                    "tf": 3.571428571428571
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "ScriptStep.html#domReady": {
                          "ref": "ScriptStep.html#domReady",
                          "tf": 7.142857142857142
                        },
                        "Step.html#domReady": {
                          "ref": "Step.html#domReady",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Task.html#start": {
                      "ref": "Task.html#start",
                      "tf": 4.545454545454546
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "Task.html#willDownload": {
                      "ref": "Task.html#willDownload",
                      "tf": 3.3333333333333335
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "ScriptStep.html#_executeScript": {
                        "ref": "ScriptStep.html#_executeScript",
                        "tf": 3.571428571428571
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "Task.html#executeSteps": {
                    "ref": "Task.html#executeSteps",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "c": {
              "docs": {
                "Task.html#executeErrorSteps": {
                  "ref": "Task.html#executeErrorSteps",
                  "tf": 1.8518518518518516
                }
              }
            },
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Task.html#executeErrorSteps": {
                          "ref": "Task.html#executeErrorSteps",
                          "tf": 3.7037037037037033
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "o": {
                "docs": {
                  "Task.html#inputUrl": {
                    "ref": "Task.html#inputUrl",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "a": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "ScriptStep.html#init": {
                          "ref": "ScriptStep.html#init",
                          "tf": 3.571428571428571
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "Task.html#executeErrorSteps": {
                      "ref": "Task.html#executeErrorSteps",
                      "tf": 1.8518518518518516
                    }
                  }
                }
              }
            }
          }
        },
        "y": {
          "docs": {},
          "i": {
            "docs": {},
            "e": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "ScriptStep.html#_stepActionsIterator": {
                      "ref": "ScriptStep.html#_stepActionsIterator",
                      "tf": 3.8461538461538463
                    },
                    "Step.html#_stepActionsIterator": {
                      "ref": "Step.html#_stepActionsIterator",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "j": {
                  "docs": {
                    "SequenceStep.html": {
                      "ref": "SequenceStep.html",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Task.html#executeErrorSteps": {
                        "ref": "Task.html#executeErrorSteps",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "Task.html#.fetch": {
                  "ref": "Task.html#.fetch",
                  "tf": 2.631578947368421
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Task.html#elapsedTime": {
                        "ref": "Task.html#elapsedTime",
                        "tf": 50
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Task.html#executeErrorSteps": {
                    "ref": "Task.html#executeErrorSteps",
                    "tf": 1.8518518518518516
                  },
                  "Task.html#willDownload": {
                    "ref": "Task.html#willDownload",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "Task.html#log": {
                    "ref": "Task.html#log",
                    "tf": 3.3333333333333335
                  }
                }
              }
            }
          }
        }
      },
      "length": 595
    },
    "corpusTokens": [
      "5s",
      "_end",
      "_executescript",
      "_initbrows",
      "_stepactionsiter",
      "_timedout",
      "access",
      "action",
      "alway",
      "api",
      "api_help",
      "api_helper.credenti",
      "append",
      "array",
      "autom",
      "await",
      "befor",
      "bind",
      "boolean",
      "browser",
      "build",
      "call",
      "callback",
      "chang",
      "class",
      "clean",
      "client",
      "close",
      "complet",
      "config",
      "configur",
      "consol",
      "consolemessag",
      "constructor",
      "creat",
      "credenti",
      "data",
      "definit",
      "delet",
      "depend",
      "destroy",
      "disk",
      "document",
      "dom",
      "domreadi",
      "done",
      "download",
      "each",
      "elapsedtim",
      "electron",
      "end",
      "endwith",
      "entri",
      "env",
      "error",
      "event",
      "exec_fold",
      "execut",
      "executeerrorstep",
      "executestep",
      "fail",
      "failur",
      "fetch",
      "file",
      "final",
      "find",
      "first",
      "french",
      "function",
      "gener",
      "give",
      "global",
      "handl",
      "id",
      "index",
      "inform",
      "init",
      "initi",
      "input",
      "inputurl",
      "insid",
      "internali",
      "itself",
      "json",
      "list",
      "list:class",
      "list:modul",
      "load",
      "log",
      "loop",
      "lt;abstract&gt",
      "lt;async",
      "lt;async&gt",
      "lt;generator&gt",
      "lt;readonly&gt",
      "lt;static",
      "main",
      "match",
      "member",
      "messag",
      "millisecond",
      "modul",
      "module:api_help",
      "name",
      "new",
      "nodej",
      "normal",
      "number",
      "object",
      "onc",
      "onerror",
      "ongo",
      "over",
      "param",
      "parent",
      "pars",
      "path",
      "paus",
      "pend",
      "point",
      "potenti",
      "prepend",
      "process",
      "program",
      "promis",
      "propag",
      "provid",
      "public",
      "reach",
      "readm",
      "readonly&gt",
      "recurs",
      "reject",
      "render",
      "requir",
      "resolv",
      "return",
      "robot",
      "robot#_end",
      "robot#_initbrows",
      "robot#id",
      "robot#paus",
      "robot#run",
      "robot#stop",
      "robot'",
      "robot._end",
      "robot.exec_fold",
      "robot.run",
      "run",
      "save",
      "script",
      "scriptstep",
      "scriptstep#_executescript",
      "scriptstep#_stepactionsiter",
      "scriptstep#_timedout",
      "scriptstep#consolemessag",
      "scriptstep#domreadi",
      "scriptstep#error",
      "scriptstep#execut",
      "scriptstep#init",
      "scriptstep#inputurl",
      "scriptstep#success",
      "send",
      "sendlogfil",
      "sent",
      "sequence'",
      "sequencestep",
      "sequencestep#_executescript",
      "sequencestep#init",
      "session",
      "sessiondata",
      "set",
      "snippetutil",
      "start",
      "startwith",
      "startwith/endwith",
      "state",
      "static&gt",
      "statu",
      "step",
      "step#_stepactionsiter",
      "step#_timedout",
      "step#domreadi",
      "step#error",
      "step#execut",
      "step#inputurl",
      "step#success",
      "step'",
      "stepactioniter",
      "steperror",
      "stop",
      "stop/start",
      "store",
      "succes",
      "success",
      "systemsummari",
      "task",
      "task#domreadi",
      "task#elapsedtim",
      "task#executeerrorstep",
      "task#executestep",
      "task#fail",
      "task#fin",
      "task#init",
      "task#inputurl",
      "task#log",
      "task#sendlogfil",
      "task#snippetutil",
      "task#start",
      "task#stop",
      "task#willdownload",
      "task'",
      "task._logfilepath",
      "task.don",
      "task.executestep",
      "task.fail",
      "task.fetch",
      "task.pend",
      "task.process",
      "those",
      "through",
      "time",
      "timeout",
      "trigger",
      "type",
      "unzip",
      "updat",
      "upon",
      "url",
      "us",
      "valid",
      "variabl",
      "web",
      "willdownload",
      "window",
      "window'",
      "windowclosedduringprocess",
      "write",
      "yield"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "French Automation Robot",
      "longname": "index",
      "name": "French Automation Robot",
      "tags": "index",
      "summary": "systemSummary",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "Robot.html": {
      "id": "Robot.html",
      "kind": "class",
      "title": "Robot",
      "longname": "Robot",
      "name": "Robot",
      "tags": "Robot",
      "summary": "",
      "description": "Main Robot class Handles electron task window initialization and program execution start",
      "body": ""
    },
    "Robot.html#.EXEC_FOLDER": {
      "id": "Robot.html#.EXEC_FOLDER",
      "kind": "member",
      "title": "&lt;static, readonly&gt; EXEC_FOLDER",
      "longname": "Robot.EXEC_FOLDER",
      "name": "EXEC_FOLDER",
      "tags": "Robot.EXEC_FOLDER EXEC_FOLDER",
      "summary": "",
      "description": "Where to find the fetched task's program on disk"
    },
    "Robot.html#id": {
      "id": "Robot.html#id",
      "kind": "member",
      "title": "id",
      "longname": "Robot#id",
      "name": "id",
      "tags": "Robot#id id",
      "summary": "",
      "description": "Fetches credentials from configuration using api_helper.credentials()"
    },
    "Robot.html#_initBrowser": {
      "id": "Robot.html#_initBrowser",
      "kind": "function",
      "title": "_initBrowser()",
      "longname": "Robot#_initBrowser",
      "name": "_initBrowser",
      "tags": "Robot#_initBrowser _initBrowser",
      "summary": "",
      "description": "Initialize task's browser window"
    },
    "Robot.html#_end": {
      "id": "Robot.html#_end",
      "kind": "function",
      "title": "_end()",
      "longname": "Robot#_end",
      "name": "_end",
      "tags": "Robot#_end _end",
      "summary": "",
      "description": "Ends robot's execution Clean stop and delete of robot and any running task Destroys and delete the task's window"
    },
    "Robot.html#run": {
      "id": "Robot.html#run",
      "kind": "function",
      "title": "&lt;async&gt; run()",
      "longname": "Robot#run",
      "name": "run",
      "tags": "Robot#run run",
      "summary": "",
      "description": "Main entry point of robot execution First fetch potential pending Task, then starts it and await its completion Always ends with a recursive call to itself after 5s"
    },
    "Robot.html#stop": {
      "id": "Robot.html#stop",
      "kind": "function",
      "title": "stop()",
      "longname": "Robot#stop",
      "name": "stop",
      "tags": "Robot#stop stop",
      "summary": "",
      "description": "Public function to stop robot execution, triggered by closing the task's window Internaly calls Robot._end() with WindowClosedDuringProcess error"
    },
    "Robot.html#pause": {
      "id": "Robot.html#pause",
      "kind": "function",
      "title": "pause()",
      "longname": "Robot#pause",
      "name": "pause",
      "tags": "Robot#pause pause",
      "summary": "",
      "description": "Stops Robot.run() recursive calls"
    },
    "ScriptStep.html": {
      "id": "ScriptStep.html",
      "kind": "class",
      "title": "ScriptStep",
      "longname": "ScriptStep",
      "name": "ScriptStep",
      "tags": "ScriptStep",
      "summary": "",
      "description": "Step that executes a script on the web client",
      "body": ""
    },
    "ScriptStep.html#consoleMessage": {
      "id": "ScriptStep.html#consoleMessage",
      "kind": "function",
      "title": "consoleMessage()",
      "longname": "ScriptStep#consoleMessage",
      "name": "consoleMessage",
      "tags": "ScriptStep#consoleMessage consoleMessage",
      "summary": "",
      "description": "Callback for window's 'console-message' event Store the console message to fetch error from it"
    },
    "ScriptStep.html#_executeScript": {
      "id": "ScriptStep.html#_executeScript",
      "kind": "function",
      "title": "&lt;async&gt; _executeScript()",
      "longname": "ScriptStep#_executeScript",
      "name": "_executeScript",
      "tags": "ScriptStep#_executeScript _executeScript",
      "summary": "",
      "description": "Bind 'console-message' event callback and execute step's script Any data returned by the script will be appended to sessionData object"
    },
    "ScriptStep.html#init": {
      "id": "ScriptStep.html#init",
      "kind": "function",
      "title": "&lt;async&gt; init()",
      "longname": "ScriptStep#init",
      "name": "init",
      "tags": "ScriptStep#init init",
      "summary": "",
      "description": "Initialize the step Prepend step's env and task's sessionData to the executed script so the variables can be accessed inside the web client"
    },
    "ScriptStep.html#_timedOut": {
      "id": "ScriptStep.html#_timedOut",
      "kind": "function",
      "title": "_timedOut()",
      "longname": "ScriptStep#_timedOut",
      "name": "_timedOut",
      "tags": "ScriptStep#_timedOut _timedOut",
      "summary": "",
      "description": "Triggers a StepError when step's timeout is reached"
    },
    "ScriptStep.html#_stepActionsIterator": {
      "id": "ScriptStep.html#_stepActionsIterator",
      "kind": "function",
      "title": "&lt;generator&gt; _stepActionsIterator()",
      "longname": "ScriptStep#_stepActionsIterator",
      "name": "_stepActionsIterator",
      "tags": "ScriptStep#_stepActionsIterator _stepActionsIterator",
      "summary": "",
      "description": "Handle step actions Yields for an inputUrl to match with startWith and endWith if provided Triggers script execution and downloads"
    },
    "ScriptStep.html#execute": {
      "id": "ScriptStep.html#execute",
      "kind": "function",
      "title": "execute()",
      "longname": "ScriptStep#execute",
      "name": "execute",
      "tags": "ScriptStep#execute execute",
      "summary": "",
      "description": "Entry point for step execution Create a stepActionIterator generator and triggers startWith url if provided"
    },
    "ScriptStep.html#inputUrl": {
      "id": "ScriptStep.html#inputUrl",
      "kind": "function",
      "title": "inputUrl()",
      "longname": "ScriptStep#inputUrl",
      "name": "inputUrl",
      "tags": "ScriptStep#inputUrl inputUrl",
      "summary": "",
      "description": "Provides rendered url to stepActionIterator If endWith url is reached, resolve step's promise"
    },
    "ScriptStep.html#success": {
      "id": "ScriptStep.html#success",
      "kind": "function",
      "title": "success()",
      "longname": "ScriptStep#success",
      "name": "success",
      "tags": "ScriptStep#success success",
      "summary": "",
      "description": "Resolve step promise"
    },
    "ScriptStep.html#error": {
      "id": "ScriptStep.html#error",
      "kind": "function",
      "title": "error()",
      "longname": "ScriptStep#error",
      "name": "error",
      "tags": "ScriptStep#error error",
      "summary": "",
      "description": "Reject step promise"
    },
    "ScriptStep.html#domReady": {
      "id": "ScriptStep.html#domReady",
      "kind": "function",
      "title": "domReady()",
      "longname": "ScriptStep#domReady",
      "name": "domReady",
      "tags": "ScriptStep#domReady domReady",
      "summary": "",
      "description": "Change DOM state boolean and triggers any pending script"
    },
    "SequenceStep.html": {
      "id": "SequenceStep.html",
      "kind": "class",
      "title": "SequenceStep",
      "longname": "SequenceStep",
      "name": "SequenceStep",
      "tags": "SequenceStep",
      "summary": "",
      "description": "Step executed as a nodejs module",
      "body": ""
    },
    "SequenceStep.html#init": {
      "id": "SequenceStep.html#init",
      "kind": "function",
      "title": "&lt;async&gt; init()",
      "longname": "SequenceStep#init",
      "name": "init",
      "tags": "SequenceStep#init init",
      "summary": "",
      "description": "Initialize step requires the sequence's script file"
    },
    "SequenceStep.html#_executeScript": {
      "id": "SequenceStep.html#_executeScript",
      "kind": "function",
      "title": "&lt;async&gt; _executeScript()",
      "longname": "SequenceStep#_executeScript",
      "name": "_executeScript",
      "tags": "SequenceStep#_executeScript _executeScript",
      "summary": "",
      "description": "Execute the sequence's script"
    },
    "Step.html": {
      "id": "Step.html",
      "kind": "class",
      "title": "&lt;abstract&gt; Step",
      "longname": "Step",
      "name": "Step",
      "tags": "Step",
      "summary": "",
      "description": "Parent class of ScriptStep and SequenceStep",
      "body": ""
    },
    "Step.html#_timedOut": {
      "id": "Step.html#_timedOut",
      "kind": "function",
      "title": "_timedOut()",
      "longname": "Step#_timedOut",
      "name": "_timedOut",
      "tags": "Step#_timedOut _timedOut",
      "summary": "",
      "description": "Triggers a StepError when step's timeout is reached"
    },
    "Step.html#_stepActionsIterator": {
      "id": "Step.html#_stepActionsIterator",
      "kind": "function",
      "title": "&lt;generator&gt; _stepActionsIterator()",
      "longname": "Step#_stepActionsIterator",
      "name": "_stepActionsIterator",
      "tags": "Step#_stepActionsIterator _stepActionsIterator",
      "summary": "",
      "description": "Handle step actions Yields for an inputUrl to match with startWith and endWith if provided Triggers script execution and downloads"
    },
    "Step.html#execute": {
      "id": "Step.html#execute",
      "kind": "function",
      "title": "execute()",
      "longname": "Step#execute",
      "name": "execute",
      "tags": "Step#execute execute",
      "summary": "",
      "description": "Entry point for step execution Create a stepActionIterator generator and triggers startWith url if provided"
    },
    "Step.html#inputUrl": {
      "id": "Step.html#inputUrl",
      "kind": "function",
      "title": "inputUrl()",
      "longname": "Step#inputUrl",
      "name": "inputUrl",
      "tags": "Step#inputUrl inputUrl",
      "summary": "",
      "description": "Provides rendered url to stepActionIterator If endWith url is reached, resolve step's promise"
    },
    "Step.html#success": {
      "id": "Step.html#success",
      "kind": "function",
      "title": "success()",
      "longname": "Step#success",
      "name": "success",
      "tags": "Step#success success",
      "summary": "",
      "description": "Resolve step promise"
    },
    "Step.html#error": {
      "id": "Step.html#error",
      "kind": "function",
      "title": "error()",
      "longname": "Step#error",
      "name": "error",
      "tags": "Step#error error",
      "summary": "",
      "description": "Reject step promise"
    },
    "Step.html#domReady": {
      "id": "Step.html#domReady",
      "kind": "function",
      "title": "domReady()",
      "longname": "Step#domReady",
      "name": "domReady",
      "tags": "Step#domReady domReady",
      "summary": "",
      "description": "Change DOM state boolean and triggers any pending script"
    },
    "Task.html": {
      "id": "Task.html",
      "kind": "class",
      "title": "Task",
      "longname": "Task",
      "name": "Task",
      "tags": "Task",
      "summary": "",
      "description": "Handle Task Fetch task, parse task program and config, steps execution, task log file",
      "body": ""
    },
    "Task.html#.PENDING": {
      "id": "Task.html#.PENDING",
      "kind": "member",
      "title": "&lt;static, readonly&gt; PENDING",
      "longname": "Task.PENDING",
      "name": "PENDING",
      "tags": "Task.PENDING PENDING",
      "summary": "",
      "description": "Get Task PENDING status id from api_helper.credentials()"
    },
    "Task.html#.PROCESSING": {
      "id": "Task.html#.PROCESSING",
      "kind": "member",
      "title": "&lt;static, readonly&gt; PROCESSING",
      "longname": "Task.PROCESSING",
      "name": "PROCESSING",
      "tags": "Task.PROCESSING PROCESSING",
      "summary": "",
      "description": "Get Task PROCESSING status id from api_helper.credentials()"
    },
    "Task.html#.FAILED": {
      "id": "Task.html#.FAILED",
      "kind": "member",
      "title": "&lt;static, readonly&gt; FAILED",
      "longname": "Task.FAILED",
      "name": "FAILED",
      "tags": "Task.FAILED FAILED",
      "summary": "",
      "description": "Get Task FAILED status id from api_helper.credentials()"
    },
    "Task.html#.DONE": {
      "id": "Task.html#.DONE",
      "kind": "member",
      "title": "&lt;static, readonly&gt; DONE",
      "longname": "Task.DONE",
      "name": "DONE",
      "tags": "Task.DONE DONE",
      "summary": "",
      "description": "Get Task DONE status id from api_helper.credentials()"
    },
    "Task.html#snippetUtils": {
      "id": "Task.html#snippetUtils",
      "kind": "member",
      "title": "&lt;readonly&gt; snippetUtils",
      "longname": "Task#snippetUtils",
      "name": "snippetUtils",
      "tags": "Task#snippetUtils snippetUtils",
      "summary": "",
      "description": "Returns a snippetUtils provided to Step constructor"
    },
    "Task.html#.fetch": {
      "id": "Task.html#.fetch",
      "kind": "function",
      "title": "&lt;async, static&gt; fetch() → {Task}",
      "longname": "Task.fetch",
      "name": "fetch",
      "tags": "Task.fetch fetch",
      "summary": "",
      "description": "Fetch any pending task from the API matching Robot id Upon succesful fetch, create new Task class and set task's status to PROCESSING in API"
    },
    "Task.html#elapsedTime": {
      "id": "Task.html#elapsedTime",
      "kind": "function",
      "title": "elapsedTime() → {number}",
      "longname": "Task#elapsedTime",
      "name": "elapsedTime",
      "tags": "Task#elapsedTime elapsedTime",
      "summary": "",
      "description": "Gives the time since task's start in milliseconds"
    },
    "Task.html#log": {
      "id": "Task.html#log",
      "kind": "function",
      "title": "log( param )",
      "longname": "Task#log",
      "name": "log",
      "tags": "Task#log log",
      "summary": "",
      "description": "Writes log to task's log file, sent to the API after execution Clean json and error log handled Writes to Task._logFilePath"
    },
    "Task.html#sendLogFile": {
      "id": "Task.html#sendLogFile",
      "kind": "function",
      "title": "&lt;async&gt; sendLogFile()",
      "longname": "Task#sendLogFile",
      "name": "sendLogFile",
      "tags": "Task#sendLogFile sendLogFile",
      "summary": "",
      "description": "Sends log file to the API"
    },
    "Task.html#init": {
      "id": "Task.html#init",
      "kind": "function",
      "title": "&lt;async&gt; init()",
      "longname": "Task#init",
      "name": "init",
      "tags": "Task#init init",
      "summary": "",
      "description": "Initialize Task Downloads task's program and unzip it Parses its config file"
    },
    "Task.html#executeSteps": {
      "id": "Task.html#executeSteps",
      "kind": "function",
      "title": "&lt;async&gt; executeSteps()",
      "longname": "Task#executeSteps",
      "name": "executeSteps",
      "tags": "Task#executeSteps executeSteps",
      "summary": "",
      "description": "Loop over steps array Initialize a ScriptStep or SequenceStep depending on step's type Initialize and start the Step then awaits it completion"
    },
    "Task.html#executeErrorSteps": {
      "id": "Task.html#executeErrorSteps",
      "kind": "function",
      "title": "&lt;async&gt; executeErrorSteps()",
      "longname": "Task#executeErrorSteps",
      "name": "executeErrorSteps",
      "tags": "Task#executeErrorSteps executeErrorSteps",
      "summary": "",
      "description": "Normalize onError array and trigger error steps execution Error step can be a step index, a step name, a step definition, or an array of those types Once onError definition resolve to a valid array of steps, Task.executeSteps is called"
    },
    "Task.html#failed": {
      "id": "Task.html#failed",
      "kind": "function",
      "title": "&lt;async&gt; failed()",
      "longname": "Task#failed",
      "name": "failed",
      "tags": "Task#failed failed",
      "summary": "",
      "description": "Called upon execution failure Logs error to file, update task and execution to Task.FAILED through API"
    },
    "Task.html#finalize": {
      "id": "Task.html#finalize",
      "kind": "function",
      "title": "&lt;async&gt; finalize()",
      "longname": "Task#finalize",
      "name": "finalize",
      "tags": "Task#finalize finalize",
      "summary": "",
      "description": "Called upon execution success Logs session data to file, update task and execution to Task.DONE"
    },
    "Task.html#start": {
      "id": "Task.html#start",
      "kind": "function",
      "title": "&lt;async&gt; start()",
      "longname": "Task#start",
      "name": "start",
      "tags": "Task#start start",
      "summary": "",
      "description": "Initialize and start Task Always sends task's log file to the API before returning"
    },
    "Task.html#stop": {
      "id": "Task.html#stop",
      "kind": "function",
      "title": "stop()",
      "longname": "Task#stop",
      "name": "stop",
      "tags": "Task#stop stop",
      "summary": "",
      "description": "Stops pending downloads and reject Task's promise"
    },
    "Task.html#inputUrl": {
      "id": "Task.html#inputUrl",
      "kind": "function",
      "title": "inputUrl()",
      "longname": "Task#inputUrl",
      "name": "inputUrl",
      "tags": "Task#inputUrl inputUrl",
      "summary": "",
      "description": "Called for each url the client loaded Input url is sent to the ongoing step and is used to match startWith/endWith step configuration"
    },
    "Task.html#willDownload": {
      "id": "Task.html#willDownload",
      "kind": "function",
      "title": "willDownload()",
      "longname": "Task#willDownload",
      "name": "willDownload",
      "tags": "Task#willDownload willDownload",
      "summary": "",
      "description": "Triggered by a download event from the client It will set the file save path and name, and build an entry for the download array with informations about the download"
    },
    "Task.html#domReady": {
      "id": "Task.html#domReady",
      "kind": "function",
      "title": "domReady()",
      "longname": "Task#domReady",
      "name": "domReady",
      "tags": "Task#domReady domReady",
      "summary": "",
      "description": "When DOM state change, propagate its state to steps to stop/start script executions"
    },
    "module-api_helper.html": {
      "id": "module-api_helper.html",
      "kind": "module",
      "title": "api_helper",
      "longname": "module:api_helper",
      "name": "api_helper",
      "tags": "module:api_helper",
      "summary": "",
      "description": "",
      "body": ""
    }
  }
};