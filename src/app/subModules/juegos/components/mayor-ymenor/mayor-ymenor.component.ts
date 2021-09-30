import { Component, Input, OnInit } from '@angular/core';
import { PuntajesService } from '../../services/puntajes.service';

/*
Mayor o Menor
Desde un mazo de carta se va a preguntar si la siguiente es mayor o menor. El jugador sumará un punto ante cada carta que adivine.
*/

@Component({
  selector: 'app-mayor-ymenor',
  templateUrl: './mayor-ymenor.component.html',
  styleUrls: ['./mayor-ymenor.component.css']
})
export class MayorYmenorComponent implements OnInit {
  private readonly id : number = 3;
  private readonly maxVidas : number = 1;

  @Input() usuario? : string;
  
  vidas : number = this.maxVidas;
  actual? : number = 5;
  siguiente? : number;
  puntos : number = 0;
  perdio : boolean = false;

  constructor(
    private puntajesService : PuntajesService
  ) { }

  ngOnInit(): void {
  }

  elige( menor : boolean ) {
    this.generarSiguiente();

    if ( this.siguiente == undefined || this.actual == undefined ) return;

    const ver = menor ? ( (this.siguiente < this.actual) ? ++this.puntos : --this.vidas) : ( (this.siguiente > this.actual) ? ++this.puntos : --this.vidas ) ;
    this.actual = this.siguiente;
    this.checkPierde();
  }

  private generarSiguiente() {
    do {
      this.siguiente = Math.floor( Math.random() * 12 );
    } while( this.siguiente === this.actual );
  }

  private checkPierde() {
    if ( this.vidas > 0 ) return
    this.pierde();
  }

  private pierde() {
    this.puntajesService.addPuntaje( this.id, this.puntos );
    this.perdio = true;
  }

  reset() {
    this.vidas = this.maxVidas;
    this.puntos = 0;
    this.perdio = false;
  }

}