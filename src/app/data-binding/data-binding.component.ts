import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public primogenito: string = 'Caleb Romeo';
  public cacula: string = 'Jughead Jones';
  public idade: number = 1;
  public checkedDisabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  temCerteza(){
    confirm('Já avisei que vai dar merda isso')
  }
}
