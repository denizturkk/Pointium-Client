import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import { response } from 'express';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';
import { Project } from './models/project';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Project[];
  dataLoaded:boolean=false;
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
   this.getProjects();
  }

   getProjects(){
     
     this.projectService.getProjectList().subscribe(response=>{
       this.projects=response.data ;
       this.dataLoaded=true;
     })

  }
}
