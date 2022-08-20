import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from '../../../../../../environments/environment';
import { ListResponseModel } from 'app/core/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  
  
  getProjectList(): Observable<ListResponseModel<Project>> 
  {
    return this.httpClient.get<ListResponseModel<Project>>(environment.getApiUrl +"/Projects/getall");
  }
}
