import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario';
import { EncuestaDAOService } from 'src/app/services/encuesta-dao.service';
import { UsuarioService } from 'src/app/services/usuarioService/usuario.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  usuario? : Usuario;
  formulario : FormGroup;
  respondida : boolean = false;

  constructor(
    usuarioService : UsuarioService,
    formBuilder : FormBuilder,
    private encuestaDAO : EncuestaDAOService
  ) {
    this.usuario = usuarioService.iniciado;

    this.formulario = formBuilder.group( {
      nombre: ['', [Validators.required, Validators.maxLength(20), this.tieneEspacios] ],
      apellido: ['', [Validators.required, Validators.maxLength(20)] ],
      edad: ['', [Validators.required, Validators.min(18)] ],
      mejorar: ['', [Validators.required, Validators.maxLength(30)] ],
      experiencia: ['Buena', [Validators.required]],
      ahorcado: [],
      preguntados: [],
      mayorMenor: [],
      keyboardattack: []
    } )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let usuario = this.usuario?.email;
    let nombre = this.formulario.get('nombre')?.value;
    let apellido = this.formulario.get('apellido')?.value;
    let edad = this.formulario.get('edad')?.value;
    let mejorar = this.formulario.get('mejorar')?.value;
    let experiencia = this.formulario.get('experiencia')?.value;
    let ahorcado = this.formulario.get('ahorcado')?.value;
    let preguntados = this.formulario.get('preguntados')?.value;
    let mayorMenor = this.formulario.get('mayorMenor')?.value;
    let keyboardattack = this.formulario.get('keyboardattack')?.value;

    this.encuestaDAO.subirEncuesta( { usuario, nombre, apellido, edad, mejorar, experiencia, ahorcado, preguntados, mayorMenor, keyboardattack} )
    this.respondida = true;
  }

  tieneEspacios( control : AbstractControl ) {
    const nombre = control.value;
    const tieneEspacio = nombre.includes(' ');

    if ( tieneEspacio ) return { tieneEspacio }

    return null;
  }

  checkForm () {
    for ( let controlName in this.formulario.controls ) {
      
      if ( this.formulario.get(controlName)?.errors ) return true

    }
    return false;
  }

}
