import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top: 20px;
    }`
  ]
})
export class HeroeTarjetaComponent {

  @Input() empleado!: Empleado
}
