import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token'
const API = 'http://vnpt.omtest.online';
const LOGIN_URL = API + '/api/Account/login';
const LIST_CATEGORY_BY_USER = API + '/api/Category/list-by-user';
const ADD_CATEGORY_NAME_URL = API + '/api/Category/add';

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

  //category
  getCategoriesByUser(){
    return this.httpClient.get(LIST_CATEGORY_BY_USER, this.getRequestOptions())
  }

}
