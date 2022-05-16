import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  postId: string = this.activatedRoute.snapshot.paramMap.get('id') || '-1'
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private commentService: CommentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router // dùng để điều hướng đến các pages
  ) { }

  ngOnInit(): void {
    this.makeFormAddComment()
  }

  //data binding

  makeFormAddComment(){
    this.form = this.formBuilder.group({
      //định nghĩa các input tại đây với cú pháp sau
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(1000)]]
    })

  }

  //lay data tu form theo id
  get name() {return this.form.get('name')}
  get email() {return this.form.get('email')}
  get body() {return this.form.get('body')}

  submitData(){
    if(this.form.valid){
      const data = this.form.value
      this.commentService.createComment(data, this.postId)
      .subscribe(
        (res) => {
          alert('Save successfully')
          this.router.navigate(['/'])
        },
        (err) => {
          alert('Add commnet fail. Detail: ' + JSON.stringify(err))
        }
      )
    }
  }

}
