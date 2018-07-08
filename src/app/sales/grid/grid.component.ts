import {Component, Input, OnInit} from '@angular/core';
import {SaleModel} from '../sales.model';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.styl']
})
export class GridComponent implements OnInit {

  @Input() sales: SaleModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
