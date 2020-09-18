import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@webrtc-demos/api-interfaces';
import { Router } from '@angular/router';
import { AuthService } from '@webrtc-demos/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  icon = 'campaign';
  title = 'Web RTC Demos';
  links = [
    { path: '/', icon: 'info', title: 'Info' },
    { path: '/projects', icon: 'phone', title: 'Projects' },
  ];

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  $isAuthenticated = false;

  ngOnInit(): void {
    this.authService
      .checkAuth()
      .subscribe((auth) => (this.$isAuthenticated = auth));
  }

  public login() {
    this.authService.authorize();
  }

  public logout() {
    this.authService.logout();
    this.$isAuthenticated = false;
    this.router.navigateByUrl('/home');
  }
}
