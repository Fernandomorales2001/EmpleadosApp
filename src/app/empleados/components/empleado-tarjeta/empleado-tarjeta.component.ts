import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';

@Component({
  selector: 'app-empleado-tarjeta',
  templateUrl: './empleado-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top: 20px;
    }`
  ]
})
export class EmpleadoTarjetaComponent {

  @Input() empleado!: Empleado
}
