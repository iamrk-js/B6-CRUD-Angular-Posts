import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  userId !: number;
  post !: Ipost
  constructor(private route : ActivatedRoute, private _postsService : PostsService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(res => {
        this.userId = +res['id']
          this._postsService.getPost(this.userId)
            .subscribe(res => {
              this.post = res
            })
      })
  }

}
