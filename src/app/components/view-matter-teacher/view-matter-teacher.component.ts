import { Component, OnInit } from '@angular/core';
import { Materia } from '../../entidades/materia';
import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-mater-teacher',
  templateUrl: './view-matter-teacher.component.html',
  styleUrls: ['./view-matter-teacher.component.css']
})
export class ViewMatterTeacherComponent implements OnInit {

  materias: Materia[]=[
    {nombre:"Sociales"},
    {nombre:"Matematicas"}
  ];

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  viewMateria(){
    const res: any =this.http.get(`${environment.url}/materia/todos`);
    return res;
  }

  addTask(){
    
  }

}
