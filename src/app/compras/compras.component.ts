import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  @Output()compras = new EventEmitter();;

  contador: number = 0;
  produtos = [
    {
      id:1,
      nome:"Produto 1"
    },
    {
      id:2,
      nome:"Produto 2"
    },
    {
      id:3,
      nome:"Produto 3"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  acao(produto){
    this.compras.emit({produto: produto});
    this.contador++;
  }

}