import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {StoreModule} from '@ngrx/store';
// import {EffectsModule} from '@ngrx/effects';

import {ProductsRoutingModule} from './products.routing.module';


// import {salesReducer} from './store/reducers/sales.reducer';
// import {AuthEffects} from './store/effects/sales.effect';
import {AllProductsModule} from './all-products/all-products.module';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature('sales', salesReducer),
    // EffectsModule.forFeature([AuthEffects]),
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
