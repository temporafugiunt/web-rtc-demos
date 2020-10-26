import { Controller, Get, Post, Req } from '@nestjs/common';

import { Message } from '@webrtc-demos/api-interfaces';
import { CalendarService } from '@webrtc-demos/google';

import { AppService } from './app.service';

@Controller()
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('meeting')
  public async createMeeting(@Req() request: Request): Promise<string> {
    console.log(JSON.stringify(request.credentials));
    await this.calendarService.createCalendarEvent();
    return 'not-implemented;'
  }
}
