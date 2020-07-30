"use strict";
/*Esta clase contiene la configuracion de los servicios del lado del servidor
 utilizados para la tabla Base de tiempo */
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
class UserService {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id_rol, id_organizacion, nombre_usuario, apellido_usuario, documento_usuario, cargo_usuario, email_usuario, contrasena_usuario } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['createUser'], [id_rol, id_organizacion, nombre_usuario, apellido_usuario, documento_usuario, cargo_usuario, email_usuario, contrasena_usuario]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Create User'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    // El Update no funciona aun
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_usuario } = request.params;
                let { id_rol, id_organizacion, nombre_usuario, apellido_usuario, cargo_usuario, email_usuario, contrasena_usuario } = request.body;
                yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['updateUser'], [id_rol, id_organizacion, nombre_usuario, apellido_usuario, cargo_usuario, email_usuario, contrasena_usuario, id_usuario]);
                return Promise.resolve(Handle_Message_1.default(response, 200, 'Update Uuser'));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    view(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery['viewUsers']);
                return Promise.resolve(Handle_Message_1.default(response, 200, users.rows));
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
    viewById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_usuario } = request.params;
                let user = yield basedatos_1.default.query(Handle_Queries_1.handlerQuery.viewUser, [id_usuario]);
                console.log(user.rows);
                if (user.rows.length === 0) {
                    return Promise.resolve(Handle_Message_1.default(response, 200, 'Alert doesn´t exist'));
                }
                else {
                    return Promise.resolve(Handle_Message_1.default(response, 200, user.rows));
                }
            }
            catch (error) {
                Promise.reject(Handle_Message_1.default(response, 404, 'Error'));
            }
        });
    }
}
// Se crea y exporta una constante que contiene los servicios de esta clase.
const usersService = new UserService();
exports.default = usersService;
