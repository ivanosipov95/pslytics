import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

import {Product} from '../../models';

@Injectable()
export class AllProductsService {

  constructor(private http: HttpClient) {
  }

  getSales(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/sales`);
  }
}
