import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { aGuard } from '../Guard/a.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home/:nome', component: HomeComponent, canActivate: [aGuard] },
];
