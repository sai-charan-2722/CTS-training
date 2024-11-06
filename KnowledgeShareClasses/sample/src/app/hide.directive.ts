import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  constructor(private tempRef:TemplateRef<any>, private viewConytainer:ViewContainerRef){}
  @Input() set appHide(condition:boolean){
    if(!condition){
      this.viewConytainer.createEmbeddedView(this.tempRef);
    }else{
      this.viewConytainer.clear();
    }
  }
}
