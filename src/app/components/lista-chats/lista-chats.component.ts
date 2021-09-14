import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat/chat';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ChatService } from 'src/app/services/chat/chat.service';
import { ChatDAOService } from 'src/app/services/chatDAOService/chat-dao.service';

@Component({
  selector: 'app-lista-chats',
  templateUrl: './lista-chats.component.html',
  styleUrls: ['./lista-chats.component.css']
})
export class ListaChatsComponent implements OnInit {

  chats : Chat[] = [];
  @Input() usuario? : Usuario;

  constructor(
    private chatService : ChatService,
    private chatDao : ChatDAOService
  ) { }

  async ngOnInit() {
    this.chatService.chatsEncontrados
      .subscribe( (chats) => {
        this.chats = chats;
      } );

      this.chats = await this.chatDao.obtenerChats();
  }

  chatsPorFecha() {
    return this.chats.sort( ( a : Chat, b : Chat ) => {
      
      if ( a.hora > b.hora ) return 1;
      if ( a.hora === b.hora ) return 0;

      return -1;
    } );
  }

}