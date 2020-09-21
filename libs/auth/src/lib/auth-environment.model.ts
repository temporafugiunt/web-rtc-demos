import { InjectionToken } from '@angular/core';

export interface AuthEnvironmentModel {
  stsServer: string;
  redirectUrl: string;
  clientId: string;
  responseType: string;
  scope: string;
  postLogoutRedirectUri?: string;
  postLoginRoute?: string;
  forbiddenRoute?: string;
  unauthorizedRoute?: string;
}

export const AUTH_ENVIRONMENT = new InjectionToken<AuthEnvironmentModel>(
  'AuthEnvironmentModel'
);
