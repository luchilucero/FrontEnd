import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router){ }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const proy = new Proyecto(this.nombre, this.descripcion);
    this.sProyecto.save(proy).subscribe(
      data=>{
        alert("Estudio añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      })
  }

  
}
