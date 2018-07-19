import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SaleDetailsComponent} from './containers';
import {MaterialModule} from '../../common/material/material.module';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: SaleDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    TranslateModule
  ],
  declarations: [
    SaleDetailsComponent
  ]
})
export class SaleDetailsModule {
}
