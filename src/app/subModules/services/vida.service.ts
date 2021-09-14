import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VidaService {

  cambioVida : EventEmitter<number> = new EventEmitter<number> ();

  constructor() { }
}
