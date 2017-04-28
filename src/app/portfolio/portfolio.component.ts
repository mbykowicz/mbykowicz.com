import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  providers: [ProjectsService],
    animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)', opacity: '1'})),
      transition(':enter', [style({transform: 'translateX(-100px)', opacity: '0'}), animate('600ms ease-out')]),
      transition(':leave', [animate('400ms ease-in', style({transform: 'translateX(60px)', opacity: '1'}))])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  projects = [];
  state : string = "inactive"

  constructor(private _projectsService : ProjectsService, private _router : Router) { }

  ngOnInit() {
    this._projectsService.getProjects().subscribe(res => this.projects = res);
  }

  onSelect(project) {
    this._router.navigate(['/projects', project.id]);
  }

}
