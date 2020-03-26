import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carinho-de-compras',
  templateUrl: './carinho-de-compras.component.html',
  styleUrls: ['./carinho-de-compras.component.css']
})
export class CarinhoDeComprasComponent implements OnInit {

  @Input() produtos = [];

  constructor() { }

  ngOnInit() {
  }

}