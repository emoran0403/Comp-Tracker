import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable()
export class JsonPlaceHolderService {
  constructor(private http: HttpClient) {}

  apiURL: string = 'https://jsonplaceholder.typicode.com/';
  resources = {
    posts: 'posts',
    comments: 'comments',
    albums: 'albums',
    photos: 'photos',
    todos: 'todos',
    users: 'users',
  };

  getPosts(): Observable<any> {
    console.log(`getting posts - log from jsonplaceholder service`);
    return this.http.get<any>(`${this.apiURL}posts`);
  }
}
