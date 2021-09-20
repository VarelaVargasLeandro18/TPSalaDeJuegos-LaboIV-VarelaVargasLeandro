import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos.component';
import { KeyboardattackComponent } from './components/keyboardattack/keyboardattack.component';
import { MayorYmenorComponent } from './components/mayor-ymenor/mayor-ymenor.component';
import { PreguntadosComponent } from './components/preguntados/preguntados.component';

const routes: Routes = [
  { path:'', component: JuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayor-menor', component: MayorYmenorComponent },
  { path: 'keyboard-attack', component: KeyboardattackComponent },
  { path: 'preguntados', component: PreguntadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
