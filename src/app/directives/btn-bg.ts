import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btnBg]',
})
export class BtnBgDirective implements OnInit {
  constructor(
    private btn: ElementRef,
    private rend: Renderer2,
  ) {}

  @Input('btnBgDefault')
  defaultBackground: string = 'linear-gradient(2deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';

  @Input('btnBgHover')
  hoverBackground: string = 'linear-gradient(2deg, rgb(200, 50, 70) 0%, rgb(255, 100, 120) 100%)';

  @HostListener('mouseenter')
  onHover() {
    this.rend.setStyle(
      this.btn.nativeElement,
      'box-shadow',
      '0 5px 9px 1px rgba(130, 19, 40, 0.5)',
    );
    this.changeElementBgColor(this.hoverBackground);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.rend.setStyle(this.btn.nativeElement, 'box-shadow', 'none');
    this.changeElementBgColor(this.defaultBackground);
  }

  ngOnInit() {
    this.changeElementBgColor(this.defaultBackground);
  }

  changeElementBgColor(color: string) {
    this.rend.setStyle(this.btn.nativeElement, 'background-image', color);
  }
}
