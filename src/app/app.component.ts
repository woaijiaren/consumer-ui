import { Component } from '@angular/core';
import { IconRegistry } from './core/icon/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(iconRegistry: IconRegistry) {
    iconRegistry.registerAll();
  }
}
