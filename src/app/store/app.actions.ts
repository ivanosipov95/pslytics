import {Action} from '@ngrx/store';

import {Languages} from '../common/i18n/languages.enum';
import {Themes} from '../common/components/header/components/theme-picker/themes.enum';

export class AppActionTypes {
  static readonly INIT_LANG = 'INIT_LANG';
  static readonly INIT_THEME = 'INIT_THEME';
  static readonly SET_LANG = 'SET_LANG';
  static readonly SET_THEME = 'SET_THEME';
}

export class InitLang implements Action {
  readonly type = AppActionTypes.INIT_LANG;
}

export class InitTheme implements Action {
  readonly type = AppActionTypes.INIT_THEME;
}

export class SetLang implements Action {
  readonly type = AppActionTypes.SET_LANG;

  constructor(public payload: Languages) {
  }
}

export class SetTheme implements Action {
  readonly type = AppActionTypes.SET_THEME;

  constructor(public payload: Themes) {
  }
}


export type AppActions
  = InitLang
  | InitTheme
  | SetLang
  | SetTheme;
