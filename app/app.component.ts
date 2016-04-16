import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Response} from "angular2/http";
import {CodeService, Folder, Language} from "./code.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {CodeComponent} from "./code.component";

@Component({
    selector: 'my-app',
    template: `
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="pgttg-nav">Arrays/Lists</li>
            <li class="pgttg-nav">Arrays/Lists Iteration</li>
            <li class="pgttg-nav">Command Line Arguments</li>
            <li class="pgttg-nav">Falsy Values</li>
            <li class="pgttg-nav">Functions</li>
            <li class="pgttg-nav">HashMaps</li>
            <li class="pgttg-nav">HashMaps Iteration</li>
            <li class="pgttg-nav">Hello World</li>
            <li class="pgttg-nav">If Statements</li>
            <li class="pgttg-nav">Interpolation</li>
            <li class="pgttg-nav">Loop Statements</li>
            <li class="pgttg-nav">Simple Class</li>
            <li class="pgttg-nav">Variables</li>
          </ul>
        </div>
        <code-component></code-component>`,
    directives: [
      ROUTER_DIRECTIVES,
      CodeComponent
    ],
    providers: [
      HTTP_PROVIDERS,
      CodeService
    ]
})
export class AppComponent {
  constructor(private _codeService:CodeService) {

  }
}
