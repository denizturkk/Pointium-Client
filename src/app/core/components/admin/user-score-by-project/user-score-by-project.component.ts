import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { response, Router } from 'express';
import { UserProjectDay } from './models/userProjectDay';
import { UserProjectDayAdminService } from './services/user-project-day-admin.service';
import { Calendar, CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { CalendarEvent } from './models/calendarEvents';
import { title } from 'process';
import { UserProjectAdminService } from '../user-project-by-admin/services/user-project-admin.service';
import { UserProject } from '../user-project-by-admin/models/userProject';



@Component({
  selector: 'user-score-by-project',
  templateUrl: './user-score-by-project.component.html',
  styleUrls: ['./user-score-by-project.component.css']
})
export class UserScoreByProjectComponent implements OnInit {
  
  userId:string;
  projectId:string;
  year:string="2022"
  month:string="8";
  userProjectDays:UserProjectDay[];
  calendarEvents:any[]=[];
  calendarOptions:CalendarOptions | undefined;
  userProject:UserProject;


  counter:number=0;

  ngOnInit(): void {
    this.getUrlParameters();
    this.getUserScore();
    this.getUserProject();
    
  }

  tmpVariable:CalendarEvent;
  color:string;
  constructor(private userProjectAdminService:UserProjectAdminService,private userProjectDayAdminService:UserProjectDayAdminService,private activatedRoute:ActivatedRoute) { }

 
 getUrlParameters(){
  this.getUserId();
  this.getProjectId();
 }

 setCalendarOptions(){
  this.calendarOptions={
    initialView: 'dayGridMonth',
    events:this.calendarEvents,
    editable: true,
    selectable: true
  }

 }
  getUserId(){
   this.userId=this.activatedRoute.snapshot.paramMap.get("userid");
  }
  getProjectId(){
   this.projectId=this.activatedRoute.snapshot.paramMap.get("projectid");
  }


  getUserProject(){
    this.userProjectAdminService.getByUserAndProject(this.userId,this.projectId).subscribe(response=>{
      if(response.success){
          this.userProject=response.data;
      }
      else{
        console.log("response false")
      }
    })
  }

  getUserScore(){
  this.userProjectDayAdminService.getUserScore(this.userId,this.projectId,this.year,this.month).subscribe(response=>{
    if(response.success){
      this.userProjectDays=response.data; 
     
      this.calendarEvents = response.data.map((e: any) => ({ title: e.scoreTableExplanation, date: e.calendarDate }))
      this.setCalendarOptions();
      
      console.log(this.calendarEvents)
            
    }
    else{
      console.log("response false");
    }
  })
  }
}
