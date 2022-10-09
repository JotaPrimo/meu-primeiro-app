import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';




@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
    FoodListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    OutputComponent,
  ]
})
export class SharedModule { }
