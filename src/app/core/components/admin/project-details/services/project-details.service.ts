import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserOfProject } from '../models/userOfProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  
  constructor(private httpClient:HttpClient) {   
  }
  
  
  getUsersByProjectId(projectId:string):Observable<ListResponseModel<UserOfProject>>
{
  return this.httpClient.get<ListResponseModel<UserOfProject>>(environment.getApiUrl +"/projects/getallusersbyprojectid?projectId="+projectId);
  
}
}
