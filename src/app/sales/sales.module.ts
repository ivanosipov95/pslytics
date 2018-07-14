import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../common/material/material.module';
import { SalesRoutingModule } from './sales.routing.module';

import { SalesComponent } from './sales.component';
import { SaleComponent } from './sale/sale.component';
import { GridComponent } from './grid/grid.component';
import { SearchComponent } from './search/search.component';

import {SalesService} from './sales.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SalesRoutingModule
  ],
  declarations: [
    SalesComponent,
    SaleComponent,
    GridComponent,
    SearchComponent
  ],
  providers: [
    SalesService
  ]
})
export class SalesModule { }
