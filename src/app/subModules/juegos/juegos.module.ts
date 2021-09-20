import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { BarraDeVidaComponent } from './components/barra-de-vida/barra-de-vida.component';
import { JuegoNotFoundComponent } from './components/juego-not-found/juego-not-found.component';
import { MayorYmenorComponent } from './components/mayor-ymenor/mayor-ymenor.component';
import { KeyboardattackComponent } from './components/keyboardattack/keyboardattack.component';
import { LetrasComponent } from './components/letras/letras.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    LetrasComponent,
    BarraDeVidaComponent,
    JuegoNotFoundComponent,
    MayorYmenorComponent,
    KeyboardattackComponent,
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    HttpClientModule
  ]
})
export class JuegosModule { }