import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  userId !: number;
  post !: Ipost;
  imgcatg: string[] = ['nature', 'city', 'fashion', 'foodanddrink', 'film'];
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private _postsService: PostsService) { }

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

  onDeletePost(id: number) {
    this._postsService.deletePost(id)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/posts'])
        }
      )
  }

}
