import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = ["X-bacon", "Ovo", "Feijão"];

  constructor() { }

  public foodList() {
    return this.list;
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value );
    return this.list.push(value);
  }

  /**
   * foodListAlert
   */
  public foodListAlert(value: string) {
    // vai me alertar toda vez que receber um valor
    return this.emitEvent.emit(value);

  }

}
