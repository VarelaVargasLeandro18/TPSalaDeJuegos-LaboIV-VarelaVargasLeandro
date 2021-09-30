import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EncuestaDAOService {

  private collectionEncuesta = "encuesta"

  constructor(
    private db : AngularFirestore
  ) { }

  subirEncuesta( encuesta : any ) {
    this.db.collection( this.collectionEncuesta ).add( encuesta );
  }

}
