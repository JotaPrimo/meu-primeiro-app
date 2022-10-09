import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    { nome: 'Caleb Romeo', idade: 1 },
    { nome: 'Jughead Jones', idade: 1 },
    { nome: 'Judy', idade: 2 }
  ];

  ngOnInit(): void {
  }

  /**
   * getDados
   */
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
