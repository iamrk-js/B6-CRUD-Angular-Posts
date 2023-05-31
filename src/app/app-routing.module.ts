import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { PostsComponent } from './shared/component/posts/posts.component';
import { CreatePostComponent } from './shared/component/create-post/create-post.component';
import { PostComponent } from './shared/component/post/post.component';

const routes: Routes = [
  {path : '', component : DashboardComponent},
  {path : 'posts', component : PostsComponent},
  {path : 'posts/:id', component : PostComponent},
  {path : 'addpost', component : CreatePostComponent},
  {path : 'posts/:id/edit', component : CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
