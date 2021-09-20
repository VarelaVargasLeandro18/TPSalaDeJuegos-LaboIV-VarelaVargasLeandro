import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Juego } from './juego';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private key : string = "b689b4247df8420ea44bb4577fe2afcc";
  private url : string = "https://api.rawg.io/api/games";
  private pageSize : number = 20;
  private maxPage : number = 100;
  private consulta? : string;

  constructor(
    private http : HttpClient
  ) {}

  private generarPaginaRandom() {
    return Math.floor( Math.random() * this.maxPage + 1 );
  }

  private generarConsulta() {
    this.consulta = this.url + '?key=' + this.key + '&page=' + this.generarPaginaRandom() + '&page_size=' + this.pageSize;
  }

  private getRandomIndex() : number {
    return Math.floor( Math.random() * this.pageSize - 1 );
  }

  async obtenerJuegos( cantidad : number ){
    this.generarConsulta();
    
    if ( this.consulta === undefined ) return [];
    
    const consulta = await this.http.get<any>( this.consulta ).toPromise();
    const juegosConsultados = consulta.results;
    const juegos : Juego[] = [];
    
    for ( let i = 0; i < cantidad; i++ ) {
      let juego = new Juego( 'A', 'A' );
      
      do {
        const randomResult = juegosConsultados[ this.getRandomIndex() ];
      
        juego.nombre = randomResult.name;
        juego.imagenURL = randomResult.background_image;

        console.log(juego.nombre);

      } while( juegos.findIndex( (juegoArr) => juego.nombre === juegoArr.nombre ) !== -1 );


      juegos.push(juego);
    }

    return juegos;  
  }


}
