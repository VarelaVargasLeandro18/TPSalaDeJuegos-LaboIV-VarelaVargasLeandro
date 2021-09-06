import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  title: string = "Cree su cuenta";

  button_title: string = "Crear Cuenta";

  crearCuentaForm! : FormGroup;
  
  constructor(
    router : Router
  ) { }

  ngOnInit(): void {

    this.crearCuentaForm = new FormGroup({
      usuario: new FormControl(
        '',
        [Validators.required, Validators.maxLength(15), Validators.minLength(5)]
      ),
      password: new FormControl(
        '',
        [Validators.required, Validators.maxLength(10), Validators.minLength(5)]
      )
    });

  }

  

}
