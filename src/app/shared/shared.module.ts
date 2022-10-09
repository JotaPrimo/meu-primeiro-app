import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

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
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InputComponent,
    OutputComponent,
  ]
})
export class SharedModule { }
