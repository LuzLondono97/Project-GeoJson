/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla regiones */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class RolService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
    }

    async update(request: Request, response: Response): Promise<any> {
    }

    async view(request: Request, response: Response): Promise<any> {
        try {
            let rols = await ConnectionDataBase.query(handlerQuery['viewRoles']);
            return Promise.resolve(handleMessage(response, 200, rols.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    // metodo para ver solo el nombre del rol en los usuarios
    async viewNameRolsUser(request: Request, response: Response): Promise<any> {
        try {
            let rols = await ConnectionDataBase.query(handlerQuery['viewRolsUser']);
            return Promise.resolve(handleMessage(response, 200, rols.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewR(request: Request, response: Response): Promise<any> {
        try {
            let rols = await ConnectionDataBase.query(handlerQuery['viewRolsUser']);
            return Promise.resolve(handleMessage(response, 200, rols.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { id_rol } = request.params;
            let rol = await ConnectionDataBase.query(handlerQuery.viewRolesDesc, [id_rol]);
            if (rol.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Rol doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, rol.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const rolService = new RolService();
export default rolService;