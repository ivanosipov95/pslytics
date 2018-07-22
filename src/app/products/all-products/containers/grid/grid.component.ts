import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.styl']
})
export class GridComponent implements OnInit {

  @Input() products: Product[];

  constructor() {
  }

  ngOnInit() {
  }

}
