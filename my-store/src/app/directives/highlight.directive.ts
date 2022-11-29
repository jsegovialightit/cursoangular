import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'grey';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://developer.mozilla.org/en-US/docs/Web/Events
