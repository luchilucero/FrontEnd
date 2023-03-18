import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit{
  edu: Educacion[] = [];

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService){ }

  isLogged = false;

  ngOnInit(): void{
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{
    this.sEducacion.lista().subscribe(data=> {this.edu = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data=>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
