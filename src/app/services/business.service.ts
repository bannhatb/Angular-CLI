import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token'
const API =  'http://vnpt.omtest.online';
const LOGIN_URL = API + '/api/Account/login';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {



  constructor(
    private httpClient: HttpClient
  ) { }

  login(data:any){
    return this.httpClient.post(LOGIN_URL, JSON.stringify(data), this.getRequestOptions())
  }

  setToken(token:any){
    localStorage.setItem(TOKEN_KEY, token)
  }

  getToken(){
    return localStorage.getItem(TOKEN_KEY)
  }

  getRequestOptions(){
    const token = this.getToken()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    }
    return httpOptions
  }



}
