import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SetTitleGuard implements CanActivateChild {
  constructor(private title: Title) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const titles = [childRoute.data.title, '我爱家人网'].filter(it => it && it.trim());
    this.title.setTitle(titles.join(' - '));
    return true;
  }
}
