import { Routes } from '@angular/router';
import { PostsComponent } from './Components/posts/posts.component';
import { PostsDetailsComponent } from './Components/posts-details/posts-details.component';
import { ErrComponent } from './Components/err/err.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'postsDetails/:id', component: PostsDetailsComponent },
  { path: '**', component: ErrComponent },
];
