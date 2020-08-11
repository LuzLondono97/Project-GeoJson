import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MapasGeojsonComponent } from './mapas-geojson/mapas-geojson.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { HttpClientModule } from '@angular/common/http'

//Services
import { UsersService } from './services/Users_Service';
import BaseService from './Base_Service/Base_Service';

@NgModule({
  declarations: [AppComponent, LoginComponent, MapasGeojsonComponent, UsuariosComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    UsersService,
    BaseService,
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
