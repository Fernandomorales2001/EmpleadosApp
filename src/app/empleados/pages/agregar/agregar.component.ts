import { Component, OnInit } from '@angular/core';
import { Empleado, Empresa } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 5px;
  }`
  ]
})
export class AgregarComponent implements OnInit {

  empresas = [
    {
      id: 'Allas Repuestos',
      desc: 'Allas - Repuestos'
    },
    {
      id: 'Lear Corporation',
      desc: 'Lear - Corporation'
    }
    
  ];

  empleado: Empleado = {
    nombre: '',
    apellido: '',
    direccion: '',
    salario: '',
    codigoempleado: '',
    empresa: Empresa.AllasRepuestos,
    antiguedad: '',
    alt_img: '',
  }
  constructor( private empleadosService: EmpleadosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    // if (!this.router.url.includes('editar')) {
    //   return;
    // }
   this.activatedRoute.params
     .pipe(
       switchMap(({idempleado}) => this.empleadosService.getEmpleadoById(idempleado))
     )
     .subscribe( empleado => this.empleado = empleado);
  }

  guardar(){
    if (this.empleado.nombre.trim().length === 0) {
      return;
    } 

    // this.empleadosService.agregarEmpleado(this.empleado)
    // .subscribe( resp => {
    //   console.log('Respuesta: ', resp)
    // })
      if(this.empleado.idempleado) {
         this.empleadosService.actualizarEmpleado(this.empleado)
         .subscribe(empleado => console.log('Actualizando', empleado))
       } else {
    //     this.empleadosService.agregarEmpleado(this.empleado)
    //  .subscribe( resp => {
    //    console.log('Respuesta: ', resp)
        this.empleadosService.agregarEmpleado(this.empleado)
        .subscribe(empleado => {
          this.router.navigate(['/empleados/editar', empleado.idempleado]);
       })
       }


  }
  
  // borrarEmpleado(){
  //   this.empleadosService.borrarEmpleado(this.empleado.idempleado!)
  //   .subscribe(resp => {
  //     this.router.navigate(['/empleados'])
  //   })
  // }
}


