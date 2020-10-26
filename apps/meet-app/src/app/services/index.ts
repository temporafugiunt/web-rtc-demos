import { environment } from '../../environments/environment';
import { AUTH_ENVIRONMENT, AuthEnvironmentModel } from '@webrtc-demos/auth';
import { CalendarService } from '@webrtc-demos/google';

const authSettings: AuthEnvironmentModel = {
  stsServer: environment.stsServer,
  redirectUrl: window.location.origin + '/redirect',
  clientId: environment.clientId,
  responseType: 'id_token token', // 'code',
  scope: 'openid email profile',
  postLogoutRedirectUri: window.location.origin + '/info',
  postLoginRoute: '/projects',
  forbiddenRoute: '/forbidden',
  unauthorizedRoute: '/unauthorized',
};

export const services: any[] = [
  { provide: AUTH_ENVIRONMENT, useValue: authSettings },
  // CalendarService,
];
