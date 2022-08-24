import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];
  message:string;

  constructor(private userService:UserService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getUserList().subscribe((response)=>
    {
      if(response.success==true)
      {
        this.users=response.data
      }
      else{
        this.message=response.message;
      }
    })
  }
}
