import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'

import { PostListComponent } from './posts/post-list/post-list.component'
import { PostCreateComponent } from './posts/post-create/post-create.component'

const routes: Routes = [
 { path: "", component: PostListComponent },
 { path: "create", component: PostCreateComponent },
 { path: "edit/:postId", component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
