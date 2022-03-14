import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onHover() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseleave')
  onBlur() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
  }

}
