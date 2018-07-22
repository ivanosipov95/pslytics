import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../../models';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.styl']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private http: HttpClient) {
  }

  product$: Observable<Product>;

  ngOnInit() {
    console.log(this.router.snapshot.params.productId);

    this.product$ =  this.http.get<Product>(`/api/products/${this.router.snapshot.params.productId}`);
  }

}
