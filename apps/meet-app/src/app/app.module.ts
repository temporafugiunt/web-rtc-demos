import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@webrtc-demos/material';
import { AppRoutingModule } from './app-routing.module';
import { UiLoginModule } from '@webrtc-demos/ui-login';
import { AuthModule } from '@webrtc-demos/auth';

import * as fromServices from './services';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [AppComponent, RedirectComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLoginModule,
    AppRoutingModule,
    AuthModule,
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
