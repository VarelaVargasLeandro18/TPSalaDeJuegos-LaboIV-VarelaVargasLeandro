import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat/chat';
import { Usuario } from 'src/app/models/usuario/usuario';
import { ChatDAOService } from 'src/app/services/chatDAOService/chat-dao.service';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  usuario? : Usuario;
  chats : Chat[] = [];
  mensaje : string = "";

  constructor(
    private usuarioService : UsuarioService,
    private chatDao : ChatDAOService
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.iniciado;
  }

  enviarMensaje() {
    if( this.usuario === undefined ) return;
    this.chatDao.publicarChat( this.usuario, this.mensaje );
    this.mensaje = "";
  }

}
