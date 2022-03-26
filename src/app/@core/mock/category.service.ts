import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Category, CategoryData } from '../data/category'

@Injectable()
export class CategoryService  extends CategoryData{

  constructor(private http: HttpClient) {        
      super();
}

  getById(id: string): Observable<Category[]> {
    return this.http
      .get<Category[]>('assets/data/category.json')
      .pipe(
        map(category => category.filter(cate => cate.id == id)),
        delay(1500),
      );
  }
}