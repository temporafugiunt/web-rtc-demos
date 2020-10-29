import { Inject, Injectable, isDevMode } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common';
import { OidcConfigService, LogLevel } from 'angular-auth-oidc-client';
import {
  AuthEnvironmentModel,
  AUTH_ENVIRONMENT,
} from './auth-environment.model';

@Injectable({
  providedIn: 'root',
})
export class AuthInitService {
  constructor(
    @Inject(AUTH_ENVIRONMENT)
    private authEnvironmentModel: AuthEnvironmentModel,
    private oidcConfigService: OidcConfigService,
    private platformLocation: PlatformLocation,
    private location: Location,
  ) {}

  public configureAuth(): Promise<any> {
    let logLevel = LogLevel.Error;
    const redirectUrl = (this.platformLocation as any).location.origin + this.location.prepareExternalUrl(this.authEnvironmentModel.redirectUrl)
    if (isDevMode) {
      console.log(
        `configureAuth running for STS Server: ${this.authEnvironmentModel.stsServer} with clientId: ${this.authEnvironmentModel.clientId} and redirectUrl: ${redirectUrl}`
      );
      logLevel = LogLevel.Debug;
    }

    return this.oidcConfigService.withConfig({
      stsServer: this.authEnvironmentModel.stsServer,
      redirectUrl,
      postLogoutRedirectUri: (this.platformLocation as any).location.origin + this.location.prepareExternalUrl(this.authEnvironmentModel.postLogoutRedirectUri),
      clientId: this.authEnvironmentModel.clientId,
      scope: this.authEnvironmentModel.scope,
      responseType: this.authEnvironmentModel.responseType,
      logLevel,
    });
  }
}
