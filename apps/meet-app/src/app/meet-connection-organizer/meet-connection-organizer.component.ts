import { Component, OnInit } from '@angular/core';
import { CalendarService } from '@webrtc-demos/google';

@Component({
  selector: 'app-meet-connection-organizer',
  templateUrl: './meet-connection-organizer.component.html',
  styleUrls: ['./meet-connection-organizer.component.scss']
})
export class MeetConnectionOrganizerComponent implements OnInit {

  // constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
  }

  public async createMeeting() {
    // await this.calendarService.createCalendarEvent();
  }

}
