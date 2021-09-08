import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioDAOService } from '../usuarioDAO/usuario-dao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  registro : EventEmitter<Usuario> = new EventEmitter<Usuario>();
  usuarioYaRegistrado : EventEmitter<string> = new EventEmitter<string>();

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

}
