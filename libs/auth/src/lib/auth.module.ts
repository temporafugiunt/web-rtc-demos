import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthModule as AngAuthModule,
  LogLevel,
  OidcConfigService,
} from 'angular-auth-oidc-client';
import { AuthInitService } from './auth-init.service';

export function configureAuth(
  oidcConfigService: OidcConfigService,
  authInitService: AuthInitService
) {
  return () => {
    return authInitService.configureAuth();
  };
}

@NgModule({
  imports: [CommonModule, AngAuthModule.forRoot()],
  providers: [
    OidcConfigService,
    AuthInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService, AuthInitService],
      multi: true,
    },
  ],
})
export class AuthModule {}
