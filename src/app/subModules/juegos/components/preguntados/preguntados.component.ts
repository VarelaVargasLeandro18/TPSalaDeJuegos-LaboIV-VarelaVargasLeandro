import { Component, Input, OnInit } from '@angular/core';
import { APIService } from '../../services/apiservice.service';
import { Juego } from '../../services/juego';
import { PuntajesService } from '../../services/puntajes.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  private readonly id : number = 5;

  private readonly cantMax : number = 4;
  private readonly vidasMax : number = 5;

  @Input() usuario? : string;
  
  respuestaEs? : string;
  juegosActuales : Juego[] = [];
  juegoSeleccionado? : Juego;
  deshabilitarBoton : boolean = true;
  deshabilitarRespuestas : boolean = true;
  incorrecto : boolean = true;
  mostrarCarga : boolean = true;
  vidas : number = this.vidasMax;
  puntos : number = 0;
  perdio : boolean = false;

  constructor(
    private api : APIService,
    private puntajesService : PuntajesService
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
    this.mostrarCarga = true;
  
    try {
      await this.seleccionarJuegos();
      this.mostrarCarga = false;
    } catch( error ) {
      await this.realizarPregunta()
      return  
    }

    this.deshabilitarBoton = true;
    this.respuestaEs = undefined;
    this.deshabilitarRespuestas = false;

    if ( this.perdio ) {
      this.vidas = this.vidasMax;
      this.perdio = false;
    }


  }

  contestarPregunta( nombre : string ) {

    this.deshabilitarRespuestas = true;
    
    if ( nombre === this.juegoSeleccionado?.nombre ) {
      this.respuestaEs = "CORRECTO!!";
      this.incorrecto = false;
      this.deshabilitarBoton = false;
      this.juegoSeleccionado = undefined;
      this.puntos++;
      return
    }

    this.respuestaEs = "INCORRECTO!!";
    this.incorrecto = true;
    this.deshabilitarBoton = false;
    this.juegoSeleccionado = undefined;
    this.vidas--;
    this.checkPierde();
  }

  private checkPierde() {
    if ( this.vidas > 0 ) return
    this.puntajesService.addPuntaje( this.id, this.puntos );
  }

}
