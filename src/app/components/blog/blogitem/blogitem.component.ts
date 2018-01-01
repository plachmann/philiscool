import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../../shared/models/blogpost';

@Component({
  selector: 'blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.scss']
})
export class BlogitemComponent implements OnInit {
  @Input()  post: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
