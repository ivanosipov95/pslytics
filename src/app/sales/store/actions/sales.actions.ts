import {Action} from '@ngrx/store';

import {SaleModel} from '../../models';

export class SalesActionTypes {
  static readonly GET_SALES = 'GET_SALES';
  static readonly GET_SALES_SUCCESS = 'GET_SALES_SUCCESS';
  static readonly GET_SALES_ERROR = 'GET_SALES_ERROR';
}

export class GetSales implements Action {
  readonly type = SalesActionTypes.GET_SALES;
}

export class GetSalesSuccess implements Action {
  readonly type = SalesActionTypes.GET_SALES_SUCCESS;

  constructor(public payload: SaleModel[]) {
  }
}

export class GetSalesError implements Action {
  readonly type = SalesActionTypes.GET_SALES_ERROR;

  constructor(public payload: Error | string) {
  }
}

export type SalesActions
  = GetSales
  | GetSalesSuccess
  | GetSalesError;
