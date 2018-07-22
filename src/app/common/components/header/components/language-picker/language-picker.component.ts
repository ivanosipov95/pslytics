import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';

import {Languages} from '../../../../i18n/languages.enum';

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.styl']
})
export class LanguagePickerComponent implements OnInit {

  @Input() currentLanguage: Languages;
  @Input() languages: Languages;

  @Output() toggleLanguage: EventEmitter<Languages> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  select($event: MatRadioChange) {
    this.toggleLanguage.emit($event.value);
  }
}
