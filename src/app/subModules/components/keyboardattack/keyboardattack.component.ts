import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscribable, Subscription } from 'rxjs';
import { TecladoService } from '../../services/teclado.service';

@Component({
  selector: 'app-keyboardattack',
  templateUrl: './keyboardattack.component.html',
  styleUrls: ['./keyboardattack.component.css']
})
export class KeyboardattackComponent implements OnInit {

  private readonly mensajeIniciar : string = "Inicie el juego!";
  private readonly mensajePerdio : string = "Perdio!";
  private readonly mensajeGano : string = "Felicitaciones!";
  
  letraActual : string = "";
  jugando : boolean = false;
  mensaje : string = "";
  tiempoTranscurrido : number = 0;
  vidaJugador : number = 0;
  vidaOponente : number = 0;
  tiempoATranscurrir : number = 0;

  private letras : string[] = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l','ñ',
    'z','x','c','v','b','n','m'
  ];

  private carga? : Subscription;

  
  constructor(
    private tecladoService : TecladoService
  ) { }

  ngOnInit(): void {
    this.setMensajeInicio();
  }

  private setMensajeInicio() {
    this.mensaje = this.mensajeIniciar;
  }

  private setMensajePierde() {
    this.mensaje = this.mensajePerdio;
  }

  private setMensajeGana() {
    this.mensaje = this.mensajeGano;
  }

  tocaLetra( letra : string ) {
    
    if ( this.letraActual !== letra ) {
      this.erraLetra();
      return
    }

    this.aciertaLetra();
  }

  private bloquearTeclado() {
    this.tecladoService.bloquearTeclado.emit(true);
  }

  private desbloquearTeclado() {
    this.tecladoService.bloquearTeclado.emit(false);
  }

  jugar() {
    this.jugando = true;
    this.reiniciarVidaJugador();
    this.reiniciarVidaOponente();
    this.reiniciarTiempoATranscurrir();
    this.empezarCarga();
    this.desbloquearTeclado();
    this.generarLetra();
  }

  generarLetra() {
    const tamanioLetras = this.letras.length;
    const index = Math.floor( Math.random() * tamanioLetras );
    this.letraActual = this.letras[index];
  }

  empezarCarga () {
    const tiempoTranscurridoUnaCarga = (this.tiempoATranscurrir * 1000) / 100;
    
    this.carga = interval( tiempoTranscurridoUnaCarga )
      .subscribe( () => {
        this.tiempoTranscurrido++;
  
        if ( this.tiempoTranscurrido == 115 ) {
          this.tiempoTranscurrido = 0;
          this.terminarCarga();
          this.erraLetra();
        }

      } )
  }

  private terminarCarga() {
    if ( this.carga === undefined ) return

    this.carga.unsubscribe();
    this.tiempoTranscurrido = 0;
  }

  private bajarVidaOponente() {
    this.vidaOponente--;
  }

  private bajarVidaJugador() {
    this.vidaJugador--;
  }

  private reiniciarVidaOponente() {
    this.vidaOponente = 10;
  }

  private reiniciarVidaJugador() {
    this.vidaJugador = 10;
  }

  private reiniciarTiempoATranscurrir() {
    this.tiempoATranscurrir = 10;
  }

  private erraLetra() {
    this.bajarVidaJugador();
    this.terminarCarga();

    if( this.vidaJugador === 0 ) {
      this.setMensajeGana();
      this.reiniciarVidaJugador();
      this.reiniciarVidaJugador();
      this.reiniciarTiempoATranscurrir();
      this.terminarCarga();
      this.jugando = false;
      return
    }
    
    this.generarLetra();
    this.empezarCarga();

  }

  private aciertaLetra() {
    this.bajarVidaOponente();
    this.terminarCarga();

    if( this.vidaOponente === 0 ) {
      this.setMensajeGana();
      this.reiniciarVidaJugador();
      this.reiniciarVidaOponente();
      this.reiniciarTiempoATranscurrir();
      this.terminarCarga();
      this.jugando = false;
      return
    }
    
    this.generarLetra();
    this.tiempoATranscurrir--;
    this.empezarCarga();

  }

}