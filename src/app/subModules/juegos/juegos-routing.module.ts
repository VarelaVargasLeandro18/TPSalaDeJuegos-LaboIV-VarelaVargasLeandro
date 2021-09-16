import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos.component';

const routes: Routes = [
  { path:'', component: JuegosComponent },
  { path: 'ahorcado', component: AhorcadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
