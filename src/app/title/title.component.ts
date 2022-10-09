import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  // decorator que permite enviar dados
  // caso venha um valor, ele substitui o padrão
  @Input() public title: string = "Bem vindo";

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges funfando');
  }

  ngOnInit(): void {
    console.log('TitleComponent: ngOnInit funfando alterado com sucesso')
  }

}
