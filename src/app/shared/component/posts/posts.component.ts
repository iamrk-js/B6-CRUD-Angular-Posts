import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postsArray !: Observable<Array<Ipost>>
  constructor(private _postsService : PostsService) { }

  ngOnInit(): void {
    this.postsArray = this._postsService.getAllPosts()
  }

}
