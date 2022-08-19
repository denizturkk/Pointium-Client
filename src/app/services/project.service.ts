import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectResponseModel } from 'app/models/projectResponseModel';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  apiUrl="https://localhost:44370/api/projects/getall"

  constructor(private httpClient:HttpClient) { }

  getProjects():Observable<ProjectResponseModel>
  {
    return this.httpClient.get<ProjectResponseModel>(this.apiUrl);
  }

}
