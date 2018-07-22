// import {initialState, SalesState} from '../sales.state';
// import {GetSalesError, GetSalesSuccess, SalesActions, SalesActionTypes} from '../actions/sales.actions';
//
//
// export function salesReducer(state: SalesState = initialState, action: SalesActions): SalesState {
//   switch (action.type) {
//     case SalesActionTypes.GET_SALES:
//       return getSales(state);
//     case SalesActionTypes.GET_SALES_SUCCESS:
//       return getSalesSuccess(state, action);
//     case SalesActionTypes.GET_SALES_ERROR:
//       return getSalesError(state, action);
//     default:
//       return state;
//   }
// }
//
// function getSales(state: SalesState) {
//   return {...state};
// }
//
// function getSalesSuccess(state: SalesState, action: GetSalesSuccess) {
//   // const data = [...<Array<SaleModel>>action.payload];
//
//   return {
//     ...state,
//     // data
//   };
// }
//
// function getSalesError(state: SalesState, action: GetSalesError) {
//   const error = action.payload;
//
//   return {
//     ...state,
//   };
// }
