import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  let isAuthenticated = null;
  if (isBrowser) {
    isAuthenticated = localStorage.getItem('isAuthenticated');
  }

  const router = inject(Router);
  
  if (isAuthenticated != null) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }


};
