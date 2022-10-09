import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  constructor() { }

  public date: Date = new Date();
  public nome: string = "";
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public textoButtonClick: string = 'Clicavel';
  public listaNomes: Array<{nome: string, idade: number}> = [
    {nome:"Jota", idade: 27}, {nome:"Jessica", idade: 24}, {nome:"Caleb", idade: 1}, {nome:"Jughead", idade: 1} ];

  ngOnInit(): void {
    setInterval( () => { this.condition = !this.condition}, 2000 );
  }

  onClick() {

    if(this.conditionClick) {
      this.conditionClick = !this.conditionClick;
      this.textoButtonClick = 'Não clicavel';
    }else {
      this.conditionClick = !this.conditionClick;
      this.textoButtonClick = 'Clicavel';
    }
  }

  public salvar() {
    this.listaNomes.push({nome: this.nome, idade: 0});
    this.nome = "";
  }

}
