import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import {AppState, initialState, State} from './app.state';
import {AppActions, AppActionTypes, SetLang, SetTheme} from './app.actions';

export const reducer: ActionReducerMap<State> = {
  appState: appReducer
};

export const getAppState = createFeatureSelector<AppState>(
  'appState'
);

export function appReducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.INIT_LANG:
      return state;
    case AppActionTypes.INIT_THEME:
      return state;
    case AppActionTypes.SET_LANG:
      return setLang(state, action);
    case AppActionTypes.SET_THEME:
      return setTheme(state, action);
    default:
      return state;
  }
}

function setLang(state: AppState, action: SetLang) {
  return {...state, currentLanguage: action.payload};
}

function setTheme(state: AppState, action: SetTheme) {
  return {...state, currentTheme: action.payload};
}
