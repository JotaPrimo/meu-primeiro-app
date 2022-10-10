import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

// Components
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from "./food-list";





@NgModule({
  declarations: [
    InputComponent,
    OutputComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    InputComponent,
    OutputComponent,
    FoodListComponent
  ]
})
export class SharedModule { }
