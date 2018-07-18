import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {
  SaleComponent,
  SearchComponent
} from './components';

import {
  AllSalesComponent,
  GridComponent
} from './containers';

import {
  AllSalesService
} from './services';
import {MaterialModule} from '../../common/material/material.module';


const routes: Routes = [
  {
    path: '',
    component: AllSalesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    SaleComponent,
    SearchComponent,
    GridComponent,
    AllSalesComponent
  ],
  providers: [
    AllSalesService
  ]
})
export class AllSalesModule {
}
