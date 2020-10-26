import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarService, GoogleModule } from '@webrtc-demos/google';
import { CalendarController } from './calendar.controller';

@Module({
  imports: [GoogleModule],
  controllers: [AppController, CalendarController],
  providers: [AppService, CalendarService],
})
export class AppModule {}
