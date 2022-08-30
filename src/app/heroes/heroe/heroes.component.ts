import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  nombre:string = 'IronMan'
  edad:number = 45;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 30;
  }

}
