import {Component, OnInit} from '@angular/core';
import {AllProductsService} from '../../services';
import {Product} from '../../../models';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.styl']
})
export class AllProductsComponent implements OnInit {
  products: Product[];

  constructor(private allProductsService: AllProductsService) {
  }

  ngOnInit() {
    this.allProductsService.getSales()
      .pipe(
        tap(products => console.log(products))
      ).subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
