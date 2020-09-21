import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated$: Observable<boolean>;

  constructor(public oidcSecurityService: OidcSecurityService) {
    this.isAuthenticated$ = oidcSecurityService.isAuthenticated$;
  }

  public checkAuth(): Observable<boolean> {
    return this.oidcSecurityService.checkAuth();
  }

  public authorize(): void {
    return this.oidcSecurityService.authorize();
  }

  public logout(): void {
    return this.oidcSecurityService.logoff();
  }
}
