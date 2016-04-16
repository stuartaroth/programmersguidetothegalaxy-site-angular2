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

export interface LanguageMenuItem {
  language:Language,
  text:string;
}

export interface FolderMenuItem {
  folder:Folder;
  text:string;
}

@Injectable()
export class CodeService {
  constructor(
    private _http: Http
  ) {}

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

  languageMenuItems:Array<LanguageMenuItem> = [
    {language:Language.Go, text:"Go"},
    {language:Language.Java, text:"Java"},
    {language:Language.Perl, text:"Perl"},
    {language:Language.Python, text:"Python"},
    {language:Language.Ruby, text:"Ruby"},
    {language:Language.Scala, text:"Scala"},
    {language:Language.TypeScript, text:"TypeScript"},
  ];

  folderMenuItems:Array<FolderMenuItem> = [
    {folder:Folder.ArraysLists, text:"Arrays/Lists"},
    {folder:Folder.ArraysListsIteration, text:"Arrays/Lists Iteration"},
    {folder:Folder.SimpleClass, text:"Classes"},
    {folder:Folder.CommandLineArguments, text:"Command Line Arguments"},
    {folder:Folder.FalsyValues, text:"Falsy Values"},
    {folder:Folder.Functions, text:"Functions"},
    {folder:Folder.HashMaps, text:"Hash Maps"},
    {folder:Folder.HashMapsIteration, text:"Hash Maps Iteration"},
    {folder:Folder.HelloWorld, text:"Hello World"},
    {folder:Folder.Ifs, text:"If Statements"},
    {folder:Folder.Interpolation, text:"Interpolation"},
    {folder:Folder.Loops, text:"Loop Statements"},
    {folder:Folder.Variables, text:"Variables"}
  ];
 
  getCode = (language:Language, folder:Folder) => this._http.get(`node_modules/programmersguidetothegalaxy/${this.getFolder(folder)}/${this.getLanguage(language)}`);

  currentLanguage:LanguageMenuItem = this.languageMenuItems[0];
  currentFolder:FolderMenuItem = this.folderMenuItems[2];
  currentCode:string = "";
  
  updateCode = () => {
    this.getCode(this.currentLanguage.language, this.currentFolder.folder).subscribe((response:Response) => {
      this.currentCode = response.text();
    });
  };
  
  updateFolder = (folderMenuItem:FolderMenuItem) => {
    this.currentFolder = folderMenuItem;
    this.updateCode();
  };

  updateLanguage = (languageMenuItem:LanguageMenuItem) => {
    this.currentLanguage = languageMenuItem;
    this.updateCode();
  };
}