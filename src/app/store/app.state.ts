import {Themes} from '../common/components/header/components/theme-picker/themes.enum';
import {Languages} from '../common/i18n/languages.enum';

export interface AppState {
  currentTheme: Themes;
  currentLanguage: Languages;
}

export interface State {
  appState: AppState;
}

export const initialState: AppState = {
  currentTheme: Themes.dark,
  currentLanguage: Languages.ru
};
