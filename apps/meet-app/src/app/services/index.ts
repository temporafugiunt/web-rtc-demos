import { environment } from '../../environments/environment';
import { AUTH_ENVIRONMENT, AuthEnvironmentModel } from '@webrtc-demos/auth';
import { CalendarService } from '@webrtc-demos/google';
import {CookieService} from 'ngx-cookie-service';

const authSettings: AuthEnvironmentModel = {
  stsServer: environment.stsServer,
  redirectUrl: '/index.html', // Needs full proper redirect here, but will be done with the Location service
  clientId: environment.clientId,
  responseType: 'id_token token', // 'code',
  scope: 'openid email profile',
  postLogoutRedirectUri: '/index.html', // Needs full proper redirect here, but will be done with the Location service
  postLoginRoute: '/index.html',
  forbiddenRoute: '/forbidden',
  unauthorizedRoute: '/unauthorized',
};

export const services: any[] = [
  { provide: AUTH_ENVIRONMENT, useValue: authSettings },
  // CalendarService,
  CookieService
];
