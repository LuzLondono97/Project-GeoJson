import { RouterModule, Routes } from '@angular/router';

/* Componentes */
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
