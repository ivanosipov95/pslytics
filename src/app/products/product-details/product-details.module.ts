import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProductDetailsComponent} from './containers';
import {MaterialModule} from '../../common/material/material.module';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent
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
    ProductDetailsComponent
  ]
})
export class ProductDetailsModule {
}
