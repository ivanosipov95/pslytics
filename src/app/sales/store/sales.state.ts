import {SaleModel} from '../models';

export interface SalesState {
  data: SaleModel[];
}

export const initialState: SalesState = {
  data: []
};
