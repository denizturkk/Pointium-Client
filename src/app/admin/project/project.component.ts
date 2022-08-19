import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project';
import { response } from 'express';
import { ProjectService } from 'app/services/project.service';


@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Project[];
  

  constructor(private projectService:ProjectService) {}

  ngOnInit(): void {
    console.log("ng calisti");
  }

  getProjects(){
      this.projectService.getProjects().subscribe(response=>{
        this.projects=response.data
      });
  }

}
