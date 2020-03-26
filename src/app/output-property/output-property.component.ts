import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  
  @Output() mudouValor = new EventEmitter();

  valor:number = 0;

  constructor() { }

  ngOnInit() {
  }

  public mais() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  public menos(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}