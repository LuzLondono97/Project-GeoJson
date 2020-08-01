/* Clase que contiene los servicios del lado del cliente para la tabla ciudad */

import { Injectable } from '@angular/core'; 
import { User } from '../../Models/Users_Model/User'; // Se importa el modelo City para ciudad
import BaseService from '../Base_Service/Base_Service'; // Se importan las propiedades de la clase Base_Service
import { environment } from 'src/environments/environment'; // Se importan las constantes de la clase environment

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private baseService: BaseService) {}
  
/* Se crean los metodos utilizados por la vista de ciudad */

  createUser (body: User) {
    return this.baseService.create(body, `${environment.hostCreateUser}`);    
  }

  viewUsers() {
    return this.baseService.view(`${environment.viewUsers}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRol() {
    return this.baseService.view(`${environment.viewRol}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewRolById(id_usuario: number) {
    return this.baseService.view(`${environment.viewUserById}/${id_usuario}`);
  }

 //Para llamar organizacion 
  viewOrganizationById(id_usuario: number) {
    return this.baseService.view(`${environment.viewUserById}/${id_usuario}`);
  }

  viewOrganization() {
    return this.baseService.view(`${environment.viewOrganization}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewType() {
    return this.baseService.view(`${environment.viewType}`).toPromise().then((data: any) => data.message).catch((error) => error);
  }

  viewTypeById(id_usuario: number) {
    return this.baseService.view(`${environment.viewUserById}/${id_usuario}`);
  }
  

  updateUser(body: User, id_usuario: number) {
    return this.baseService.update(body, `${environment.hostUpdateUser}/${id_usuario}`);
  }

}