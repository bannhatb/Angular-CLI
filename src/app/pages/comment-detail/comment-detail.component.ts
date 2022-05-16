import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {

  //URL: /comment-detail?:id
  postId: string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'

  commentId: string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'

  commentData:any
  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService

  ) { }

  ngOnInit(): void {
    this.getComment()
  }

  //get ID cua comment do thi phai get them duoc ID cua post do => can setup cho postservice
  getComment(){
    this.commentsService.getCommentById(this.commentId, this.postId)
    .subscribe(
      (res) => this.handleGetPostSuccess(res),
      (err) => this.handleGetPostError(err)
    )
  }
  handleGetPostSuccess(res:any): void {
    this.commentData = res
  }
  handleGetPostError(err:any): void {
    console.log(err)
  }

}
