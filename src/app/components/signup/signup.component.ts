import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioDAOService } from 'src/app/services/usuarioDAO/usuario-dao.service';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  title: string = "Cree su cuenta";

  button_title: string = "Crear Cuenta";

  crearCuentaForm! : FormGroup;

  disableButton : boolean = false;

  mensajeYaRegistrado : string = '';
  
  mensajeErrorGeneral : string = '';

  constructor(
    private usuarioService : UsuarioService,
    private usuarioBackend : UsuarioDAOService
  ) { }

  ngOnInit(): void {

    this.crearCuentaForm = new FormGroup({
      usuario: new FormControl(
        '',
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      ),
      nombre: new FormControl(
        '',
        [Validators.required]
      ),
      apellido: new FormControl(
        '',
        [Validators.required]
      )

    });

    this.usuarioService.registro
      .subscribe ( (usuario) => {
        this.disableButton = true;
        this.usuarioBackend.login(usuario);
    } );

    this.usuarioService.usuarioYaRegistrado
      .subscribe( (mensaje) => {
        this.mensajeYaRegistrado = mensaje;
    } );

  }

  onSubmit() : void {
    
    if ( !this.crearCuentaForm.valid ) return;

    const email = this.crearCuentaForm.value.usuario;
    const password = this.crearCuentaForm.value.password;
    const nombre = this.crearCuentaForm.value.nombre;
    const apellido = this.crearCuentaForm.value.apellido;

    const usuario = new Usuario(
      email,
      password,
      nombre,
      apellido
    );
    
    /* try {
      this.afAuth.signInWithEmailAndPassword( email, password ).then( (credentials) => console.log(credentials) )
      .catch( (reason) => {
        this.mensajeErrorGeneral = reason.code;
      } );
    } catch( error ) {
    } */
    
    this.usuarioBackend.register(usuario);
  }

}
