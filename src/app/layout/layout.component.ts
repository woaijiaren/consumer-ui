import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
// @ts-ignore
import * as requestsIcon from '!!raw-loader!./icons/requests.svg';
// @ts-ignore
import * as ordersIcon from '!!raw-loader!./icons/orders.svg';
// @ts-ignore
import * as servicesIcon from '!!raw-loader!./icons/services.svg';
// @ts-ignore
import * as profileIcon from '!!raw-loader!./icons/profile.svg';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('requests', sanitizer.bypassSecurityTrustHtml(requestsIcon));
    iconRegistry.addSvgIconLiteral('orders', sanitizer.bypassSecurityTrustHtml(ordersIcon));
    iconRegistry.addSvgIconLiteral('services', sanitizer.bypassSecurityTrustHtml(servicesIcon));
    iconRegistry.addSvgIconLiteral('profile', sanitizer.bypassSecurityTrustHtml(profileIcon));
  }

  links = [
    {
      path: '/requests',
      icon: 'requests',
      label: '预约',
    },
    {
      path: '/orders',
      icon: 'orders',
      label: '订单',
    },
    {
      path: '/services',
      icon: 'services',
      label: '服务',
    },
    {
      path: '/profile',
      icon: 'profile',
      label: '我的',
    },
  ];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
