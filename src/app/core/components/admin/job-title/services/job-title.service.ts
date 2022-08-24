import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { jobTitle } from '../models/jobTitle';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  constructor(private httpClient:HttpClient) { }

  getJobTitleList(): Observable<ListResponseModel<jobTitle>> 
  {
    return this.httpClient.get<ListResponseModel<jobTitle>>(environment.getApiUrl +"/Jobtitles/getall");
  }
}
