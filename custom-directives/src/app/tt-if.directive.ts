import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTtIf]'
})
export class TtIfDirective {

  _appTtIf:boolean=true;

  @Input() set appTtIf(condition:boolean){
    this._appTtIf = condition;
    this._updateView();
  }

  _updateView(){
    if(this._appTtIf){
      this._viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this._viewContainer.clear();
    }
  }

  constructor(private _viewContainer:ViewContainerRef,private templateRef:TemplateRef<any>) { }
  
}
