import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const aGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isAuthenticated = sessionStorage.getItem('token') ? true : false;

  if (!isAuthenticated) {
    router.navigate(['login']);
    return false;
  }

  return true;
};
