import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecladoService {
  
  bloquearTeclado : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
