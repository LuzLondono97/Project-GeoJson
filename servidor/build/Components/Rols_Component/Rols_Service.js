"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla regiones */
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
// Se "llenan" los metodos abstractos creados en la clase BaseService.ts
class RolService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    view(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rols = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewRoles']);
                return Promise.resolve(Handle_Message_1.default(response, 200, rols.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // metodo para ver solo el nombre del rol en los usuarios
    viewNameRolsUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rols = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewRolsUser']);
                return Promise.resolve(Handle_Message_1.default(response, 200, rols.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    viewR(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let rols = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewRolsUser']);
                return Promise.resolve(Handle_Message_1.default(response, 200, rols.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_rol } = request.params;
                let rol = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewRolesDesc, [id_rol]);
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
