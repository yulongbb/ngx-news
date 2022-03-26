
import { Observable } from 'rxjs';

export abstract class ItemsData {

  abstract addItem(item:any): Observable<any[]>;

  abstract getItemByType(type: string): Observable<any[]>;
}
