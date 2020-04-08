import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { MapasGeojsonComponent } from './mapas-geojson';
import { UsuariosComponent } from './usuarios';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'mapas-geojson', component: MapasGeojsonComponent},
    {path: 'usuarios', component: UsuariosComponent}
];

export const routing = RouterModule.forRoot(routes);
