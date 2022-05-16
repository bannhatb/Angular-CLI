import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './constant';


const LIST_COMMENT_BY_POST_ID_URL = (id:any) => Config.API_URL + '/posts/' + id + '/comments';
const COMMENT_BY_ID_URL = (idPost:any, idComment:any) => Config.API_URL + '/posts/' + idPost + '/comments' + idComment;
//tao cmt tai url sau
const CREATE_COMMENT_URL = (id:any) => Config.API_URL + '/posts/' + id + '/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCommentsByPostId(id:any){
    return this.httpClient.get(LIST_COMMENT_BY_POST_ID_URL(id))
  }

  getCommentById(idPost:any, idComment:any){
    return this.httpClient.get(COMMENT_BY_ID_URL(idPost,idComment))
  }

  createComment(data:any, id:any){
    return this.httpClient.post(CREATE_COMMENT_URL(id), JSON.stringify(data))
  }
}
