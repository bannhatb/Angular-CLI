import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessService } from './business.service';
import { Config } from './constant';

const API =  'http://vnpt.omtest.online'
const LIST_CATEGORY_BY_USER = API + '/api/Category/list-by-user';
const ADD_CATEGORY_NAME_URL = API + '/api/Category/add';
const GET_CATEGORY_BY_ID = (id:any) => API + '/api/Category/get-by-id/' + id;
const UPDATE_CATEGORY_URL = API + '/api/Category/edit'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private httpClient: HttpClient,
    private bussiness: BusinessService
  ) { }

  //category
  getCategoriesByUser(){
    return this.httpClient.get(LIST_CATEGORY_BY_USER, this.bussiness.getRequestOptions())
  }

  createCategory(data:any){
    return this.httpClient.post(ADD_CATEGORY_NAME_URL, JSON.stringify(data), this.bussiness.getRequestOptions())
  }

  getCategoryById(id:any){
    return this.httpClient.get(GET_CATEGORY_BY_ID(id), this.bussiness.getRequestOptions())
  }

  updateCategory(data:any){
    return this.httpClient.put(UPDATE_CATEGORY_URL, JSON.stringify(data), this.bussiness.getRequestOptions())
  }
}
