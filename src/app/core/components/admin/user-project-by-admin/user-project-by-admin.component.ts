import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProject } from './models/userProject';
import { UserProjectAdminService } from './services/user-project-admin.service';

@Component({
  selector: 'user-project-by-admin',
  templateUrl: './user-project-by-admin.component.html',
  styleUrls: ['./user-project-by-admin.component.css']
})
export class UserProjectByAdminComponent implements OnInit {

  userId:string;
  userProjects:UserProject[];
  constructor(private userProjectAdminService:UserProjectAdminService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActivatedUserId();
    this.getUserProjects();
  }

  getActivatedUserId(){
    this.userId=this.activatedRoute.snapshot.paramMap.get("userid");
   }

  getUserProjects(){
    this.userProjectAdminService.getAllUserProjectsByUserId(this.userId).subscribe(response=>{
      console.log(response)
      if(response.success)
      {
        this.userProjects=response.data
       
      }
      else{
        console.log("request failed");
      }
    })
  }
}
