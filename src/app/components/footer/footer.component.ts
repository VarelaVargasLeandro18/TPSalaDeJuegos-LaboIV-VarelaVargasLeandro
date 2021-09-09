import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  usuario? : Usuario;


  constructor(
    private usuarioService : UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.iniciado;

    this.usuarioService.sesionTerminada
      .subscribe( (termino) => {
        if ( termino ) this.usuario = undefined;
      } )

  }

}
