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

  // não pode ser acessado diretamente
  private list: Array<string> = ["X-Bacon", "Feijão", "Ovo"];

  constructor(private http: HttpClient) { }

  /**
   * listFood
   */
  public listFood() {
    return this.list;
  }

}
