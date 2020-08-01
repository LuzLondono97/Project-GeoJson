/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla regiones */

import BaseService from '../Base_Component/Base_Service';
import ConnectionDataBase from '../../basedatos';
import { handlerQuery } from '../../Hanldlers/Handle_Queries';
import { Request, Response } from 'express';
import handleMessage from '../../Hanldlers/Handle_Message';

// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class TipoDocumentoService implements BaseService<any> {

    async create(request: Request, response: Response): Promise<any> {
    }

    async update(request: Request, response: Response): Promise<any> {
    }

    async view(request: Request, response: Response): Promise<any> {
    }

    async viewById(request: Request, response: Response): Promise<any> {
    }

    async viewTipoIdentificacion(request: Request, response: Response): Promise<any> {
        try {
            let rols = await ConnectionDataBase.query(handlerQuery['viewTipoIdentificaciones']);
            return Promise.resolve(handleMessage(response, 200, rols.rows));
        } catch (error) {
            Promise.reject(handleMessage(response, 404, 'Error'));
        }
    }

}

// Se crea y exporta una constante que contiene los servicios de esta clase.
const tipoDocumentoService = new TipoDocumentoService();
export default tipoDocumentoService;