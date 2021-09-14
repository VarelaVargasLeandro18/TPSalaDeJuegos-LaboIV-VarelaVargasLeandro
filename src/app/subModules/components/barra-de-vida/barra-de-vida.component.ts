import { Component, Input, OnInit } from '@angular/core';
import { VidaService } from '../../services/vida.service';

@Component({
  selector: 'app-barra-de-vida',
  templateUrl: './barra-de-vida.component.html',
  styleUrls: ['./barra-de-vida.component.css']
})
export class BarraDeVidaComponent implements OnInit {

  @Input() cantVidas : number = 0;
  vidas : string[] = [];

  constructor(
    private vidaService : VidaService
  ) {
    vidaService.cambioVida
      .subscribe( (valor) => {
        this.cantVidas += valor;
        this.ngOnInit();
      } );
  }

  ngOnInit(): void {
    this.vidas = [];
    for( let vida = 0; vida < this.cantVidas; vida++ )
      this.vidas.push('');
  }

}
