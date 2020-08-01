/* Clase que contiene los servicios del lado del cliente para la tabla Rrol */

import { Injectable } from '@angular/core';
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class RolsService {

  constructor(private baseService: BaseService) {}

  viewRoles() {
    return this.baseService.view(`${environment.viewRoles}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRolDescById(id_rol: string) {
    return this.baseService.view(`${environment.viewRolDescById}/${id_rol}`);
  }

  viewRolsUser() {
    return this.baseService.view(`${environment.viewRolsUser}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }


}
