import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //para exportar un modulo ue esta en otra carpeta por que tiene sus propios componentes
  exports:[
    MainPageComponent
  ]
})
export class UtlModule { }
