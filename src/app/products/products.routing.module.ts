import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/products/all-products/all-products.module#AllProductsModule'
  },
  {
    path: ':productId',
    loadChildren: 'src/app/products/product-details/product-details.module#ProductDetailsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
