import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  HeroeEliminado:string = ''

heroes: string[] = 
['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Mob']


borrarHeroe():void{
  this.HeroeEliminado = this.heroes.shift() || '';

}

}

