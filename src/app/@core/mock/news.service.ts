import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { NewsPost, NewsData } from '../data/news'
import { Category } from '../data/category'

const TOTAL_PAGES = 7;

@Injectable()
export class NewsService  extends  NewsData{

  constructor(private http: HttpClient) {
            super();
  }

  load(page: number, pageSize: number, cate: Category): Observable<NewsPost[]> {
    const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;    
    return this.http
      .get<NewsPost[]>('assets/data/news.json')
      .pipe(
        map(news => news.filter((n: NewsPost) => n.tags.includes(cate.name)).splice(startIndex, pageSize)),
        delay(1500),
      );
  }
}