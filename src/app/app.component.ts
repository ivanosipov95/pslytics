import {Component} from '@angular/core';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  constructor() {
  }


  toggleTheme(change: MatSlideToggleChange) {
    document.body.className = change.checked ? 'light-theme' : 'dark-theme';
  }
}
