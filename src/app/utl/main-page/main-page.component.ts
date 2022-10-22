import { Component } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }
  constructor(){}
  
  }
  