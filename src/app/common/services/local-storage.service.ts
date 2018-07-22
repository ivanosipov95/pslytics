import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

  }

  get localStorage(): Storage {
    return window.localStorage;
  }

  get(key: string): string {
    return this.localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  clear(): void {
    this.localStorage.clear();
  }
}
