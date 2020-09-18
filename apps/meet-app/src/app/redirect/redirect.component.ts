import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@webrtc-demos/auth';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService
      .checkAuth()
      .subscribe((auth) => this.router.navigateByUrl('/projects'));
  }
}
