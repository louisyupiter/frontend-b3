import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model'
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: 'First Post', content: "This is the first post"},
  //   {title: 'Second Post', content: "This is the second post"},
  //   {title: 'Third Post', content: "This is the third post"}
  // ]

  posts: Post[] = [];
  isLoading = false;
  totalPost = 0;
  postPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10]
  private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts(this.postPerPage, 1);
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((postData: { posts: Post[], postCount: number}) => {
      this.isLoading = false;
      this.totalPost = postData.postCount;
      this.posts = postData.posts;
    });
  }

  onChangedPage(pageData: PageEvent){
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postPerPage = pageData.pageSize;
    this.postsService.getPosts(this.postPerPage, this.currentPage);
  }

  onDelete(postId: string){
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postPerPage, this.currentPage)
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
