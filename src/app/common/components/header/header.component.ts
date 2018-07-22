import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/internal/Observable';

import * as appStore from '../../../store';
import {Languages} from '../../i18n/languages.enum';
import {Themes} from './components/theme-picker/themes.enum';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  @Output() toggle: EventEmitter<void> = new EventEmitter();

  currentTheme$: Observable<Themes>;
  currentLanguage$: Observable<Languages>;
  languages = Object.values(Languages);

  constructor(private store: Store<appStore.AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new appStore.InitLang());
    this.store.dispatch(new appStore.InitTheme());

    this.currentLanguage$ = this.store.select(appStore.getCurrentLang);
    this.currentTheme$ = this.store.select(appStore.getCurrentTheme);
  }

  toggleSideNav(): void {
    this.toggle.emit();
  }

  toggleTheme($event: Themes): void {
    this.store.dispatch(new appStore.SetTheme($event));
  }

  toggleLanguage($event: Languages): void {
    this.store.dispatch(new appStore.SetLang($event));
  }
}
