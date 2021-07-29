import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from "../../services/empleados.service";
import { Empleado } from '../../interfaces/empleados.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor( private empleadosService: EmpleadosService ) { }

  ngOnInit(): void {

    this.empleadosService.getEmpleados()
    .subscribe(empleados => {
      this.empleados = empleados 
    });
  }

}
