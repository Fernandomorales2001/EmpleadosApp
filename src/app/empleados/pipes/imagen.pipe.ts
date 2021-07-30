import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(empleado: Empleado ): string {
    if(!empleado.idempleado && !empleado.alt_img){
      return 'assets/no-image.png';
    }
    else if(empleado.alt_img){
      return empleado.alt_img;
    } else {
    return `assets/empleados/${empleado.idempleado}.jpg`;
  }
}
}
