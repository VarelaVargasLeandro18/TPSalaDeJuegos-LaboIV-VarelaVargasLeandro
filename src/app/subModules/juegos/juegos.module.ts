import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './juegos.component';
import { AhorcadoComponent } from '../components/ahorcado/ahorcado.component';
import { LetrasComponent } from '../components/letras/letras.component';
import { BarraDeVidaComponent } from '../components/barra-de-vida/barra-de-vida.component';
import { JuegoNotFoundComponent } from '../components/juego-not-found/juego-not-found.component';
import { MayorYmenorComponent } from '../components/mayor-ymenor/mayor-ymenor.component';


@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    LetrasComponent,
    BarraDeVidaComponent,
    JuegoNotFoundComponent,
    MayorYmenorComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }