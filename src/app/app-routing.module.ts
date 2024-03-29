import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { PuntajeComponent } from './components/puntaje/puntaje.component';
import { SignupComponent } from './components/signup/signup.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

const routes: Routes = [
  {path: 'log-in', component: LoginComponent},
  {path: 'who-am-i', component: WhoAmIComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'home', loadChildren: () => import('./subModules/juegos/juegos.module').then(m => m.JuegosModule) },
  {path: '', redirectTo:'/home', pathMatch:'full' },
  {path: 'encuesta', component: EncuestaComponent },
  {path: 'puntaje', component: PuntajeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }