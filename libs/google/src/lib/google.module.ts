import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatastoreService } from './datastore/datastore.service';
import { CalendarService } from './calendar/calendar.service';

@NgModule({
  imports: [CommonModule],
  providers: [DatastoreService, CalendarService]
})
export class GoogleModule {}
