import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgrondColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgrondColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgrondColor = this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');
    this.backgrondColor = this.defaultColor;
    // this.renderer.removeStyle(this.elRef.nativeElement, 'color');
  }
}
