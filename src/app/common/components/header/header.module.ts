import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '../../material/material.module';
import {LanguagePickerComponent, ThemePickerComponent} from './components';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    LanguagePickerComponent,
    ThemePickerComponent,
    HeaderComponent
  ],
  exports: [
    LanguagePickerComponent,
    ThemePickerComponent,
    HeaderComponent
  ]
})
export class HeaderModule {
}
