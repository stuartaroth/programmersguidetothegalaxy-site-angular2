System.register(['angular2/core', "angular2/http", "angular2/router", "./code.service", "./code.component"], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, code_service_1, code_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (code_service_1_1) {
                code_service_1 = code_service_1_1;
            },
            function (code_component_1_1) {
                code_component_1 = code_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_codeService) {
                    this._codeService = _codeService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this._codeService.updateCode();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <nav class=\"navbar navbar-default navbar-static-top\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Programmer's Guide to the Galaxy</a>\n          </div>\n          <div id=\"navbar\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Language: {{_codeService.currentLanguage.text}} <span class=\"caret\"></span></a>\n                <ul class=\"dropdown-menu\">\n                  <li *ngFor=\"#languageMenuItem of _codeService.languageMenuItems\"\n                    (click)=\"_codeService.updateLanguage(languageMenuItem)\">\n                    <a href=\"#\">{{languageMenuItem.text}}</a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li>\n                <a target=\"_blank\" href=\"https://github.com/stuartaroth/programmersguidetothegalaxy\">GitHub</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <div class=\"navbar navbar-inverse navbar-fixed-left\">\n        <ul class=\"nav navbar-nav\">\n          <li *ngFor=\"#folderMenuItem of _codeService.folderMenuItems\"\n            [class.active]=\"folderMenuItem == _codeService.currentFolder\"\n            (click)=\"_codeService.updateFolder(folderMenuItem)\">\n            <a href=\"#\">{{folderMenuItem.text}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"container code-container\">\n        <code-component></code-component>\n      </div>\n      ",
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            code_component_1.CodeComponent
                        ],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            code_service_1.CodeService
                        ]
                    }), 
                    __metadata('design:paramtypes', [code_service_1.CodeService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map