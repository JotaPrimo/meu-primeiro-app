import { Component, OnInit } from '@angular/core';

// services
import { FoodListService } from '../food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  /**
   * listAddItem
   */
  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe(
     {
      next: (res) => this.foodListService.foodListAlert(res),
      error: (error) => error,
     }
    );
  }

}
