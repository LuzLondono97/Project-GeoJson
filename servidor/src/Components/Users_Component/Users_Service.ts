/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class UserService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
        try {
            let { numero_identificacion_id, nombres, apellidos, celular, telefono, email, clave, rol_ID, tipo_identificacion_ID } = request.body;
            await ConnectionDataBase.query(handlerQuery['createUser'], [numero_identificacion_id, nombres, apellidos, celular, telefono, email, clave, rol_ID, tipo_identificacion_ID]);
            return Promise.resolve(handleMessage(response, 200, 'Create User'));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
    // El Update no funciona aun
    async update(request: Request, response: Response): Promise<any> {
        try {
            const { numero_identificacion_id } = request.params;
            let { nombres, apellidos, celular, telefono, email, clave, rol_ID, tipo_identificacion_ID } = request.body;
            await ConnectionDataBase.query(handlerQuery['updateUser'], [numero_identificacion_id, nombres, apellidos, celular, telefono, email, clave, rol_ID, tipo_identificacion_ID]);
            return Promise.resolve(handleMessage(response, 200, 'Update Uuser'))

        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async view(_: Request, response: Response): Promise<any> {
        try {
            let users = await ConnectionDataBase.query(handlerQuery['viewUsers']);
            return Promise.resolve(handleMessage(response, 200, users.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

    async viewById(request: Request, response: Response): Promise<any> {
        try {
            const { numero_identificacion_id } = request.params;
            let user = await ConnectionDataBase.query(handlerQuery.viewUser, [numero_identificacion_id]);
            console.log(user.rows);
            if (user.rows.length === 0) {
                return Promise.resolve(handleMessage(response, 200, 'Alert doesn´t exist'));
            } else {
                return Promise.resolve(handleMessage(response, 200, user.rows));
            }
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }
}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const usersService = new UserService();
export default usersService;