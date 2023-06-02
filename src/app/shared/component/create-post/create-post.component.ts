import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/posts';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postId !: number;
  postForm !: FormGroup;
  constructor(
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private _postService: PostsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    })
    this._route.params
      .subscribe((params: Params) => {
        this.postId = +params['id'];
        if (this.postId) {
          this._postService.getPost(this.postId)
            .subscribe((res) => {
              const postObj = res;
              this.postForm.patchValue(postObj)
            })
        }
      })

  }
  onUpdatePost() {
    this._postService.updatePost(this.postForm.value, this.postId)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/posts'])
        }
      )
  }

  onCreatePost() {
    if (this.postForm.valid) {
      let obj: Ipost = {
        ...this.postForm.value,
        userId: Math.ceil(Math.random() * 10)
      }

      this._postService.createPost(obj)
        .subscribe(res => {
          console.log(res);
          this._router.navigate(['/posts'])
        })
    }
  }
}
