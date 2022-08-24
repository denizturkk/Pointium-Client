import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project/models/project';
import { ProjectService } from '../project/services/project.service';
import { UserOfProject } from './models/userOfProject';
import { ProjectDetailsService } from './services/project-details.service';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private projectDetailService:ProjectDetailsService,private projectService:ProjectService) { }
  ngOnInit(): void {
    this.getActivedProjectId();
    this.getAllUserOfProject();
    this.getProjectById();
  }

  dataLoaded:boolean=false;
  projectId:string
  project:Project;
  
  userOfProjects:UserOfProject[];
  message:string; 

  getActivedProjectId(){
    this.projectId=this.activatedRoute.snapshot.paramMap.get('id');
  }

  getAllUserOfProject(){
    this.projectDetailService.getUsersByProjectId(this.projectId).subscribe((response)=>{
     
      if(response.success==true){
        this.userOfProjects=response.data
      }
      else{
        this.message=response.message;
      }
    });
  }

  getProjectById(){
    this.projectService.getProjectById(this.projectId).subscribe(response=>{
      if(response.success==true)
      {
          this.project==response.data;  
          this.dataLoaded=true;
          
      }
      else{

        this.message==response.message;
      }

    });
  }

}
 