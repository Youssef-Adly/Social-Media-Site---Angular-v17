import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, RouterModule, SlicePipe],
  providers: [HttpService],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: any;
  users: any;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getAllPosts().subscribe({
      next: (data) => (this.posts = data),
      error: (err) => console.log(err),
    });
  }
}
