import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconRegistry {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
  }

  registerAll(): void {
    this.iconRegistry.addSvgIcon('about', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/about.icon.svg')));
    this.iconRegistry.addSvgIcon('balance', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/balance.icon.svg')));
    this.iconRegistry.addSvgIcon('coupon', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/coupon.icon.svg')));
    this.iconRegistry.addSvgIcon('feedback', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/feedback.icon.svg')));
    this.iconRegistry.addSvgIcon('logout', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/logout.icon.svg')));
    this.iconRegistry.addSvgIcon('package', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/package.icon.svg')));
    this.iconRegistry.addSvgIcon('point', this.sanitizer.bypassSecurityTrustResourceUrl(require('./icons/point.icon.svg')));
  }
}
