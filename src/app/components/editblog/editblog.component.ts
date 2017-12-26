import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  public text1:string;

  constructor() { }

  ngOnInit() {
    /// this.text = "<h1>I love bacon!</h1><br><br><h2>And I like tomatoes.</h2>"
    this.text1 = "abc 123";
  }

}
