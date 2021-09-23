import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/apiservice.service';
import { Juego } from '../../services/juego';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  private readonly cantMax : number = 4;
  
  respuestaEs? : string;
  juegosActuales : Juego[] = [];
  juegoSeleccionado? : Juego;
  deshabilitarBoton : boolean = true;
  deshabilitarRespuestas : boolean = true;
  incorrecto : boolean = true;
  mostrarCarga : boolean = true;

  constructor(
    private api : APIService
  ) { }

  async ngOnInit() {
    await this.realizarPregunta();
    this.mostrarCarga = false;
  }

  private async seleccionarJuegos() {
    this.juegosActuales = await this.api.obtenerJuegos(this.cantMax);

    if ( this.juegosActuales.length === 0 ) return

    this.juegoSeleccionado = this.juegosActuales[ this.getRandomIndex() ];
  }

  private getRandomIndex() : number {
    return Math.floor( Math.random() * this.cantMax );
  }

  async realizarPregunta() {
  
    try {
      await this.seleccionarJuegos();
    } catch( error ) {
      await this.realizarPregunta()
      return  
    }

    this.deshabilitarBoton = true;
    this.respuestaEs = undefined;
    this.deshabilitarRespuestas = false;
  }

  contestarPregunta( nombre : string ) {

    this.deshabilitarRespuestas = true;
    
    if ( nombre === this.juegoSeleccionado?.nombre ) {
      this.respuestaEs = "CORRECTO!!";
      this.incorrecto = false;
      this.deshabilitarBoton = false;
      return
    }

    this.respuestaEs = "INCORRECTO!!";
    this.incorrecto = true;
    this.deshabilitarBoton = false;

  }



}
