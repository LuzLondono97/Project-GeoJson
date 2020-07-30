import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuariosList : Usuario[];

  constructor() { }

  ngOnInit(): void {
  }

}
