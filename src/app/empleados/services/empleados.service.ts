import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleados.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.baseUrl}/empleados`)
  }

  getEmpleadoById(idempleado:string):Observable<Empleado> {
    return this.http.get<Empleado>(`${this.baseUrl}/empleados/${idempleado}`)
  }
}
