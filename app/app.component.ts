import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {CodeService} from "./code.service";
import {CodeComponent} from "./code.component";

@Component({
    selector: 'my-app',
    template: `
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Programmer's Guide to the Galaxy</a>
          </div>
          <div id="navbar">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Language: {{_codeService.currentLanguage.text}} <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li *ngFor="#languageMenuItem of _codeService.languageMenuItems"
                    (click)="_codeService.updateLanguage(languageMenuItem)">
                    <a href="#">{{languageMenuItem.text}}</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a target="_blank" href="https://github.com/stuartaroth/programmersguidetothegalaxy">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="navbar navbar-inverse navbar-fixed-left">
        <ul class="nav navbar-nav">
          <li *ngFor="#folderMenuItem of _codeService.folderMenuItems"
            [class.active]="folderMenuItem == _codeService.currentFolder"
            (click)="_codeService.updateFolder(folderMenuItem)">
            <a href="#">{{folderMenuItem.text}}</a>
          </li>
        </ul>
      </div>
      <div class="container code-container">
        <code-component></code-component>
      </div>
      `,
    directives: [
      CodeComponent
    ],
    providers: [
      HTTP_PROVIDERS,
      CodeService
    ]
})
export class AppComponent implements OnInit {
  constructor(private _codeService:CodeService) {

  }

  ngOnInit():any {
    this._codeService.updateCode();
  }
}
