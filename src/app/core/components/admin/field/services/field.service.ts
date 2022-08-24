import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Field } from '../models/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private httpClient:HttpClient) { }

  getFieldList(): Observable<ListResponseModel<Field>> 
  {
    return this.httpClient.get<ListResponseModel<Field>>(environment.getApiUrl +"/Fields/getall");
  }
}
