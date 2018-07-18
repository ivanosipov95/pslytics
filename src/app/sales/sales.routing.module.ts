import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/sales/all-sales/all-sales.module#AllSalesModule'
  },
  {
    path: ':saleId',
    loadChildren: 'src/app/sales/sale-details/sale-details.module#SaleDetailsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
