import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WhoAmIComponent } from './components/who-am-i/who-am-i.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { ListaChatsComponent } from './components/lista-chats/lista-chats.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { PuntajeComponent } from './components/puntaje/puntaje.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WhoAmIComponent,
    NavigationComponent,
    SignupComponent,
    ErrorComponent,
    FooterComponent,
    ChatComponent,
    ListaChatsComponent,
    EncuestaComponent,
    PuntajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
