import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Themes} from './themes.enum';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.styl']
})
export class ThemePickerComponent implements OnInit {

  @Input() currentTheme: Themes;
  @Output() toggleTheme: EventEmitter<Themes> = new EventEmitter();

  themes = Themes;

  constructor() {
  }

  ngOnInit() {
  }

  close($event: Themes) {
    this.toggleTheme.emit($event);
  }
}
