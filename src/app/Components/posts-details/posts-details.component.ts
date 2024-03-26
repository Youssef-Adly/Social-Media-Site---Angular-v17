import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpService } from '../../Services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-posts-details',
  standalone: true,
  imports: [HttpClientModule, RouterModule, UpperCasePipe, LowerCasePipe],
  providers: [HttpService],
  templateUrl: './posts-details.component.html',
  styleUrl: './posts-details.component.css',
})
export class PostsDetailsComponent implements OnInit {
  id: any;
  post: { userId: number; id: number; title: string; body: string; } | undefined;
  comments: any;
  constructor(private AR: ActivatedRoute, private http: HttpService) {}
  ngOnInit() {
    // Get Id From url
    this.AR.params.subscribe({
      next: (id: any) => {
        this.id = id.id;
        console.log(this.id);
      },
      error: (err: any) => console.log(err),
    });
    // Get Post By ID
    this.http.getPostById(this.id).subscribe({
      next: (data: any) => {
        this.post = data;
        console.log(this.post);
      },
      error: (err: any) => console.log(err),
    });
    // Get Post Comments
    this.http.getAllPostComments(this.id).subscribe({
      next: (comments) => {
        this.comments = comments;
        console.log(this.comments);
      },
      error: (err) => console.log(err),
    });
  }
}
