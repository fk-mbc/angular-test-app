import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { LoginService } from '../core';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (!this.loginService.isLoggedIn) {
      const url = encodeURI(state.url);
      this.router.navigate(['/login'], { queryParams: { redirect: url } });
      return false;
    }

    return true;
  }
}
