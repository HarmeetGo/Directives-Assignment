import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]'
})
export class MultipleDirective {
 @Input() set appMultiple(condition){
  if(condition){
    this.viewRef.createEmbeddedView(this.tempRef);
  }
  else{
    this.viewRef.clear();
  }
 }
  constructor(private tempRef: TemplateRef<any>,private viewRef:ViewContainerRef) { }

}
