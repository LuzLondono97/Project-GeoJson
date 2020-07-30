"use strict";
/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Base de tiempo*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_Service_1 = __importDefault(require("./Users_Service"));
class UsersRoute {
    constructor() {
        this.router = express_1.Router();
        this.configuracion();
    }
    /* Se establecen los metodos de la clase TimesRoute, que seran utilizados
    cuando se llame a cada una de  las rutas de Base de tiempo*/
    configuracion() {
        this.router.post('/createUser', Users_Service_1.default.create);
        this.router.get('/viewUserById/:id_usuario', Users_Service_1.default.viewById);
        this.router.put('/updateUsers/:id_usuario', Users_Service_1.default.update);
        this.router.get('/viewUsers', Users_Service_1.default.view);
    }
}
// Se crea y exporta una constante que contiene las rutas de esta clase.
const userRoutes = new UsersRoute();
exports.default = userRoutes.router;
