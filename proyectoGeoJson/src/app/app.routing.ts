import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { LoginComponent } from './login/index';
import { MapasGeojsonComponent } from './mapas-geojson';
import { UsuariosComponent } from './usuarios';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'mapas-geojson', component: MapasGeojsonComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'usuario-crear', component: UsuarioCrearComponent}
];

export const routing = RouterModule.forRoot(routes);
