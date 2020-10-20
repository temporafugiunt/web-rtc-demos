import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, OnDestroy, ComponentRef } from '@angular/core';
import { MeetConnectionOrganizerComponent } from '../meet-connection-organizer/meet-connection-organizer.component';
import { MeetConnectionParticipantComponent } from '../meet-connection-participant/meet-connection-participant.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = [
    {
      id: '1',
      title: 'Connect to Meet as an Organizer',
      details: 'This scenario uses Google Meet to enable individual and group communication as the organizer',
      icon: 'phone_in_talk',
      componentClass: MeetConnectionOrganizerComponent
    },
    {
      id: '2',
      title: 'Connect to Existing Meet as a Participant',
      details: 'This scenario uses Google Meet to enable individual and group communication as a participant',
      icon: 'connect_without_contact',
      componentClass: MeetConnectionParticipantComponent
    },
  ];
  currentProject = null;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) currentProjectComponent: ViewContainerRef;
  currentComponent: any = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public selectProject(project) {
    console.log(project.componentClass);
    this.currentProject = project;
    if(this.currentComponent) {
      this.currentProjectComponent.remove(0);
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(project.componentClass);
    this.currentComponent = this.currentProjectComponent.createComponent(componentFactory);
  }

  public unselectProject() {
    this.currentProject = null;
  }

  ngOnInit(): void {}

  ngOnDestroy() : void {
    if(this.currentComponent) {
      this.currentProjectComponent.remove(0);
    }
  }
}
