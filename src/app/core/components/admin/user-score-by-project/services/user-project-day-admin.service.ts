import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UserProjectDay } from '../models/userProjectDay';

@Injectable({
  providedIn: 'root'
})
export class UserProjectDayAdminService {

  constructor(private httpClient:HttpClient) { }

  getUserScore( userId:string,projectId:string,year:string,month:string):Observable<ListResponseModel<UserProjectDay>>
  {
    return this.httpClient.get<ListResponseModel<UserProjectDay>>(
      environment.getApiUrl +"/userprojectdays/getmonthlybyuserandproject?userId="+userId+"&projectId="+projectId+"&year="+year+"&month="+month
      );
    
  }
}
