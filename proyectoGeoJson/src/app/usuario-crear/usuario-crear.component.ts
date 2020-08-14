import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public viewUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
