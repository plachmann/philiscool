import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../../services/blogpost.service';
import { Observable } from 'rxjs/Observable';
import { BlogPost } from '../../shared/models/blogpost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Observable<BlogPost[]>;

  constructor(private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.posts = this.blogpostService.returnAllBlogPosts();
  }

  
}
