import { Component, OnInit } from '@angular/core';
import { jobTitle } from './models/jobTitle';
import { JobTitleService } from './services/job-title.service';

@Component({
  selector: 'job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobTitleComponent implements OnInit {

  constructor(private jobTitleService:JobTitleService) { }

  jobTitles:jobTitle[];
  message:string
  dataLoaded:boolean=false;

  ngOnInit(): void {
    this.getJobTitleList();
  }

  getJobTitleList(){
      this.jobTitleService.getJobTitleList().subscribe((response=>{
        if(response.success){
          this.jobTitles=response.data;
          this.dataLoaded=true;
        }
        else if(!response.success){
          this.message=response.message;  
        }
      }))
   
  }

}
