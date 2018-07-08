import {Component, Input, OnInit} from '@angular/core';
import {SaleModel} from '../sales.model';

@Component({
  selector: 'sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.styl']
})
export class SaleComponent implements OnInit {

  @Input() sale: SaleModel;

  constructor() {
  }

  ngOnInit() {
  }

}
