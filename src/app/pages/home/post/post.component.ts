import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post:any

  @Output() deleteEvent = new EventEmitter<number>() //khi kich hoat su kien output thi bao cho [page] cha de load lai

  constructor(
    private postService: PostsService
  ) {

  }

  ngOnInit(): void {
  }

  onDeleted(){
    if(window.confirm("Ban thuc su muon xoa")){
      this.postService.deletePost(this.post.id)
      .subscribe(
        (res) => {
          this.deleteEvent.emit(this.post.id)
        },
        (err) => {
          alert('Delete fail. Detail: ' + JSON.stringify(err))
        }
      )
    }
  }

}
