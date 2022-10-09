import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';


@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private url: string = "http://localhost:3000/"; //

  private list: Array<string> = [
    "X-Bacon",
    "Feijão",
    "Ovo",
  ];

  constructor(private http: HttpClient) { }

  // public getFoodList() {
  //   return this.list;
  // }

  public foodList(): Observable<FoodList> {
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(res => res, error => error);
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  /**
   * foodListAlert
   */
  public foodListAlert(value: string) {
    // dispara alerta toda vez que receber uma valor
    return this.emitEvent.emit(value);
  }

}
