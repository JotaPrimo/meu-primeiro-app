import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "X-Bacon",
    "Feijão",
    "Ovo",
  ];

  constructor() { }

  public getFoodList() {
    return this.list;
  }

  public foodListAdd(value: string){
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
