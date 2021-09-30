import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';
import { PuntajesService } from './services/puntajes.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  usuario? : Usuario;

  constructor(
    private puntajeService : PuntajesService,
    private usuarioService : UsuarioService
  ) {
    this.usuario = this.usuarioService.iniciado;
  }

  ngOnInit(): void {
    this.puntajeService.getPuntajes();
  }

}
