import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Category } from './category'

const TOTAL_PAGES = 7;

export class NewsPost {
  tags: Array<string>;
  labels:  Map<string, LanguageValue>;
  descs: Map<string, LanguageValue>;
  climas: Map<string, Statement[]>;
}

export class LanguageValue {
  lan:  string;
  val: string;
}


export class Statement {
  tp:  string;
  val: Value;
}

export class Value {
  dt:  string;
  dv: string;
}


export abstract class NewsData {
  abstract load(page: number, pageSize: number, cate: Category): Observable<NewsPost[]>;
}
