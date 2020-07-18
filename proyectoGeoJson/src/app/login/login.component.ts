import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario.model';
import { Rol } from '../modelo/rol.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: Usuario;
  rol: Rol;

  user: string = 'Luza_97';
  password: string = '123456';

  constructor(private router: Router) {}

  ngOnInit() {
    this.usuario = new Usuario();
  }

  validacionLogin(){
    /*if(this.usuario.user === this.user){
      if(this.usuario.clave === this.password){
        this.router.navigate(['/mapas-geojson']);
      }
    }*/
    this.router.navigate(['/mapas-geojson']);
  }

  
  
}
