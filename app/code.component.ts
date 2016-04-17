import {Component, OnInit} from 'angular2/core';
import {Response} from "angular2/http";
import {CodeService, Folder, Language} from "./code.service";
import {Codeblock} from 'ng2-prism/codeblock';
import {Go, Java, Javascript, Perl, Python, Ruby, Scala, Typescript} from 'ng2-prism/languages';

@Component({
    selector: 'code-component',
    directives: [Codeblock, Go, Java, Javascript, Python, Ruby, Scala, Typescript],
    template: `
    <codeblock *ngIf="_codeService.currentLanguage.text == 'Go'" go>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'Java'" java>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'JavaScript'" javascript>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'Perl'" perl>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'Python'" python>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'Ruby'" ruby>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'Scala'" scala>{{_codeService.currentCode}}</codeblock>
    <codeblock *ngIf="_codeService.currentLanguage.text == 'TypeScript'" typescript>{{_codeService.currentCode}}</codeblock>
    `
})
export class CodeComponent {
  constructor(private _codeService:CodeService) {

  }
}
