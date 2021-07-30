import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Empleado } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';



@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  empleados: Empleado[] = [];
  empleadoSeleccionado: Empleado | undefined;

  constructor( private empleadosService: EmpleadosService ) { }

  ngOnInit(): void {
  }

  buscando() {
    this.empleadosService.getSugerencias(this.termino)
    .subscribe(empleados => this.empleados = empleados);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    
    if (!event.option.value) {
      this.empleadoSeleccionado = undefined;
      return;
    }
    
    const empleado: Empleado = event.option.value;
    this.termino = empleado.nombre;

    this.empleadosService.getEmpleadoById( empleado.idempleado! )
    .subscribe(empleado => this.empleadoSeleccionado = empleado);
  }
}
