/* Clase que contiene los servicios del lado del cliente para la tabla ciudad */

import { Injectable } from '@angular/core';
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment
import { Usuario } from '../modelo/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private baseService: BaseService) { }

  /* Se crean los metodos utilizados por la vista de ciudad */

  createUser(body: Usuario) {
    return this.baseService.create(body, `${environment.hostCreateUser}`);
  }

  viewUsers() {
    return this.baseService.view(`${environment.viewUsers}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewUserById(id_usuario: number) {
    return this.baseService.view(`${environment.viewUserById}/${id_usuario}`);
  }

  updateUser(body: Usuario, id_usuario: number) {
    return this.baseService.update(body, `${environment.hostUpdateUser}/${id_usuario}`);
  }

  viewRoles() {
    return this.baseService.view(`${environment.viewRoles}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRolById(id_usuario: number) {
    return this.baseService.view(`${environment.viewUserById}/${id_usuario}`);
  }

  viewTipoIdentificacion() {
    return this.baseService.view(`${environment.viewTipoIdentificacion}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

}