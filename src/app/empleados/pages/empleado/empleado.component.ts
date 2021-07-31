import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from "../../services/empleados.service";
import { switchMap } from "rxjs/operators";
import { Empleado } from '../../interfaces/empleados.interface';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }
  `
  ]
})
export class EmpleadoComponent implements OnInit {
  @Input() empleados!:Empleado;
  empleado!: Empleado;

  constructor(private activatedRoute: ActivatedRoute,
    private empleadosService: EmpleadosService,
    private router: Router) { 
    }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({idempleado}) => this.empleadosService.getEmpleadoById(idempleado))
    )
    .subscribe(empleado => this.empleado = empleado);
  }

  regresar(){
    this.router.navigate(['/empleados/listado']);
  }

}
