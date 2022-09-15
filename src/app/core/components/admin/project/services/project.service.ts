import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../../../../../environments/environment';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { User } from '../../user/models/user';
import { SingleResponseModel } from 'app/core/models/singleResponseModel';
import { ProjectAdd } from '../../project-add/models/projectAdd';
import { ResponseModel } from 'app/core/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  
  
  getProjectList(): Observable<ListResponseModel<Project>> 
  {
    return this.httpClient.get<ListResponseModel<Project>>(environment.getApiUrl +"/projects/getall");
  }

  getProjectById(id:string):Observable<SingleResponseModel<Project>>
  {
    return this.httpClient.get<SingleResponseModel<Project>>(environment.getApiUrl+"/projects/getbyid?id="+id)
  }

  add(projectToAdd:ProjectAdd):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.getApiUrl+"/projects/add",projectToAdd);
  }

}