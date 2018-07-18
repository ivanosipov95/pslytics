import {Component, Input, OnInit} from '@angular/core';
import {Sale, SaleModel} from '../../../models';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.styl']
})
export class SaleComponent implements OnInit {

  @Input() mock: SaleModel;
  @Input() sale: Sale;

  constructor() {
  }

  ngOnInit() {
  }

}
