import { Component, Input, OnInit } from '@angular/core';
import { PuntajesService } from '../../services/puntajes.service';
import { TecladoService } from '../../services/teclado.service';
import { VidaService } from '../../services/vida.service';

/*
  Ahorcado
  No se debe ingresar datos desde el teclado. Utilizar botones para el ingreso de las letras.
*/
@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  private readonly id : number = 0;
  readonly maxVidas : number = 10;
  
  @Input() usuario? : string;

  palabras : string[] = [
    "hola", "piedra", "zapato", "auto", "documento", "manivela", "desnivel", "redondel", "alcaucil", "noviembre", "desastre",
    "curtiembre", "ensayo", "destapado", "cafetera", "naranja", "pulir", "pensar", "soñar", "ordenar", "designar", "estado"
  ];
  palabra : string = "";
  descubierto : string = "";
  vidas : number = this.maxVidas;
  resultado : string = "";
  perdio : boolean = false;
  puntos : number = 0;

  resultadosVictoria : string[] = [
    "VAMO NEWELL'S",
    "MAQUINA!",
    "EL REY DEL AHORCADO PA"
  ];

  resultadosDerrota : string[] = [
    "PARA JUGAR ASI NI JUEGUES VISTE...",
    "NO TE ENSEÑARON A JUGAR AL AHORCADO??",
    "ULTRA GAME OVER",
    "\_('-')_/"
  ]

  constructor(
    private vidaService : VidaService,
    private tecladoService : TecladoService,
    private puntajesService : PuntajesService
  ) { }

  ngOnInit(): void {
  }

  eligeLetra( letra : string ) {
    const posiciones = this.encontrarLetra(letra);
    
    if ( posiciones.length === 0 ) {
      this.vidas--;
      this.vidaService.cambioVida.emit(-1);
      this.chequearSiPierde();
      return
    }
    
    this.settearLetraEnDescubierto(letra, posiciones);
    this.chequearSiGana();
  }
  
  rollPalabra() {
    this.inicializarValores();
    this.elegirPalabra();
  }

  private inicializarValores() {
    this.reiniciarPalabra();
    this.reiniciarVidas();
    this.reiniciarDescubierto();
    this.desbloquearTeclado();
    this.reiniciarResultado();
  }

  private elegirPalabra() {
    const posicion = Math.floor( Math.random() * this.palabras.length );
    const palabra = this.palabras[posicion];
    
    for ( let letra of palabra ) {
      this.descubierto += '_';
    }

    this.palabra = palabra;
  }

  private encontrarLetra( letra : string ) {
    return this.palabra.split('')
      .map( ( value, index ) => value === letra ? index : -1  )
      .filter( (value) => value != -1 );
  }

  private settearLetraEnDescubierto( letra : string, posiciones : number[] ) {
    if ( posiciones === null ) return
    
    let descubierto = this.descubierto;
    let aux;
    for ( let pos of posiciones ) {
      aux = descubierto.split('');
      aux[pos] = letra;
      descubierto = aux.join('');
    }

    this.descubierto = descubierto;
  }

  private chequearSiGana(){
    if ( this.descubierto === this.palabra ) this.gana();
  }

  private chequearSiPierde() {
    if ( this.vidas === 0 ) this.pierde();
  }

  private gana() {
    const tamanioVictorias = this.resultadosVictoria.length;
    this.resultado = this.resultadosVictoria[ Math.floor( Math.random() * tamanioVictorias ) ];
    this.perdio = false;
    this.reiniciarPalabra();
    this.bloquearTeclado();
    this.puntos++;
  }
  
  private pierde () {
    const tamanioDerrotas = this.resultadosDerrota.length;
    this.resultado = this.resultadosDerrota[ Math.floor( Math.random() * tamanioDerrotas ) ];
    this.perdio = true;
    this.reiniciarPalabra();
    this.bloquearTeclado();
    this.puntajesService.addPuntaje( this.id, this.puntos );
  }

  private reiniciarPalabra() {
    this.palabra = '';
  }

  private reiniciarVidas() {
    this.vidas = this.maxVidas;
    this.vidaService.setteoVida.emit( this.vidas );
  }

  private reiniciarDescubierto() {
    this.descubierto = "";
  }

  private bloquearTeclado() {
    this.tecladoService.bloquearTeclado.emit(true);
  }

  private desbloquearTeclado() {
    this.tecladoService.bloquearTeclado.emit(false);
  }

  private reiniciarResultado() {
    this.resultado = '';
  }

}