import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessService } from './business.service';

const API = 'http://vnpt.omtest.online';
const LIST_PRODUCT_URL = API + '/api/Product/list-by-user';
const ADD_PRODUCT_URL = API + '/api/Product/add';
const EDIT_PRODUCT_BY_ID_URL = API + '/api/Product/edit';
const GET_PRODUCT_BY_ID = (id:any) => API + '/api/Product/get-by-id/' + id;
const DELETE_PRODUCT_BY_ID_URL = (id:any) => API + '/api/Product/delete/' + id;
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private businessService: BusinessService,
    private httpClient: HttpClient
  ) { }

  getListProductByUser(){
    return this.httpClient.get(LIST_PRODUCT_URL, this.businessService.getRequestOptions())
  }
  addProduct(data:any){
    return this.httpClient.post(ADD_PRODUCT_URL, JSON.stringify(data), this.businessService.getRequestOptions())
  }
  updateProduct(data:any){
    return this.httpClient.put(EDIT_PRODUCT_BY_ID_URL, JSON.stringify(data), this.businessService.getRequestOptions())
  }
  getProductById(id:any){
    return this.httpClient.get(GET_PRODUCT_BY_ID(id), this.businessService.getRequestOptions())
  }
  deleteProductById(id:any){
    return this.httpClient.delete(DELETE_PRODUCT_BY_ID_URL(id), this.businessService.getRequestOptions())
  }
}
