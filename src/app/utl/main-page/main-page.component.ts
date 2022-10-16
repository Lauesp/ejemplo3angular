import { Component, OnInit } from '@angular/core';

interface AlumnosUtl{
  nombre:string;
  edad:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alumnosUtl:AlumnosUtl []=[
    {
      nombre:'Danna',
      edad:20
    },
    {
      nombre:'Cristian',
      edad:21
    },
    {
      nombre:'Laura',
      edad:21
    },
    {
      nombre:'Fanny',
      edad:21
    }
  ]
  regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }
    
    

  agregar(){
    //console.log(this.alumnosUtl)
    this.alumnosUtl.push(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }


}
