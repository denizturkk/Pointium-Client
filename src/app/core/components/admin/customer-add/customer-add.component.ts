import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer/services/customer.service';

@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }

  createCustomerAddForm(){
    this.customerAddForm=this.formBuilder.group({
      companyName:["",Validators.required],
      status:["",Validators.required]
    });
  }
   
  

 add(){
   if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value)
      console.log(customerModel);
        this.customerService.add(customerModel).subscribe(response=>{
          if(response.success){
            console.log(response.message)
          }
          else{
            console.log(response.message)
          }
        })
     }  
     else{
       console.log("customer add form is not valid");
     }
  }




    
}
