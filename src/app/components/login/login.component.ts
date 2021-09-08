import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioDAOService } from 'src/app/services/usuarioDAO/usuario-dao.service';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = "Inicie Sesion";

  button_title: string = "Iniciar Sesion";

  loginCuentaForm!: FormGroup;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private usuario_backend_service: UsuarioDAOService
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

    this.usuarioService.registro
      .subscribe((usuario) => {
        console.log(usuario);
      });

  }

  onSubmit() {

    if (!this.loginCuentaForm.valid) return;

    const email = this.loginCuentaForm.value.email;
    const contrasenia = this.loginCuentaForm.value.password;

    const usuario = new Usuario( 
      email, 
      contrasenia 
    );

    this.usuario_backend_service.login(usuario);
  }

}
