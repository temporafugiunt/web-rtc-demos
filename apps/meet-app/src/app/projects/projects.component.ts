import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: '1',
      title: 'Individual Connect Via Meet',
      details:
        'This scenario uses Google Meet to enable individual communication',
      icon: 'phone_in_talk',
    },
    {
      id: '2',
      title: 'Group Connect Via Meet',
      details: 'This scenario uses Google Meet to enable group communication',
      icon: 'connect_without_contact',
    },
    {
      id: '3',
      title: 'Individual Connect Via OpenTok',
      details: 'This scenario uses OpenTok to enable individual communication',
      icon: 'phone_in_talk',
    },
    {
      id: '4',
      title: 'Individual Connect Via OpenTok',
      details: 'This scenario uses OpenTok to enable group communication',
      icon: 'connect_without_contact',
    },
  ];
  currentProject = null;

  constructor() {}

  public selectProject(project) {
    this.currentProject = project;
  }

  public unselectProject() {
    this.currentProject = null;
  }

  ngOnInit(): void {}
}
