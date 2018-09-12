import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponentComponent } from './meu-primeiro-component/meu-primeiro-component.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponentComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
