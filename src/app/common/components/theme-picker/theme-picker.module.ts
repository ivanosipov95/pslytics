import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePickerComponent } from './theme-picker.component';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ThemePickerComponent],
  exports: [ThemePickerComponent]
})
export class ThemePickerModule { }
