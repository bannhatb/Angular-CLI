import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fullName:string = "Vo Van Ban"
  items:Array<any> = []
  categories:Array<any> = []

  constructor(
    private postsService: PostsService,
    private categoriesService: CategoriesService
  ) {
    // this.items.push({
    //   id: 1,
    //   name: 'Ban'
    // })
    // this.items.push({
    //   id: 2,
    //   name: 'Hiep'
    // })
    // this.items.push({
    //   id: 3,
    //   name: 'Quynh'
    // })
    // this.items.push({
    //   id: 4,
    //   name: 'Truyen'
    // })
    // this.items.push({
    //   id: 5,
    //   name: 'Viet'
    // })
  }

  ngOnInit(): void {
    this.loadPosts()
  }

  onClickMe(){
    alert('Click!')
  }

  loadPosts(){
    this.postsService.getPosts()
    .subscribe(
      (res) => this.handleGetPostSuccess(res),
      (err) => this.handleGetPostError(err)
    )
    //category
    this.categoriesService.getCategoriesByUser()
    .subscribe(
      (res) => this.handleGetCategorySuccess(res),
      (err) => this.handleGetCategoryError(err)
    )
  }
  handleGetPostSuccess(res: any) {
    this.items = res
    console.log(res)
  }

  handleGetPostError(err: any) {
    console.log(err)
  }

  onDeleteEvent(postId:number){
    console.log('On Home Component - ' + postId)
    this.loadPosts()
  }
  onDeleteCategoryEvent(categoryId:number){
    console.log('On Home Component - ' + categoryId)
    this.loadPosts()
  }

  //category
  handleGetCategoryError(err: any){
    console.log(err)
  }
  handleGetCategorySuccess(res: any){
    this.categories = res.object.items
    console.log(res)
  }
}
