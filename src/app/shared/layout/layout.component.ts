import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
// @ts-ignore
import * as requestsIcon from '!!raw-loader!./icons/requests.svg';
// @ts-ignore
import * as ordersIcon from '!!raw-loader!./icons/orders.svg';
// @ts-ignore
import * as servicesIcon from '!!raw-loader!./icons/services.svg';
// @ts-ignore
import * as articlesIcon from '!!raw-loader!./icons/articles.svg';
// @ts-ignore
import * as profileIcon from '!!raw-loader!./icons/profile.svg';
// @ts-ignore
import * as logoIcon from '!!raw-loader!./icons/logo.svg';

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
    iconRegistry.addSvgIconLiteral('articles', sanitizer.bypassSecurityTrustHtml(articlesIcon));
    iconRegistry.addSvgIconLiteral('profile', sanitizer.bypassSecurityTrustHtml(profileIcon));
    iconRegistry.addSvgIconLiteral('logo', sanitizer.bypassSecurityTrustHtml(logoIcon));
  }

  links = [
    {
      path: '/requests',
      icon: 'requests',
      label: '预约',
    },
    {
      path: '/services',
      icon: 'services',
      label: '服务',
    },
    {
      path: '/orders',
      icon: 'orders',
      label: '订单',
    },
    {
      path: '/articles',
      icon: 'articles',
      label: '文章',
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

  forceReload(): void {
    location.reload(true);
  }
}
