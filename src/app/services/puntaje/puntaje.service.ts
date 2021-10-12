import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Puntaje } from 'src/app/models/puntaje/puntaje';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from '../usuarioService/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {
  
  private iniciado? : Usuario;
  private collection : string = "puntajes";

  constructor(
    private db : AngularFirestore,
    private usuarioService : UsuarioService
  ) {
    this.iniciado = this.usuarioService.iniciado;
  }

  async getPuntajesUsuario() {
    if ( !this.iniciado ) return;
    return await this.db.collection<Puntaje>( this.collection ).ref.where( 'usuario', '==', this.iniciado.email )
                .get().then( snapshots => snapshots.docs.map( snapshot => snapshot.data() as Puntaje ) );
  }

}
