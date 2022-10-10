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

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService){}

  ngOnInit(): void {
    this.foodList = this.foodListService.listFood();
  }



}
