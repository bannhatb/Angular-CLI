import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  postId: string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'

  itemcomment:Array<any> = []
  @Input() comment:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.loadComment()
  }

  loadComment(){
    this.commentsService.getCommentsByPostId(this.postId)
    .subscribe(
      (res) => this.handleGetCommentSuccess(res),
      (err) => this.handleGetCommentError(err)
    )
  }
  handleGetCommentError(err: any) {
    console.log(err)
  }
  handleGetCommentSuccess(res: any){
    this.itemcomment = res
    console.log(res)
  }

}
