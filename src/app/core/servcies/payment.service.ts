import { IUserDetails, IUserPostSuccess } from './../utils/models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor(private http: HttpClient) { }

postUserDetails(user: IUserDetails): Observable<IUserPostSuccess> {
  return this.http.post<IUserPostSuccess>('http://localhost:3000/addusers', user);
}
}
