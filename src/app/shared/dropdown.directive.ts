import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  @HostListener('focusout') close(){
    this.isOpen = false;
  }

}
