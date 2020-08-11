import { Component, OnInit, LOCALE_ID, Inject, ViewChild } from '@angular/core';
import { Usuario } from '../modelo/usuario.model';
import { UsersService } from '../services/Users_Service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuariosList: Usuario[] = [];
  
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  async listarUsuarios(){
    this.usuariosList = await this.usersService.viewUsers().catch(
      error => console.log("Error. " + error)
    );
    console.log(this.usuariosList);
  }

}