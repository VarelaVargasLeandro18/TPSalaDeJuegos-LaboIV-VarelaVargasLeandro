import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  usuario? : Usuario;

  constructor(
    private usuarioService : UsuarioService
  ) { }

  ngOnInit(): void {

    this.usuarioService.sesionIniciada
      .subscribe( (usuario) => {
        this.usuario = usuario;
      } );

  }

}
