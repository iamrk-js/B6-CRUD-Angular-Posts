import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/posts';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl: string = `${environment.baseUrl}/posts`
  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<Ipost[]> {
    return this._http.get<Ipost[]>(this.postUrl)
      .pipe(
        catchError((err: any) => {
          alert(err)
          return throwError('An error occurred.');
        })
      )
  }

  getPost(id: number): Observable<Ipost> {
    const singlePostUrl = `${this.postUrl}/${id}`
    return this._http.get<Ipost>(singlePostUrl)
  }

  updatePost(data: Ipost, id : number) : Observable<any>{
    const updateUrl = `${this.postUrl}/${id}`;
    return this._http.patch<any>(updateUrl, data)
  }
  deletePost(id:number){
    const deleteUrl = `${this.postUrl}/${id}`;
    return this._http.delete<any>(deleteUrl)
  }

  createPost(post : Ipost){
    return this._http.post(this.postUrl, post)
  }

}
