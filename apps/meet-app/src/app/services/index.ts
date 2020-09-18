import { environment } from '../../environments/environment';
import { AUTH_ENVIRONMENT, AuthEnvironmentModel } from '@webrtc-demos/auth';

const authSettings: AuthEnvironmentModel = {
  stsServer: environment.stsServer,
  redirectUrl: window.location.origin + '/redirect',
  clientId: environment.clientId,
  responseType: 'id_token token',
  scope: 'openid email profile',
  postLogoutRedirectUri: window.location.origin + '/projects',
  postLoginRoute: '/projects',
  forbiddenRoute: '/forbidden',
  unauthorizedRoute: '/unauthorized',
};

export const services: any[] = [
  { provide: AUTH_ENVIRONMENT, useValue: authSettings },
];
