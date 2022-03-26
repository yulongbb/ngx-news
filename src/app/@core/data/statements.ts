
import { Observable } from 'rxjs';

export abstract class StatementsData {

  abstract addStatement(form: string, to: string, statement:any): Observable<any[]>;
}
