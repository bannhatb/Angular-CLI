import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  //URL: /post-detail?:id
  postId: string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'
  //URl: /post-detail?id=1234
  //postId: string = this.activatedRoute.snapshot.queryParamMap.get('id') || '-1'
  postData:any

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.postService.getPostById(this.postId)
    .subscribe(
      (res) => this.handleGetPostSuccess(res),
      (err) => this.handleGetPostError(err)
    )
  }
  handleGetPostSuccess(res:any): void {
    this.postData = res
  }
  handleGetPostError(err:any): void {
    console.log(err)
  }

}

