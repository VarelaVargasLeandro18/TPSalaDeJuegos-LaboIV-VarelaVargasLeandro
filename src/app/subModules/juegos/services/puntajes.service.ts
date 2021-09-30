import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { Puntajes } from '../models/puntajes';

@Injectable({
  providedIn: 'root'
})
export class PuntajesService {
  
  private puntajesDB : string = "puntajes";
  private usuario? : Usuario;
  private email? : string;

  constructor(
    private db : AngularFirestore,
    private usuarioService : UsuarioService
  ) {}

  async getPuntajes () {
    const usuario = this.usuarioService.iniciado;
    this.usuario = usuario;
    this.email = usuario?.email;
    if ( usuario === undefined ) return

    const mail = this.email;
    const puntajesUsuario = 
      (await this.db.collection( this.puntajesDB, ref => ref.where( "usuario", "==", mail ) )
      .get()
      .toPromise()).docs.map( doc => doc.data() );
    
  }

  addPuntaje ( id : number, puntaje : number ) {
    if ( !this.email ) return
    const objPuntaje = new Puntajes( id, new Date, puntaje, this.email );
    this.db.collection(this.puntajesDB).doc().set({...objPuntaje});
  }

}
