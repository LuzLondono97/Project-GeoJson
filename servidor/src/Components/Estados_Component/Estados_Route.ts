/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla region*/

import { Router } from 'express';
import EstadoService from './Estados_Service'; // Se importa la constante RegionService de la clase Region_Service

class EstadoRoute {

    public router: Router = Router();

    constructor() {
        this.configuracion();
    }

    /* Se establecen los metodos de la clase Region_Service, que seran utilizados cuando se llame a cada una de 
    las rutas de regiones*/

    configuracion(): void {
        this.router.get('/viewEstados', EstadoService.viewEstados);
    }
}

// Se crea y exporta una constante que contiene las rutas de esta clase.
const estadoRoute = new EstadoRoute();
export default estadoRoute.router;