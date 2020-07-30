"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatos_1 = __importDefault(require("../../basedatos"));
const Handle_Queries_1 = require("../../Hanldlers/Handle_Queries");
const Handle_Message_1 = __importDefault(require("../../Hanldlers/Handle_Message"));
class RolService {
    //metodo para crear un rol
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre_rol, descripcion_rol } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createRol'], [nombre_rol, descripcion_rol]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Created Rol'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // Actualizar rol
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rol } = request.params;
                let { nombre_rol, descripcion_rol } = request.body;
                console.log(id_rol, '\n', request.body);
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateRol'], [nombre_rol, descripcion_rol, id_rol]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Rol'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver todas las regiones con todos sus campos 
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rol = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewRols']);
                return Promise.resolve(Handle_Message_1.default(response, 200, rol.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    /*
            async viewR(request: Request, response: Response): Promise<any> {
                try {
                    let rols = await ConnectionDataBase.query(handlerQuery['viewRols']);
                    return Promise.resolve(handleMessage(response, 200, rols.rows));
                } catch (error) {
                    Promise.reject(handleMessage(response, 404, 'Error'));
                }
            }
        */
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rol } = request.params;
                let rol = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewRol, [id_rol]);
                if (rol.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Rol doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, rol.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const rolService = new RolService();
exports.default = rolService;
