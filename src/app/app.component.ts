import {Component, OnInit} from '@angular/core';
import {Themes} from './common/components/theme-picker/themes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  theme: Themes;

  constructor() {
  }

  ngOnInit() {
    this.theme = Themes.dark;
  }

  closeMenu($event: Themes) {
    this.theme = $event;
    document.body.className = $event;
  }
}
