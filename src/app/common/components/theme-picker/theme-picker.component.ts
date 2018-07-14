import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Themes} from './themes.enum';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.styl']
})
export class ThemePickerComponent implements OnInit {

  @Input() theme: Themes;
  @Output() closeMenu: EventEmitter<Themes> = new EventEmitter();

  themes = Themes;

  constructor() {
  }

  ngOnInit() {
  }


  close($event) {
    this.closeMenu.emit($event);
  }
}
