"use strict";
/* Esta clase contiene la constante en la cual se encuentran las sentencias SQL utilizadas para
la interaccion con la base de datos, por parte de cada tabla parametro*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerQuery = {
    //ROL
    viewRoles: 'SELECT * FROM rol ORDER BY rol."codigo_ID";',
    viewRolesDesc: 'SELECT descripcion FROM rol WHERE rol."codigo_ID"=$1 ORDER BY rol."codigo_ID";',
    //TIPO-IDENTIFICACION
    viewTipoIdentificaciones: 'SELECT * FROM tipo_identificacion ORDER BY tipo_identificacion."codigo_ID";',
    //USER    
    createUser: 'INSERT INTO usuario (numero_identificacion_id, nombres, apellidos, celular, telefono, email, clave, "rol_ID", "tipo_identificacion_ID") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9);',
    viewUsers: 'SELECT numero_identificacion_id, nombres, apellidos, celular, telefono, email, clave, rol.descripcion as rolDesc, tipo_identificacion.descripcion as tiidDesc FROM usuario,rol,tipo_identificacion WHERE usuario."rol_ID" = rol."codigo_ID" AND usuario."tipo_identificacion_ID" = tipo_identificacion."codigo_ID" ORDER BY numero_identificacion_id;',
    viewUser: 'SELECT numero_identificacion_id, nombres, apellidos, celular, telefono, email, clave, rol.descripcion as rolDesc, tipo_identificacion.descripcion as tiidDesc FROM usuario,rol,tipo_identificacion WHERE usuario."rol_ID" = rol."codigo_ID" AND usuario."tipo_identificacion_ID" = tipo_identificacion."codigo_ID" AND numero_identificacion_id = $1 ORDER BY numero_identificacion_id;',
    updateUser: 'UPDATE usuario SET numero_identificacion_id=$1, nombres=$2, apellidos=$3, celular=$4, telefono=$5, email=$6, clave=$7, "rol_ID"=$8, "tipo_identificacion_ID"=$9 WHERE numero_identificacion_id = $1;',
};
