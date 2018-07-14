import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MaterialModule} from './common/material/material.module';
import {AppRoutingModule} from './app.routing.module';
import {SalesModule} from './sales/sales.module';

import {AppComponent} from './app.component';
import {ThemePickerModule} from './common/components/theme-picker/theme-picker.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ThemePickerModule,
    SalesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
