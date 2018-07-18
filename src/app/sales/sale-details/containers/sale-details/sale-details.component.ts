import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Sale} from '../../../models';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.styl']
})
export class SaleDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private http: HttpClient) {
  }

  sale$: Observable<Sale>;

  ngOnInit() {
    console.log(this.router.snapshot.params.saleId);

    this.sale$ =  this.http.get<Sale>(`/api/products/${this.router.snapshot.params.saleId}`);
  }

}
