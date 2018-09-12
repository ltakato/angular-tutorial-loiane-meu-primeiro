import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
