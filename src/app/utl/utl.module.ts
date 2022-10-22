import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MainPageComponent,
    AlumnosComponent,
    AgregarComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  //para exportar un modulo ue esta en otra carpeta por que tiene sus propios componentes
  exports:[
    MainPageComponent,
    UsuariosComponent
  ]
})
export class UtlModule { }
