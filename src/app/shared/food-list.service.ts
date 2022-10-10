import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private url: string = "http://localhost:3000/"; // list-food

  private list: Array<string> = ["X-bacon", "Ovo", "Feijão"];

  constructor(private http: HttpClient) { }

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    );
  }

  public foodListAdd(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, {nome: value}).pipe(
      res => res,
      error => error
    );
  }

  /**
   * foodListAlert
   */
  // public foodListAlert(value: string) {
  //   // vai me alertar toda vez que receber um valor
  //   return this.emitEvent.emit(value);

  // }

  public foodListAlert(value: FoodList) {
    // vai me alertar toda vez que receber um valor
    return this.emitEvent.emit(value);

  }

}
