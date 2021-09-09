import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from '../usuarioService/usuario.service';
import { Logger } from 'src/app/models/logger/logger';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDAOService implements OnInit {

  private url : string = "https://labo-iv-112ed-default-rtdb.firebaseio.com/";

  constructor(
    private http : HttpClient,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
  } 

  async login ( usuario : Usuario ) {
    const usuarioLogeado = ( await this.checkIfExist(usuario) );

    if ( usuarioLogeado == null || usuarioLogeado == undefined ) return;
    
    this.usuarioService.sesionIniciada.emit( usuarioLogeado );
    this.logger( usuario, 'Inicio de Sesion' );
  }

  private async checkIfExist ( usuario : Usuario )  {
    console.log(usuario);
    let queryUrl = this.url + `usuarios.json?orderBy="email"&equalTo="${usuario.email}"&limitToFirst=1`;

    return await this.http.get<Usuario>(
      queryUrl
    ).toPromise()
  }

  async register ( usuario : Usuario ) {
    const headers = new HttpHeaders();
    const usuarioLogeado = ( await this.checkIfExist(usuario) );
    
    if ( usuarioLogeado != undefined ) {
      this.usuarioService.usuarioExistente('Este email se encuentra en uso.');
      return
    }

    const response = await this.http.post(
      this.url + 'usuarios.json',
      usuario,
      {observe: 'response'}
    ).toPromise();

    if ( !usuario.getError() && response.status === 200 ) {
      this.logger( usuario, 'Registro' );
      this.usuarioService.registroUsuario(usuario);
      return
    }

    usuario.setError();
  }

  logger( usuario : Usuario, logEvent : string ) {

    const actualDateTime = new Date();
    const log = new Logger(
      actualDateTime,
      usuario,
      logEvent
    );

    this.http.post(
      this.url + 'logger.json',
      log,
      {
        observe: 'response'
      }
    ).subscribe( (response) => console.log(response.ok? log : 'no se pudo realizar el LOG.') );

  }

}