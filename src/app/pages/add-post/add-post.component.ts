import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService,
    private router: Router //dùng để điều hướng link đến các pages
  ) { }

  ngOnInit(): void {
    this.makeForm()
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

  submitData(){
    if(this.form.valid){
      const data = this.form.value // {title: '', body},
      this.postService.createPost(data)
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
