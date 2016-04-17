System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Folder, Language, CodeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            (function (Folder) {
                Folder[Folder["ArraysLists"] = 0] = "ArraysLists";
                Folder[Folder["ArraysListsIteration"] = 1] = "ArraysListsIteration";
                Folder[Folder["CommandLineArguments"] = 2] = "CommandLineArguments";
                Folder[Folder["ExtensionMethods"] = 3] = "ExtensionMethods";
                Folder[Folder["FalsyValues"] = 4] = "FalsyValues";
                Folder[Folder["Functions"] = 5] = "Functions";
                Folder[Folder["HashMaps"] = 6] = "HashMaps";
                Folder[Folder["HashMapsIteration"] = 7] = "HashMapsIteration";
                Folder[Folder["HelloWorld"] = 8] = "HelloWorld";
                Folder[Folder["Ifs"] = 9] = "Ifs";
                Folder[Folder["Interpolation"] = 10] = "Interpolation";
                Folder[Folder["Loops"] = 11] = "Loops";
                Folder[Folder["SimpleClass"] = 12] = "SimpleClass";
                Folder[Folder["Variables"] = 13] = "Variables";
            })(Folder || (Folder = {}));
            exports_1("Folder", Folder);
            (function (Language) {
                Language[Language["Dart"] = 0] = "Dart";
                Language[Language["Go"] = 1] = "Go";
                Language[Language["Java"] = 2] = "Java";
                Language[Language["JavaScript"] = 3] = "JavaScript";
                Language[Language["Perl"] = 4] = "Perl";
                Language[Language["Python"] = 5] = "Python";
                Language[Language["Ruby"] = 6] = "Ruby";
                Language[Language["Scala"] = 7] = "Scala";
                Language[Language["TypeScript"] = 8] = "TypeScript";
            })(Language || (Language = {}));
            exports_1("Language", Language);
            CodeService = (function () {
                function CodeService(_http) {
                    var _this = this;
                    this._http = _http;
                    this.getLanguage = function (language) {
                        switch (language) {
                            case Language.Dart:
                                return "example.dart";
                            case Language.Go:
                                return "example.go";
                            case Language.Java:
                                return "Example.java";
                            case Language.JavaScript:
                                return "exampleJs.js";
                            case Language.Perl:
                                return "example.pl";
                            case Language.Python:
                                return "example.py";
                            case Language.Ruby:
                                return "example.rb";
                            case Language.Scala:
                                return "Example.scala";
                            case Language.TypeScript:
                                return "example.ts";
                        }
                    };
                    this.getFolder = function (folder) {
                        switch (folder) {
                            case Folder.ArraysLists:
                                return "arrays_lists";
                            case Folder.ArraysListsIteration:
                                return "arrays_lists_iteration";
                            case Folder.CommandLineArguments:
                                return "command_line_arguments";
                            case Folder.ExtensionMethods:
                                return "extension_methods";
                            case Folder.FalsyValues:
                                return "falsy_values";
                            case Folder.Functions:
                                return "functions";
                            case Folder.HashMaps:
                                return "hash_maps";
                            case Folder.HashMapsIteration:
                                return "hash_maps_iteration";
                            case Folder.HelloWorld:
                                return "hello_world";
                            case Folder.Ifs:
                                return "ifs";
                            case Folder.Interpolation:
                                return "interpolation";
                            case Folder.Loops:
                                return "loops";
                            case Folder.SimpleClass:
                                return "simple_class";
                            case Folder.Variables:
                                return "variables";
                        }
                    };
                    this.languageMenuItems = [
                        { language: Language.Dart, text: "Dart" },
                        { language: Language.Go, text: "Go" },
                        { language: Language.Java, text: "Java" },
                        { language: Language.JavaScript, text: "JavaScript" },
                        { language: Language.Perl, text: "Perl" },
                        { language: Language.Python, text: "Python" },
                        { language: Language.Ruby, text: "Ruby" },
                        { language: Language.Scala, text: "Scala" },
                        { language: Language.TypeScript, text: "TypeScript" },
                    ];
                    this.folderMenuItems = [
                        { folder: Folder.ArraysLists, text: "Arrays/Lists" },
                        { folder: Folder.ArraysListsIteration, text: "Arrays/Lists Iteration" },
                        { folder: Folder.SimpleClass, text: "Classes" },
                        { folder: Folder.CommandLineArguments, text: "Command Line Arguments" },
                        { folder: Folder.ExtensionMethods, text: "Extension Methods" },
                        { folder: Folder.FalsyValues, text: "Falsy Values" },
                        { folder: Folder.Functions, text: "Functions" },
                        { folder: Folder.HashMaps, text: "Hash Maps" },
                        { folder: Folder.HashMapsIteration, text: "Hash Maps Iteration" },
                        { folder: Folder.HelloWorld, text: "Hello World" },
                        { folder: Folder.Ifs, text: "If Statements" },
                        { folder: Folder.Interpolation, text: "Interpolation" },
                        { folder: Folder.Loops, text: "Loop Statements" },
                        { folder: Folder.Variables, text: "Variables" }
                    ];
                    this.getCode = function (language, folder) { return _this._http.get("node_modules/programmersguidetothegalaxy/" + _this.getFolder(folder) + "/" + _this.getLanguage(language)); };
                    this.currentLanguage = this.languageMenuItems[1];
                    this.currentFolder = this.folderMenuItems[2];
                    this.currentCode = "";
                    this.updateCode = function () {
                        _this.getCode(_this.currentLanguage.language, _this.currentFolder.folder).subscribe(function (response) {
                            _this.currentCode = response.text();
                        });
                    };
                    this.updateFolder = function (folderMenuItem) {
                        _this.currentFolder = folderMenuItem;
                        _this.updateCode();
                    };
                    this.updateLanguage = function (languageMenuItem) {
                        _this.currentLanguage = languageMenuItem;
                        _this.updateCode();
                    };
                }
                CodeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CodeService);
                return CodeService;
            }());
            exports_1("CodeService", CodeService);
        }
    }
});
//# sourceMappingURL=code.service.js.map