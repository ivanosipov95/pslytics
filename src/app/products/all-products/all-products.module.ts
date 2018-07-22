import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {
  ProductComponent,
  SearchComponent
} from './components';

import {
  AllProductsComponent,
  GridComponent
} from './containers';

import {
  AllProductsService
} from './services';
import {MaterialModule} from '../../common/material/material.module';
import {TranslateModule} from '@ngx-translate/core';


const routes: Routes = [
  {
    path: '',
    component: AllProductsComponent
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
    ProductComponent,
    SearchComponent,
    GridComponent,
    AllProductsComponent
  ],
  providers: [
    AllProductsService
  ]
})
export class AllProductsModule {
}
