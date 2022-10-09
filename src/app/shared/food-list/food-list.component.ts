import { Component, OnInit } from '@angular/core';

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

  public foodList: Array<string> = [];

  ngOnInit(): void {
    // inciando o component preechendo a lista
    this.foodList = this.foodListService.getFoodList();
    this.foodListService.emitEvent.subscribe(
      {
        next: (res: any) => alert(`Você add => ${res}`),
        error: (err: any) => alert(err)
      }
    );
    // subscrice conecta este componete ao service, me avisando do seu comportamento
  }



}