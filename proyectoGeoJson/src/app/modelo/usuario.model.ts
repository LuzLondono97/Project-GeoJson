import { Rol } from './rol.model';
import { TipoIdentificacion } from './tipo-identificacion.model';

export class Usuario {
    numero_identificacion_ID: string;
    tipo_identificacion_ID: TipoIdentificacion; //CC-PP
    nombres: string;
    apellidos: string;
    celular: number;
    telefono: number;
    email: string;
    clave: string;
    rol: Rol; //Admin-Creador-Visualizador
}