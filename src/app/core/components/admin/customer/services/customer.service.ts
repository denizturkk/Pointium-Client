import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { ResponseModel } from 'app/core/models/responseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomerList():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(environment.getApiUrl+"/Customers/getall")
  }

  add(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.getApiUrl+"/Customers/add",customer);
  }

}
