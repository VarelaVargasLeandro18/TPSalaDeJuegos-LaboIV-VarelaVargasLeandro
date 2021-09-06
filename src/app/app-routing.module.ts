import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';

const routes: Routes = [
  {path: 'juegos', component: JuegosComponent},
  {path: 'log-in', component: LoginComponent},
  {path: 'who-am-i', component: WhoAmIComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }