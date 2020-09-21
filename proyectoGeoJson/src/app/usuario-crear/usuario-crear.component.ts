import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/Users_Service';
import { Usuario } from '../modelo/usuario.model';
import { Rol } from '../modelo/rol.model';
import { TipoIdentificacion } from '../modelo/tipo-identificacion.model';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  usuario: Usuario;
  rolList: Rol[] = [];
  tipoDocumentoList: TipoIdentificacion[] = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.viewRoles();
    this.viewTipoDocumento();
  }

  async viewRoles(){
    this.rolList = await this.usersService.viewRoles().catch(
      error => console.log("Error. " + error)
    )
    console.log('rols:  '+this.rolList);
  }

  async viewTipoDocumento(){
    this.tipoDocumentoList = await this.usersService.viewTipoIdentificacion().catch(
      error => console.log("Error. " + error)
    )
    console.log('tipodocus:  '+this.tipoDocumentoList);
  }

  async saveUsuario(){
    await this.usersService.createUser(this.usuario).catch(
      error => console.log("Error. " + error)
    );
  }

  public viewUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
