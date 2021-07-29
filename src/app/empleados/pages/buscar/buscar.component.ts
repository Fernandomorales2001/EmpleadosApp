import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  empleados: Empleado[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
