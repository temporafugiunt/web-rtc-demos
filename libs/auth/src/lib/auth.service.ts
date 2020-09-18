import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public oidcSecurityService: OidcSecurityService) {}

  public checkAuth(): Observable<boolean> {
    return this.oidcSecurityService.checkAuth();
  }

  public authorize(): void {
    return this.oidcSecurityService.authorize();
  }

  public logout(): void {
    return this.oidcSecurityService.logoff();
  }

  public isAuthorized(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      map((isAuthorized: boolean) => {
        if (!isAuthorized) {
          return false;
        }

        return true;
      })
    );
  }
}
