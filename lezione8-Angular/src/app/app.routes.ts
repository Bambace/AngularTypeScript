import { Routes } from '@angular/router';
import { LandingComponentComponent } from '../components/landing-component/landing-component.component';
import { LoginComponentComponent } from '../components/login-component/login-component.component';
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { ProductIDComponent } from '../components/product-id/product-id.component';
import { QueryParamsComponent } from '../components/query-params/query-params.component';
import { authGuard } from '../Guard/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  {
    path: 'home/:name',
    component: HomeComponentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'product/:id',
    component: ProductIDComponent,
    canActivate: [authGuard],
  },
  { path: 'query', component: QueryParamsComponent },
];
