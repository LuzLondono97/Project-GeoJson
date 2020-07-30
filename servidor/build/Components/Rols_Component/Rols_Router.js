"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla region*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Rols_Service_1 = __importDefault(require("./Rols_Service")); // Se importa la constante RegionService de la clase Region_Service
class RolRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Region_Route, que seran utilizados cuando se llame a cada una de
    las rutas de regiones*/
    configuracion() {
        this.router.post('/createRol', Rols_Service_1.default.create);
        this.router.get('/viewRolById/:id_rol', Rols_Service_1.default.viewById);
        this.router.get('/viewRols', Rols_Service_1.default.view);
        this.router.put('/updateRols/:id_rol', Rols_Service_1.default.update);
        this.router.get('/viewRolsCity', Rols_Service_1.default.viewNameRolsUser);
        //this.router.get('/viewRegionsStation', RegionService.viewNameRegionsStation)
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const regionsRoutes = new RegionRoute();
exports.default = regionsRoutes.router;
