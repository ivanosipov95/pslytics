import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {Themes} from './common/components/theme-picker/themes.enum';
import {Languages} from './common/i18n/languages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  theme: Themes;

  languages = Object.values(Languages);
  selectedLanguage = Languages.ru;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ru');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ru');
  }

  ngOnInit() {

    console.log(Object.values(this.languages));
    // this.languages.
    this.theme = Themes.dark;

  }

  closeMenu($event: Themes) {
    this.theme = $event;
    document.body.className = $event;
  }
}
