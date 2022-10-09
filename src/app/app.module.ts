import { NgModule, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { InputComponent } from './shared/input/input.component';
import { OutputComponent } from "./shared/output/output.component";
import { FoodListComponent } from "./shared";


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBindingComponent,
    DiretivasEstruturaisComponent,
    InputComponent,
    OutputComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
