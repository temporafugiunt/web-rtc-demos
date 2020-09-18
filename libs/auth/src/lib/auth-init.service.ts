import { Inject, Injectable, isDevMode } from '@angular/core';
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
    private oidcConfigService: OidcConfigService
  ) {}

  public configureAuth(): Promise<any> {
    let logLevel = LogLevel.Error;
    if (isDevMode) {
      console.log(
        `configureAuth running for STS Server ${this.authEnvironmentModel.stsServer} with clientId ${this.authEnvironmentModel.clientId}`
      );
      logLevel = LogLevel.Debug;
    }

    return this.oidcConfigService.withConfig({
      stsServer: this.authEnvironmentModel.stsServer,
      redirectUrl: this.authEnvironmentModel.redirectUrl,
      postLogoutRedirectUri: this.authEnvironmentModel.postLogoutRedirectUri,
      clientId: this.authEnvironmentModel.clientId,
      scope: this.authEnvironmentModel.scope,
      responseType: this.authEnvironmentModel.responseType,
      logLevel,
    });
  }
}
