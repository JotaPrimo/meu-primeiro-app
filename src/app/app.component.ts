import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  public addValue: number = 10;
  public getDados: {nome: string, idade: number} | undefined;

  public add() {
    this.addValue += 1;
  }

/**
 * setDados
 */
public setDados(event: { nome: string, idade: number }) {
  this.getDados = event;
}

}
