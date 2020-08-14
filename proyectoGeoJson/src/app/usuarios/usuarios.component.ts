import { Component, OnInit, LOCALE_ID, Inject, ViewChild } from '@angular/core';
import { Usuario } from '../modelo/usuario.model';
import { UsersService } from '../services/Users_Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuariosList: Usuario[] = [];
  filterUser = '';
  
  constructor(private usersService: UsersService, private router: Router) {
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

  public usuarioCrearModificar(){
    this.router.navigate(['/usuario-crear']);
  }

}