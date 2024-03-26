import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  private DBURL = 'https://jsonplaceholder.typicode.com/posts';
  private DBPOSTURL = 'https://jsonplaceholder.typicode.com/comments?postId=';

  getAllPosts() {
    return this.http.get(this.DBURL);
  }
  getPostById(id: any) {
    return this.http.get(this.DBURL + '/' + id);
  }
  getUsersByID(id: number) {
    return this.http.get(this.DBURL + '/' + id);
  }
  getAllPostComments(id: any) {
    return this.http.get(this.DBPOSTURL + id);
  }
}
