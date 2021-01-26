import { Directive, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appRegExpression]'
})
export class RegExpressionDirective {
  @Input('appRegExpression') appRegExpression: string;

  constructor(private control: NgControl) { }

  @HostListener('blur') oninput(){
    let replaceValue = this.control.control.value;
    if (this.control.control.value){
      switch (this.appRegExpression){
        case 'E':
          replaceValue = this.control.control.value.replace(/[^A-Za-z]/g, '');
        break;
        case 'N':
          replaceValue = this.control.control.value.replace(/[^0-9]/g, '');
        break;

        case 'C':
          replaceValue = this.control.control.value.replace(/[^\u4e00-\u9fa5]/g, '');
        break;
      }
      if (replaceValue !== this.control.control.value){
        this.control.control.setValue(replaceValue);
      }
    }
    // console.log(this.control.control.value);
  }
}
