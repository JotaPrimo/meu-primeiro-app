import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();

    // toda vez que o o service de food list emitir um evnto
    // o foodList componet será alertado
    this.foodListService.emitEvent.subscribe(
      { next: (res: any) => alert(`Olha vc add o item => ${res}`) }
    );
  }



}
