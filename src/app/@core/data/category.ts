import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';


export class Category {
  id: string;
  name: string;
}


export abstract class CategoryData {
  abstract getById(id: string): Observable<Category[]>;
}
