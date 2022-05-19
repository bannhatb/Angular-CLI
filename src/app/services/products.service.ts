import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessService } from './business.service';

const API = 'http://vnpt.omtest.online';
const LIST_PRODUCT_URL = API + '/api/Product/list-by-user';
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
}
