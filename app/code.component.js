System.register(['angular2/core', "./code.service", 'ng2-prism/codeblock', 'ng2-prism/languages'], function(exports_1, context_1) {
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
    var core_1, code_service_1, codeblock_1, languages_1;
    var CodeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (code_service_1_1) {
                code_service_1 = code_service_1_1;
            },
            function (codeblock_1_1) {
                codeblock_1 = codeblock_1_1;
            },
            function (languages_1_1) {
                languages_1 = languages_1_1;
            }],
        execute: function() {
            CodeComponent = (function () {
                function CodeComponent(_codeService) {
                    this._codeService = _codeService;
                }
                CodeComponent = __decorate([
                    core_1.Component({
                        selector: 'code-component',
                        directives: [codeblock_1.Codeblock, languages_1.Go, languages_1.Java, languages_1.Javascript, languages_1.Python, languages_1.Ruby, languages_1.Scala, languages_1.Typescript],
                        template: "\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'Go'\" go>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'Java'\" java>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'JavaScript'\" javascript>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'Perl'\" perl>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'Python'\" python>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'Ruby'\" ruby>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'Scala'\" scala>{{_codeService.currentCode}}</codeblock>\n    <codeblock *ngIf=\"_codeService.currentLanguage.text == 'TypeScript'\" typescript>{{_codeService.currentCode}}</codeblock>\n    "
                    }), 
                    __metadata('design:paramtypes', [code_service_1.CodeService])
                ], CodeComponent);
                return CodeComponent;
            }());
            exports_1("CodeComponent", CodeComponent);
        }
    }
});
//# sourceMappingURL=code.component.js.map