import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { SingleResponseModel } from 'app/core/models/singleResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserProject } from '../models/userProject';

@Injectable({
  providedIn: 'root'
})
export class UserProjectAdminService {

  constructor(private httpClient: HttpClient) { }

  getAllUserProjectsByUserId(userId:string):Observable<ListResponseModel<UserProject>>{
    return this.httpClient.get<ListResponseModel<UserProject>>(environment.getApiUrl+"/userprojects/getbyuserid?userId="+userId);
  }

  getByUserAndProject(userId:string,projectId:string):Observable<SingleResponseModel<UserProject>>{
    return this.httpClient.get<SingleResponseModel<UserProject>>(environment.getApiUrl+"/userprojects/getbyuserandproject?userId="+userId+"&projectId="+projectId);
  }



}
