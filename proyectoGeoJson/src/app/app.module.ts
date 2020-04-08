import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MapasGeojsonComponent } from './mapas-geojson/mapas-geojson.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, MapasGeojsonComponent, UsuariosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
