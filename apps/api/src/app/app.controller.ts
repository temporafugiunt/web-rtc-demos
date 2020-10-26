import { Controller, Get, Post } from '@nestjs/common';

import { Message } from '@webrtc-demos/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Post('meeting')
  public createMeeting(): string {
    return 'not-implemented;'
  }
}
