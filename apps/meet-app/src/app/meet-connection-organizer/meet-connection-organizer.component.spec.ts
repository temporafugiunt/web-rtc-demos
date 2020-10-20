import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetConnectionOrganizerComponent } from './meet-connection-organizer.component';

describe('MeetConnectionOrganizerComponent', () => {
  let component: MeetConnectionOrganizerComponent;
  let fixture: ComponentFixture<MeetConnectionOrganizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetConnectionOrganizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetConnectionOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
