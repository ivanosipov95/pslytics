import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Sale} from '../../models';

@Injectable()
export class AllSalesService {

  constructor(private http: HttpClient) {
  }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`/api/sales`);
  }
}
