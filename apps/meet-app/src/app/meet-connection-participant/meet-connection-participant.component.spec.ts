import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetConnectionParticipantComponent } from './meet-connection-participant.component';

describe('MeetConnectionParticipantComponent', () => {
  let component: MeetConnectionParticipantComponent;
  let fixture: ComponentFixture<MeetConnectionParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetConnectionParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetConnectionParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
