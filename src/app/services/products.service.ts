import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessService } from './business.service';

const API = 'http://vnpt.omtest.online';
const LIST_PRODUCT_URL = API + '/api/Product/list-by-user';
const ADD_PRODUCT_URL = API + '/api/Product/add';
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
}
