import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { PostComponent } from './pages/home/post/post.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { CommentComponent } from './pages/home/comment/comment.component';
import { CommentDetailComponent } from './pages/comment-detail/comment-detail.component';
import { CommentsService } from './services/comments.service';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { AddCommentComponent } from './pages/add-comment/add-comment.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';




@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AdminComponent,
    ContactsComponent,
    HomeComponent,
    PostComponent,
    PostDetailComponent,
    CommentComponent,
    CommentDetailComponent,
    AddPostComponent,
    AddCommentComponent,
    EditPostComponent,
    LoginComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

