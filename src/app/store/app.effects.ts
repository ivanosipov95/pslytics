import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {TranslateService} from '@ngx-translate/core';
import {switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';


import {LocalStorageService} from '../common/services';
import {Languages} from '../common/i18n/languages.enum';
import {AppActionTypes, SetLang, SetTheme} from './app.actions';
import {Themes} from '../common/components/header/components/theme-picker/themes.enum';

@Injectable()
export class AppEffects {

  private langKey = 'lang';
  private themeKey = 'theme';

  constructor(private actions$: Actions,
              private translate: TranslateService,
              private localStorage: LocalStorageService) {
  }

  @Effect()
  initLang$ = this.actions$
    .ofType(AppActionTypes.INIT_LANG)
    .pipe(
      switchMap(() => {
        const storageLanguage = <Languages>this.localStorage.get(this.langKey);
        const currentLang = storageLanguage ? storageLanguage : Languages.ru;

        this.translate.setDefaultLang(Languages.ru);

        return of(new SetLang(currentLang));
      })
    );

  @Effect()
  initTheme$ = this.actions$
    .ofType(AppActionTypes.INIT_THEME)
    .pipe(
      switchMap(() => {
        const storageTheme = <Themes>this.localStorage.get(this.themeKey);
        const currentTheme = storageTheme ? storageTheme : Themes.dark;

        return of(new SetTheme(currentTheme));
      })
    );

  @Effect({dispatch: false})
  setLang$ = this.actions$
    .ofType(AppActionTypes.SET_LANG)
    .pipe(
      tap((action: SetLang) => {
        this.translate.use(action.payload);
        this.localStorage.set(this.langKey, action.payload);
      })
    );

  @Effect({dispatch: false})
  setTheme$ = this.actions$
    .ofType(AppActionTypes.SET_THEME)
    .pipe(
      tap((action: SetTheme) => {
        this.localStorage.set(this.themeKey, action.payload);
        document.body.className = action.payload;
      })
    );
}
