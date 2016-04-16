import {Component, OnInit} from 'angular2/core';
import {Response} from "angular2/http";
import {CodeService, Folder, Language} from "./code.service";
import {Codeblock} from 'ng2-prism/codeblock';
import {Go} from 'ng2-prism/languages';

@Component({
    selector: 'code-component',
    directives: [Codeblock, Go],
    template: '<codeblock go>{{_codeService.currentCode}}</codeblock>'
})
export class CodeComponent implements OnInit {
  constructor(private _codeService:CodeService) {

  }

  ngOnInit():any {
    this._codeService.updateCode();
  }
}
