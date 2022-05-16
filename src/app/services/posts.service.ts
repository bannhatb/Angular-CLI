import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './constant';

const LIST_POST_URL = Config.API_URL + '/posts';
const POST_BY_ID_URL = (id:any) => Config.API_URL + '/posts/' + id;
const CREATE_POST_URL = Config.API_URL + '/posts';
const UPDATE_POST_BY_ID_URL = (id:any) => Config.API_URL + '/posts/' + id; //  url: /post/1
const DELETE_POST_BY_ID_URL = (id:any) => Config.API_URL + '/posts/' + id;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //observable - RxJS -> stream data
  getPosts(){
    return this.httpClient.get(LIST_POST_URL)
  }

  getPostById(id:any){
    return this.httpClient.get(POST_BY_ID_URL(id))
  }

  createPost(data:any){
    return this.httpClient.post(CREATE_POST_URL, JSON.stringify(data))
  }

  updatePost(id:any, data:any){
    return this.httpClient.put(UPDATE_POST_BY_ID_URL(id), JSON.stringify(data))
  }

  deletePost(id:any){
    return this.httpClient.delete(DELETE_POST_BY_ID_URL(id))
  }

}
