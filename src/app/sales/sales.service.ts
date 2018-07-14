import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class SalesService {

  constructor(private http: HttpClient) {
  }

  getSales(): Observable<any> {
    return this.http.get<any>(`/api/sales`);
  }
}
