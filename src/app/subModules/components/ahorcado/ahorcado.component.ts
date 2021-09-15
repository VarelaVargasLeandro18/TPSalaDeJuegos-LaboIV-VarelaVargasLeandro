import { Component, OnInit } from '@angular/core';
import { VidaService } from '../../services/vida.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  palabras : string[] = [
    "hola", "piedra", "zapato", "auto", "documento", "manivela", "desnivel", "redondel", "alcaucil", "noviembre", "desastre",
    "curtiembre", "ensayo", "destapado", "cafetera", "naranja", "pulir", "pensar", "soñar", "ordenar", "designar", "estado"
  ];
  palabra : string = "";
  descubierto : string = "";
  vidas : number = 5;

  constructor(
    private vidaService : VidaService
  ) { }

  ngOnInit(): void {
  }

  eligeLetra( letra : string ) {
    console.log( 'Letra seleccionada', letra );
    const posiciones = this.encontrarLetra(letra);

    console.log('Posiciones', posiciones);
    
    if ( posiciones == [] ) {
      this.vidaService.cambioVida.emit(-1);
      return
    }
    
    this.settearLetraEnDescubierto(letra, posiciones);
  }
  
  rollPalabra() {
    this.inicializarValores();
    this.elegirPalabra();
    console.log( 'Palabra', this.palabra );
  }

  private inicializarValores() {
    this.palabra = "";
    this.vidas = 5;
    this.vidaService.setteoVida.emit( this.vidas );
    this.descubierto = "";
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

}