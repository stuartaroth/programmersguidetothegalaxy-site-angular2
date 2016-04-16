import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

export enum Folder {
  ArraysLists,
  ArraysListsIteration,
  CommandLineArguments,
  FalsyValues,
  Functions,
  HashMaps,
  HashMapsIteration,
  HelloWorld,
  Ifs,
  Interpolation,
  Loops,
  SimpleClass,
  Variables
}

export enum Language {
  Go,
  Java,
  Perl,
  Python,
  Ruby,
  Scala,
  TypeScript
}

@Injectable()
export class CodeService {
  constructor(
    private _http: Http
  ) {}

  private getFolder = (folder:Folder) => {
    switch(folder) {
      case Folder.ArraysLists:
        return "arrays_lists";
      case Folder.ArraysListsIteration:
        return "arrays_lists_iteration";
      case Folder.CommandLineArguments:
        return "command_line_arguments";
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

  private getLanguage = (language:Language) => {
    switch(language) {
      case Language.Go:
        return "example.go";
      case Language.Java:
        return "Example.java";
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
 
  getCode = (folder:Folder, language:Language) => this._http.get(`node_modules/programmersguidetothegalaxy/${this.getFolder(folder)}/${this.getLanguage(language)}`);

  currentFolder:Folder = Folder.SimpleClass;
  currentLanguage:Language = Language.Go;
  currentCode:string = "";
  
  updateCode = () => {
    this.getCode(this.currentFolder, this.currentLanguage).subscribe((response:Response) => {
      this.currentCode = response.text();
    });
  };
  
  update = (folder:Folder, language:Language) => {
    this.currentFolder = folder;
    this.currentLanguage = language;
    this.updateCode();
  }
}