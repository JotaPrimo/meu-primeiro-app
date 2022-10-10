import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

// services
import { FoodListService } from "../food-list.service";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  // injeção de dependcia
  constructor(private foodListService: FoodListService) { }

  public foodList: Array<FoodList> = [];

  ngOnInit(): void {
    // inciando o component preechendo a lista
    this.foodListService.foodList().subscribe(
      {
        next: (res) => this.foodList = res,
        error: (err) => console.log(err)
      }
    );

    this.foodListService.emitEvent.subscribe(
      {
        next: (res: any) => {
          alert(`Você add => ${res.nome}`);
          return this.foodList.push(res)
        },
        error: (err: any) => alert(err)
      }
    );
    // subscrice conecta este componete ao service, me avisando do seu comportamento
  }



}
