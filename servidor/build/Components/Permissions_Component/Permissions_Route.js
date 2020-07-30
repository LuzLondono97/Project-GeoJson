"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla region*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Permissions_Service_1 = __importDefault(require("./Permissions_Service")); // Se importa la constante RegionService de la clase Region_Service
class PermissionsRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Region_Service, que seran utilizados cuando se llame a cada una de
    las rutas de regiones*/
    configuracion() {
        this.router.post('/createAssignPermissions', Permissions_Service_1.default.create);
        this.router.get('/viewPermissions', Permissions_Service_1.default.view);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const permissionsRoutes = new PermissionsRoute();
exports.default = permissionsRoutes.router;
