import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { EmpleadoTarjetaComponent } from "./components/empleado-tarjeta/empleado-tarjeta.component";
'./components/empleado-tarjeta/empleado-tarjeta.component'

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    EmpleadoComponent,
    HomeComponent,
    ListadoComponent,
    ImagenPipe,
    EmpleadoTarjetaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    EmpleadosRoutingModule,
    MaterialModule
  ]
})
export class EmpleadosModule { }
