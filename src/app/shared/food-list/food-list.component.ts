import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

// Services
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next: (res) => this.foodList = res,
      error: (error) => error
    });

    // toda vez que o o service de food list emitir um evnto
    // o foodList componet será alertado
    this.foodListService.emitEvent.subscribe(
      { next: (res: any) => {
        alert(`Olha vc add o item => ${res.nome}`);
        return this.foodList.push(res)
      }
    }
    );
  }



}
