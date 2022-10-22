import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
      edad:15,
    },
    {
      nombre:'Laura',
      edad:21, 
    },
    {
      nombre:'Danna',
      edad:20,
    }
  ]

  get alumnosUtl():AlumnosUtl[]{
    return [...this._alumnosUtl];
  }

  constructor() { }

  agregarAlumno(alumno:AlumnosUtl){
    this._alumnosUtl.push(alumno);
  }
}