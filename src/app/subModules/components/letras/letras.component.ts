import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  @Output() letra : EventEmitter<string> = new EventEmitter<string>();

  letras : string[][] = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l','ñ'],
    ['z','x','c','v','b','n','m']
  ];

  constructor() { }

  ngOnInit(): void {
  }

  settearLetra( letra : string ) {
    this.letra.emit(letra);
  }

}