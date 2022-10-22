import { Component, Input, OnInit } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

/*   @Input() alumnosUtl:AlumnosUtl[]=[]; */

get alumnos(){
  return this.alumnosUtl.alumnosUtl;
}
  constructor(private alumnosUtl:UtlService) { }

  ngOnInit(): void {
  }

}