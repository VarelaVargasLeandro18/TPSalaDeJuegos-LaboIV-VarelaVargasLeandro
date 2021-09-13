import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth/auth';
import { Chat } from 'src/app/models/chat/chat';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ChatService } from '../chat/chat.service';
import { UsuarioDAOService } from '../usuarioDAO/usuario-dao.service';

@Injectable({
  providedIn: 'root'
})
export class ChatDAOService {

  private collectionChat : string = 'chats';

  constructor(
    private db : AngularFirestore,
    private usuarioDAO : UsuarioDAOService,
    private chatService : ChatService
  ) { 
    this.obtenerChats()
      .then( (chats) => this.chatService.cambioDeChats( chats ) );
    
    this.db.collection<Chat>( this.collectionChat ).valueChanges()
      .subscribe( () => {
        this.obtenerChats()
          .then( (chats) => this.chatService.cambioDeChats(chats) );
      } );
  }

  async obtenerChats() : Promise<Chat[]> {
    const chatsData = (await this.db.collection<Chat>( this.collectionChat ).get().toPromise()).docs
      .map( (doc) => doc.data() );
    const usuariosRef = [];

    for( const chatData of chatsData ) {
      usuariosRef.push( (await chatData.usuario.get()) );
    }

    const usuarios = usuariosRef.map( (ref) => new Usuario( ref.id, ref.data().contrasenia, ref.data().nombre, ref.data().apellido ) );
    
    chatsData.map( (chat, index) => chat.usuario = usuarios[index] );
    chatsData.map( (chat) => chat.hora = new Date(chat.hora.toMillis()) )

    return chatsData;
  }

  async publicarChat ( usuario : Usuario, mensaje : string ) {
    const existente = await this.usuarioDAO.checkIfExist( usuario );
    const hora = new Date();
    const chat = new Chat(
      hora,
      mensaje,
      existente?.ref
    );
  
    try {
      await  this.db.collection( this.collectionChat ).add( {...chat} );
    } catch ( error ) {
      console.error(error);
    }

  }

}