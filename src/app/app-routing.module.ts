import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { AddCommentComponent } from './pages/add-comment/add-comment.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
