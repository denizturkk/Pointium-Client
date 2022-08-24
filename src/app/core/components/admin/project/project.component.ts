import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "environments/environment";
import { response } from "express";
import { Observable } from "rxjs";
import { threadId } from "worker_threads";
import { Project } from "./models/project";
import { ProjectService } from "./services/project.service";
import { Router } from "@angular/router";

@Component({
  selector: "project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  
  projects: Project[];
  message: string;
  dataLoaded: boolean = false;


  constructor(private projectService: ProjectService,private router :Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjectList().subscribe((response) => {
      if (response.success == true) {
        this.projects = response.data;
        this.dataLoaded = true;
      } else {
        this.message = response.message;
      }
    });
  }

 
  
 






}
