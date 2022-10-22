import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
/* 
  @Input() alumnosUtl:AlumnosUtl[]=[]; */
  @Input() regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }

  /*@Output() onNuevoAlumno:EventEmitter<AlumnosUtl>=new EventEmitter();*/

  constructor(private UtlService:UtlService){}

  agregar(){
    /* this.alumnosUtl.push(this.regAlumno); */
    /*this.onNuevoAlumno.emit(this.regAlumno);*/
    this.UtlService.agregarAlumno(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }

  ngOnInit(): void {
  }

}

