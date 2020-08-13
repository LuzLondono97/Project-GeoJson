"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla region*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Estados_Service_1 = __importDefault(require("./Estados_Service")); // Se importa la constante RegionService de la clase Region_Service
class EstadoRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase Region_Service, que seran utilizados cuando se llame a cada una de
    las rutas de regiones*/
    configuracion() {
        this.router.get('/viewEstados', Estados_Service_1.default.viewEstados);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const estadoRoute = new EstadoRoute();
exports.default = estadoRoute.router;
