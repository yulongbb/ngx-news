import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { StatementsData } from '../data/statements'


@Injectable()
export class StatementsService  extends StatementsData{

  constructor(private http: HttpClient) {
            super();
  }

  addStatement(from: string, to: string, statement:any): Observable<any[]>{
     return this.http
      .post<any>(`http://api.sunyulongbb.com:7525/statement?from=${from}&to=${to}`, statement)
      .pipe(
        map(statement => statement),
      );
  }

}