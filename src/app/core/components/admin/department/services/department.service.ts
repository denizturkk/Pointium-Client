import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient:HttpClient) { }

  getProjectList(): Observable<ListResponseModel<Department>> 
  {
    return this.httpClient.get<ListResponseModel<Department>>(environment.getApiUrl +"/Departments/getall");
  }

}
