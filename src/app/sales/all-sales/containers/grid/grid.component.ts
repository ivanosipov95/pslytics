import {Component, Input, OnInit} from '@angular/core';
import {Sale, SaleModel} from '../../../models';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.styl']
})
export class GridComponent implements OnInit {

  @Input() mock: SaleModel[];
  @Input() sales: Sale[];

  constructor() {
  }

  ngOnInit() {
  }

}
