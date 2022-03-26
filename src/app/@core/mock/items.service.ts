import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ItemsData } from '../data/items'
import { Category } from '../data/category'

const TOTAL_PAGES = 7;

@Injectable()
export class ItemsService  extends ItemsData{

  constructor(private http: HttpClient) {
            super();
  }

  addItem(item:any): Observable<any[]>{
     return this.http
      .post<any>(`http://api.sunyulongbb.com:7525/item`, item)
      .pipe(
        map(item => item),
      );
  }

  getItemByType(type: string): Observable<any[]>{
    return this.http
      .get<any[]>(`http://api.sunyulongbb.com:7525/item/type?type=${type}`)
      .pipe(
        map(items => items),
      );
  }
}