import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(empleado: Empleado ): string {
    console.log(empleado);
    return `assets/empleados/${empleado.idempleado}.jpg`;
  }

}
