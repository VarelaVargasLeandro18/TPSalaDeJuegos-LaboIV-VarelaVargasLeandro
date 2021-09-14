import { Component, OnInit } from '@angular/core';
import { VidaService } from '../../services/vida.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  vidas : number = 5;

  constructor(
    private vidaService : VidaService
  ) { }

  ngOnInit(): void {
  }

  eligeLetra( letra : string ) {
    console.log(letra);
    this.vidaService.cambioVida.emit(-1);
  }

}
