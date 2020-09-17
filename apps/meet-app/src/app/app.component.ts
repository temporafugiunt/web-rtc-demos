import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@webrtc-demos/api-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, private router: Router) {}

  icon = 'campaign';
  title = 'Web RTC Demos';
  links = [
    { path: '/', icon: 'info', title: 'Info' },
    { path: '/projects', icon: 'phone', title: 'Projects' },
  ];

  public login() {
    this.router.navigateByUrl('/login');
  }
}
