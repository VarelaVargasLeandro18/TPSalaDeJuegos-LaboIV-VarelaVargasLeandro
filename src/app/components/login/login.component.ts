import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title : String = "Inicio de Sesión";
  button_title : String = "Iniciar Sesión"

  constructor() { }

  ngOnInit(): void {
  }

}
