import {Component, Input, OnInit} from '@angular/core';
import {Languages} from '../../i18n/languages.enum';
import {MatRadioChange} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.styl']
})
export class LanguagePickerComponent implements OnInit {

  @Input() selectedLanguage: Languages;
  @Input() languages: Languages;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {

  }

  changeLanguage($event: MatRadioChange): void {
    console.log($event);

    this.translate.setDefaultLang($event.value.toLowerCase());

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use($event.value.toLowerCase());
  }

}
