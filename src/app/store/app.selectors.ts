import {createSelector} from '@ngrx/store';

import {getAppState} from './app.reducer';
import {AppState} from './app.state';

export const getCurrentLang = createSelector(
  getAppState,
  (state: AppState) => state.currentLanguage
);

export const getCurrentTheme = createSelector(
  getAppState,
  (state: AppState) => state.currentTheme
);
