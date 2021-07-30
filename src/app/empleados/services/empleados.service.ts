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

  getEmpleadoById(idempleado: string):Observable<Empleado> {
    return this.http.get<Empleado>(`${this.baseUrl}/empleados/${idempleado}`)
  }

  getSugerencias(termino: string): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.baseUrl}/empleados?q=${termino}&_limit=2`)
  }

  agregarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.baseUrl}/empleados`, empleado)
  }

  actualizarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.baseUrl}/empleados/${empleado.idempleado}`, empleado)
  }

  borrarEmpleado(idempleado: Empleado): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/empleados/${idempleado}`)
  }
}
