import { TipoUsuario } from './tipo-usuario.model';

export class Usuario {
    identificacion: number;
    ciudadExpedicion: string;
    fechaNacimiento: Date;
    nombres: string;
    apellidos: string;
    correo: string;
    movil: number;
    user: string;
    clave: string;
    tipoUsuario: TipoUsuario; //Admin-Creador-Visualizador
}