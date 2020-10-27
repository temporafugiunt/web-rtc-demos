
import { Component, OnInit } from '@angular/core';
import { PlatformLocation, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'webrtc-demos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(platformLocation: PlatformLocation, router: Router, location: Location) {
    console.log((platformLocation as any).location);
    console.log((platformLocation as any).location.href);
    console.log((platformLocation as any).location.origin);
    console.log(location); 
    console.log(location.prepareExternalUrl(""));
  }

  ngOnInit(): void {
  }

}
