import { Component, OnInit } from '@angular/core';

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
  
  readonly maxVidas : number = 10;

  actual? : number = 5;
  siguiente? : number;
  puntos : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  elige( menor : boolean ) {
    this.generarSiguiente();

    if ( this.siguiente == undefined || this.actual == undefined ) return;

    this.puntos += menor ? (this.siguiente < this.actual ? 1 : -1) : (this.siguiente > this.actual ? 1 : -1);
    
    this.actual = this.siguiente;
  }

  private generarSiguiente() {
    do {
      this.siguiente = Math.floor( Math.random() * 12 );
    } while( this.siguiente === this.actual );
  }

}
