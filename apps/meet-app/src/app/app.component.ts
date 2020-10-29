import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@webrtc-demos/api-interfaces';
import { Router } from '@angular/router';
import { AuthService } from '@webrtc-demos/auth';
import { PlatformLocation, Location, DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  isAuthenticated = false;

  icon = 'campaign';
  title = $localize`:|Application Title@@strings.application-title:Web RTC Demos`;
  links = [
    { path: '/', icon: 'info', title: $localize`:|Info Page Title@@strings.info-page-title:Info` },
    { path: '/connections', icon: 'phone', title: $localize`:|Projects Page Title@@strings.projects-page-title:Connections` },
  ];
  otherLanguage = $localize`:|The other langauge to switch to@@strings.other-language:es`;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private platformLocation: PlatformLocation,
    private location: Location,
    private cookieService: CookieService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.authService
      .checkAuth()
      .subscribe((auth) => (this.isAuthenticated = auth));
  }

  public login() {
    this.authService.authorize();
  }

  public logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigateByUrl('/info');
  }

  public switchLanguage() {
    const url = (this.platformLocation as any).location.origin + this.removeLastDirectory(this.location.prepareExternalUrl(""));
    console.log(`Navigating to '${url}'`);
    this.cookieService.delete('language', '/');
    this.cookieService.set('language', this.otherLanguage, undefined, '/');
    this.document.location.href = url;
  }

  private removeLastDirectory(url: string) {
    if(!url) { return('/'); }
    const urlArray = url.split('/').filter(function (el) {
      return !el;
    });
    urlArray.pop();
    return(`/${urlArray.join('/')}`);
  }
}
