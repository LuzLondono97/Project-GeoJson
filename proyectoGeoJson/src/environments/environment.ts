/* Esta clase contiene las constantes que albergan las rutas del lado del servidor, para cada metodo de las vistas*/
export const environment = {

  // usuario
  hostCreateUser: "http://localhost:3000/api/user/createUser",
  hostUpdateUser: "http://localhost:3000/api/user/updateUsers",
  viewUsers: "http://localhost:3000/api/user/viewUsers",
  viewUserById: "http://localhost:3000/api/user/viewUserById",

  // Para Llamar el campo de rol en el usuario
  viewRoles: "http://localhost:3000/api/rol/viewRoles",
  viewRolDescById: "http://localhost:3000/api/rol/viewRolDescById",

  //Para llamar el tipo de documento
  viewTipoIdentificacion: "http://localhost:3000/api/type/viewTipoIdentificacion",

  production: false
};