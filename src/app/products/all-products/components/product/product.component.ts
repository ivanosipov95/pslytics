import {Component, Input, OnInit} from '@angular/core';

import {Product} from '../../../models';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
