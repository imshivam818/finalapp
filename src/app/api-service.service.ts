import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//const baseUrl = 'http://localhost:3000/login';



@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  constructor(private http:HttpClient) {}
  login(data:any) {
    console.log(data,"data login")
    return this.http.post('http://localhost:3000/login', data);
  }

  signup(data:any) {
    // console.log(data,"data signup")
    return this.http.post('http://localhost:3000/signup', data);
  }
}

