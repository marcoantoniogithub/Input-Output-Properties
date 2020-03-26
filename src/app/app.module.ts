import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CarinhoDeComprasComponent } from './carinho-de-compras/carinho-de-compras.component';
import { ComprasComponent } from './compras/compras.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent, CarinhoDeComprasComponent, ComprasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
