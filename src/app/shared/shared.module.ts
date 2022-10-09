import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodAddComponent } from './food-add/food-add.component';




@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
    FoodAddComponent,
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