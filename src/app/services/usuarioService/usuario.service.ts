import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  registro : EventEmitter<Usuario> = new EventEmitter<Usuario>();
  usuarioYaRegistrado : EventEmitter<string> = new EventEmitter<string>();
  sesionIniciada : EventEmitter<Usuario> = new EventEmitter<Usuario>();

  iniciado! : Usuario;
  
  constructor(
  ) { }

  registroUsuario ( usuario : Usuario ) {
    this.iniciado = usuario;
    this.registro.emit(this.iniciado);
  }

  getUsuario() {
    return this.iniciado;
  }

  usuarioExistente( mensaje : string ) {
    this.usuarioYaRegistrado.emit(mensaje);
  }

  iniciarSesion( usuario : Usuario ) {
    this.sesionIniciada.emit(usuario);
  }

}
