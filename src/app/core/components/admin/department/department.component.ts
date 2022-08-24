import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Department } from './models/department';
import { DepartmentService } from './services/department.service';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private departmentService:DepartmentService) { }

  departments:Department[];
  message:string
  dataLoaded:boolean=false;

  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList(){
      this.departmentService.getProjectList().subscribe((response=>{
        if(response.success){
          this.departments=response.data;
          this.dataLoaded=true;
        }
        else if(!response.success){
          this.message=response.message;  
        }
      }))
   
  }

}
