import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {StoreModule} from '@ngrx/store';
// import {EffectsModule} from '@ngrx/effects';

import {SalesRoutingModule} from './sales.routing.module';


// import {salesReducer} from './store/reducers/sales.reducer';
// import {AuthEffects} from './store/effects/sales.effect';
import {AllSalesModule} from './all-sales/all-sales.module';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature('sales', salesReducer),
    // EffectsModule.forFeature([AuthEffects]),
    SalesRoutingModule,
  ]
})
export class SalesModule { }
