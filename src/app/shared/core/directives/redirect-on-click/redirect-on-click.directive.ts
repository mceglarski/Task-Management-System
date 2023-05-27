import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[redirectOnClick]',
})
export class RedirectOnClickDirective {
  @Input('redirectOnClick') url: string;
  @Input() id: string | undefined;

  @HostBinding('style.cursor') cursor: string = 'default';

  constructor(private router: Router) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cursor = 'default';
  }

  @HostListener('click') onClick() {
    const redirectUrl = `${this.url}${this.id ? '/' + this.id : ''}`;
    this.router.navigateByUrl(redirectUrl);
  }
}
