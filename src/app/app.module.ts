import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { PostsComponent } from './shared/component/posts/posts.component';
import { CreatePostComponent } from './shared/component/create-post/create-post.component';
import { NavComponent } from './shared/component/nav/nav.component';
import { PostComponent } from './shared/component/post/post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    CreatePostComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
