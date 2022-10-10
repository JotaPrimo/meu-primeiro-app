import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public listComida: Array<{comida: string, preco: number}> = [
    { comida: 'X-Bacon', preco: 10 },
    { comida: 'X-Salada', preco: 12  },
    { comida: 'X-Tudo', preco: 14  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
