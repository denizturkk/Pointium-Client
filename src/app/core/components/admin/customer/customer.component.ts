import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

import { Customer } from './models/customer';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

   customers:Customer[];
   message:string;
   dataLoaded:boolean=false;

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
    this.customerService.getUserList().subscribe((response)=>
    {
      if(response.success==true){
          this.customers=response.data;
          this.dataLoaded=true;
      }
      else{
        this.message=response.message;
      }
    })
    
  }

}
