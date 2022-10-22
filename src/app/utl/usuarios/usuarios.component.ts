import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {



  form = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });
  

  constructor(private formBuilder:FormBuilder) { }

  obtenerError(){
    var nom=this.form.get('nombre');
    if(nom?.hasError('required')){
      return 'el campo nombre es requerido';
    }
  }

  
  ngOnInit(): void {
  }

  guardarUsuario(){
    console.log('Registro Guardado')
  }

}
