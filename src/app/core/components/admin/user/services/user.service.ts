import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'environments/environment';
import { ListResponseModel } from 'app/core/models/listResponseModel';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserList():Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(environment.getApiUrl+"/users/getall");
  }



}













  
 
