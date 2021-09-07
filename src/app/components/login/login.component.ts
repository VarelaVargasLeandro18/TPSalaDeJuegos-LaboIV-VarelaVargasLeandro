import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Inicie Sesion";

  button_title: string = "Iniciar Sesion";

  loginCuentaForm! : FormGroup;
  
  constructor(
    router : Router
  ) { }

  ngOnInit(): void {

    this.loginCuentaForm = new FormGroup({
      usuario: new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        '',
        [Validators.required, Validators.maxLength(10), Validators.minLength(5)]
      )
    });

  }


}
