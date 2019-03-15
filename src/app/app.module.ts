import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeCn from '@angular/common/locales/zh-Hans';
import localeCnExtra from '@angular/common/locales/extra/zh-Hans';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDb } from './shared/mock/mock-db';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeCn, 'zh-Hans', localeCnExtra);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'consumer-ui' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockDb, { passThruUnknownUrl: true, delay: 0 }),
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-Hans' }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
