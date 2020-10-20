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
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MeetConnectionOrganizerComponent } from './meet-connection-organizer/meet-connection-organizer.component';
import { MeetConnectionParticipantComponent } from './meet-connection-participant/meet-connection-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    HomeComponent,
    ProjectsComponent,
    MeetConnectionOrganizerComponent,
    MeetConnectionParticipantComponent,
  ],
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
  entryComponents: [ MeetConnectionOrganizerComponent, MeetConnectionParticipantComponent ]
})
export class AppModule {}
