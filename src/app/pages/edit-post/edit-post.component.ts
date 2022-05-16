import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  postId: string = this.activatedRoute.snapshot.queryParamMap.get('postId') || '-1'
  public form:FormGroup

  constructor( private formBuilder: FormBuilder,
    private postService: PostsService,
    private  activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.makeForm()

    this.getPost()
  }

  makeForm(){
    this.form = this.formBuilder.group({
      //define all input
      //cu phap define
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      body: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]],
      userId: ['', [Validators.required, Validators.min(1)]]
    })
  }

  get title() { return this.form.get('title') }
  get body() { return this.form.get('body') }
  get userId() { return this.form.get('userId') }

  getPost(){
    this.postService.getPostById(this.postId)
    .subscribe(
      (res:any) => {
        this.form.patchValue({
          title: res.title,
          body: res.body,
          userId: res.userId
        })
      },
      (err) => {
        console.log(err)
      }
    )
  }

  submitData(){
    if(this.form.valid){
      const val = this.form.value
      const data = {
        id: this.postId,
        title: val.title,
        body: val.body,
        userId: val.userId
      }
      this.postService.updatePost(this.postId, data)
      .subscribe(
        (res) => {
          alert('Save successfully')
          //dùng router để điều hướng ứng dụng bên trong
          this.router.navigate(['/'])
        },
        (err) => {
          alert('Fail!! Error detail: ' + JSON.stringify(err))
        }
      )
    }
  }

}
