import { Injectable } from '@angular/core';
import { google, calendar_v3 } from 'googleapis';
// import { GaxiosPromise } from 'googleapis-common';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }


  public async createCalendarEvent() {

    // this.withCalendarId(calendar, (err, id) => {
    //   if (err) {
    //     callback(err, null);
    //     return;
    //   }
    
    // const auth = new google.auth.GoogleAuth({
    // // Scopes can be specified either as an array or as a single, space-delimited string.
    // scopes: [
    //   'https://www.googleapis.com/auth/calendar',
    //   'https://www.googleapis.com/auth/calendar.events',
    //   ],
    // });
    // const authClient = await auth.getClient();
    // google.options({auth: authClient});

    const start = new Date();
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    
    const calendarItem: calendar_v3.Params$Resource$Events$Insert = {
      calendarId: 'primary',
      conferenceDataVersion: 1,
      requestBody: {
        summary: 'Client Telemeeting',
        start: {
          dateTime: start.toISOString(),
        },
        end: {
          dateTime: end.toISOString(),
        },
        conferenceData: {
          createRequest: {
            requestId: Math.random().toString(),
            conferenceSolutionKey: {
              type: "hangoutsMeet",
            },
          },
        },
      }      
    };
  
    const calendar = google.calendar({version: 'v3'}); //, auth: client});
       
  
    return calendar.events.insert(calendarItem);
  }
  
  // public function withCalendarId(calendar, callback) {
  //   if (!settings.calendar || settings.calendar == 'primary') {
  //     callback(null, 'primary');
  //     return;
  //   }
  
  //   calendar.calendarList.list({ minAccessRole: 'owner' }, (err, result) => {
  //     if (result && result.data) {
  //       const items = result.data.items;
  //       for (var i = 0; i < items.length; i++) {
  //         if (items[i].summary == settings.calendar) {
  //           callback(err, items[i].id);
  //           return;
  //         }
  //       }
  
  //       calendar.calendars.insert({ requestBody: { summary: settings.calendar } }, (err, result) => {
  //         var id;
  //         if (result && result.data && result.data.id) {
  //           id = result.data.id;
  //         }
  //         callback(err, id);
  //       });
  //       return;
  //     }
  
  //     callback(err, null);
  //   })
  // }
}
