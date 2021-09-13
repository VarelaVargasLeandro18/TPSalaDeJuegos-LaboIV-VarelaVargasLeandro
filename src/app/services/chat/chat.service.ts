import { Injectable, EventEmitter } from '@angular/core';
import { Chat } from 'src/app/models/chat/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatsEncontrados : EventEmitter<Chat[]> = new EventEmitter<Chat[]>();

  constructor() { }

  cambioDeChats( chats : Chat[] ) {
    console.log(chats);
    this.chatsEncontrados.emit(chats);
  }

}