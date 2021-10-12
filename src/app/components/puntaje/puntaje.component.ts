import { Component, OnInit } from '@angular/core';
import { Puntaje } from 'src/app/models/puntaje/puntaje';
import { PuntajeService } from 'src/app/services/puntaje/puntaje.service';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css']
})
export class PuntajeComponent implements OnInit {
  public puntajes? : Puntaje[];
  
  private readonly ahorcadoId : number = 0;
  public ahorcado? : Puntaje[]; //0
  private readonly keyboardAttackId : number = 1;
  public keyboardAttack? : Puntaje[]; //1
  private readonly mayorYmenorId : number = 3;
  public mayorYmenor? : Puntaje[]; //3
  private readonly preguntadosId : number = 2;
  public preguntados? : Puntaje[]; //2

  public errorMsg : string = "";

  constructor(
    private service : PuntajeService
  ) {
    this.ahorcado = [];
    this.keyboardAttack = [];
    this.mayorYmenor = [];
    this.preguntados = [];

    this.service.getPuntajesUsuario().then( (puntajes : Puntaje[] | undefined) => {
      if ( puntajes === undefined ) {
        this.errorMsg = "NO HAY DATOS DE SUS PUNTAJES";
        return
      }

      puntajes.forEach ( (puntaje) => {

        switch ( puntaje.codigoJuego ) {
          
          case this.ahorcadoId:
            this.ahorcado?.push( puntaje );
            break;

          case this.keyboardAttackId:
            this.keyboardAttack?.push( puntaje );
            break;

          case this.mayorYmenorId:
            this.mayorYmenor?.push( puntaje );
            break;
          
          case this.preguntadosId:
            this.preguntados?.push( puntaje );
            break;

        }

      } );
      console.log(this.ahorcado);
    } );
  }

  ngOnInit(): void {
  }



}
