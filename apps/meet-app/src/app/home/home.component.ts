
import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'webrtc-demos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(platformLocation: PlatformLocation) {
    console.log((platformLocation as any).location);
    console.log((platformLocation as any).location.href);
    console.log((platformLocation as any).location.origin);
  }

  ngOnInit(): void {
  }

}
