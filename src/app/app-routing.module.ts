import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { AddCommentComponent } from './pages/add-comment/add-comment.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { CommentComponent } from './pages/home/comment/comment.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact-us',
        component: ContactsComponent
      },
      {
        path: 'post-detail/:id',
        component: PostDetailComponent
      },
      {
        path: 'post/:id/comments',
        component: CommentComponent
      },
      {
        path: 'comment-detail/:id',
        component: CommentDetailComponent
      },
      {
        path: 'add-post',
        component: AddPostComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'post/:id/add-comments',
        component: AddCommentComponent
      },
      {
        path: 'edit-post',
        component: EditPostComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
        //login moi duoc phep vao
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-category/:id',
        component: EditCategoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
