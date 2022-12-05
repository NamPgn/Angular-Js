import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../module/module';


@Injectable({
  providedIn: 'root'

})

export class AuthService {

  API = `http://localhost:8000/user`;

  constructor(private http: HttpClient) { }
  loginIn(user: any): Observable<any> {
    console.log("user", user);
    return this.http.post<any>(this.API, user);
  }
  Islogin() {
    return sessionStorage.getItem("token") != null; //lấy ra thằng token ở session 
  }

}
