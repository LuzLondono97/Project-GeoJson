/*Esta clase contiene la configuracion de las rutas del lado del servidor
 utilizadas para la tabla de Base de tiempo*/

 import { Router } from 'express';
 import userService from './Users_Service';
 
 class UsersRoute {
     
     public router: Router = Router();
 
     constructor() {
         this.configuracion();
     }
 
     /* Se establecen los metodos de la clase TimesRoute, que seran utilizados 
     cuando se llame a cada una de  las rutas de Base de tiempo*/
 
     configuracion(): void {
        this.router.post('/createUser', userService.create);
        this.router.get('/viewUserById/:id_usuario', userService.viewById);
        this.router.put('/updateUsers/:id_usuario', userService.update);
        this.router.get('/viewUsers', userService.view); 
     }
 }
 
 // Se crea y exporta una constante que contiene las rutas de esta clase.
 const userRoutes = new UsersRoute(); 
 export default userRoutes.router; 