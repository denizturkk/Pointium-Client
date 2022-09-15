import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Customer } from '../customer/models/customer';
import { CustomerService } from '../customer/services/customer.service';
import { User } from '../user/models/user';
import { UserService } from '../user/services/user.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ProjectAdd } from './models/projectAdd';
import { analytics } from 'googleapis/build/src/apis/analytics';
import { ProjectService } from '../project/services/project.service';
import { ServerResponse } from 'http';
import { sample } from 'rxjs-compat/operator/sample';

@Component({
  selector: 'project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  customers:Customer[];
  selectedCustomer:Customer={} as Customer;
  users:User[]
  selectedUser:User={} as User;
  message:string;
  dataLoaded:boolean=false;
  projectAddForm:FormGroup;
  
  
  constructor(private formBuilder:FormBuilder,private projectService:ProjectService,private userService:UserService,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.createProjectAddForm(),
    this.getCustomerList();
   this.getUserList();
  }

 
  
  add()
  {
    if(this.projectAddForm.valid){
      this.searcByCompanyNameInCustomers(this.projectAddForm.get("customer")?.value);
      this.searcByEmailInUsers(this.projectAddForm.get("user")?.value);

      let sampleModel={    
        customerId:-1,
        leadById:-1,
        assignedById:1,
        projectName:"",
        status:true,
        explanation:"",
        startedAt:new Date,
        addedAt:new Date 
      }
        sampleModel.customerId=this.selectedCustomer.id;
        sampleModel.leadById=this.selectedCustomer.id;
        sampleModel.projectName= this.projectAddForm.get("projectName").value;
        sampleModel.explanation=this.projectAddForm.get("explanation").value;
        sampleModel.startedAt=this.projectAddForm.get("startedAt").value;
        sampleModel.assignedById=1;
     
        let ProjectModel= Object.assign({},sampleModel);
      
     this.projectService.add(ProjectModel).subscribe(response=>{
      if(response.success){
        console.log(response);
        this.dataLoaded=true;
      }
        
     }) 
    }

    else{
      console.log("hata form valid degil");
    }
  }
  

  createProjectAddForm(){
    this.projectAddForm=this.formBuilder.group({
      customer:["",Validators.required],
      user:["",Validators.required],
      projectName:["",Validators.required],
      explanation:[],
      startedAt:["",Validators.required]
    });
  }

  getCustomerList(){
    this.customerService.getCustomerList().subscribe(response=>{
      if(response.success){
        this.customers=response.data;
      }
      else{
        this.message=response.message;
        this.dataLoaded=true;
      }
    })
  }
  getUserList(){
    this.userService.getUserList().subscribe(response=>{
      if(response.success)
      {
        this.users=response.data;
        this.dataLoaded=true;
      }
      else {
        this.message=response.message;
        
      }
    })
  }
 
  setCustomer(customer:Customer){
    this.selectedCustomer=customer;
  }

  setUser(user:User){
    this.selectedUser=user;
  }  
  
  searcByCompanyNameInCustomers(companyName:string){
    this.customers.forEach(customer => {
      if(customer.companyName===companyName){
        this.selectedCustomer=customer;
        return customer;
      }  
    });
  }

  searcByEmailInUsers(email:string){
    this.users.forEach(user =>{
      if(user.email===email){
        this.selectedUser=user;
        return user;
      }
    });
  }




}
