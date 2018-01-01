import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BlogPost } from '../shared/models/blogpost';

@Injectable()
export class BlogpostService {

  // hot observable
  public posts: Observable<BlogPost[]>;

  constructor() { 
    this.posts = Observable.of([{title:"bp1",content:"content1"},{title:"bp2",content:"content2"},{title:"bp3",content:"content3"}])
  }

  public returnAllBlogPosts(): Observable<BlogPost[]> {
    return this.posts;
  }
}
