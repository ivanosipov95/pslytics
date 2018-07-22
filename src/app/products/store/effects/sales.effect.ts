// import {Injectable} from '@angular/core';
// import {Action} from '@ngrx/store';
// import {Actions, Effect, ofType} from '@ngrx/effects';
// import {Observable, of} from 'rxjs';
// import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
//
// // import {SalesService} from '../../sales.service';
// // import {SalesActionTypes} from '../actions/sales.actions';
// // import {SaleModel} from '../../sales.model';
// import * as SalesAction from '../actions/sales.actions';
//
// @Injectable()
// export class AuthEffects {
//   constructor(private actions$: Actions) {
//   }
//
//   // Listen for the 'LOGIN' action
//   // @Effect()
//   // login$: Observable<Action> = this.actions$.pipe(
//   //   ofType(SalesActionTypes.GET_SALES),
//   //   mergeMap(() =>
//   //     this.salesService.getSales()
//   //       .pipe(
//   //       // If successful, dispatch success action with result
//   //       map((sales: SaleModel[]) => new SalesAction.GetSalesSuccess(sales)),
//   //       // If request fails, dispatch failed action
//   //       catchError(err => of(new SalesAction.GetSalesError(err)))
//   //     )
//   //   )
//   // );
//
//
// }
