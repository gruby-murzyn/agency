import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMainNav]',
  exportAs: 'appMainNav'
})
export class MainNavDirective {

  @HostBinding('class.is-open') click = false;
  constructor() { }

  @HostListener('click') onClick() {
    this.click = !this.click;
  }
}
