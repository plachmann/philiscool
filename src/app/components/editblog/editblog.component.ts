import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-editblog",
  templateUrl: "./editblog.component.html",
  styleUrls: ["./editblog.component.scss"]
})
export class EditblogComponent implements OnInit {
  public content: string;
  public title: string;
  public display = false;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.content = "";
    this.title = "";
  }

  public onSave() {
    let updated = new Date();
    // Add a new document with a generated id.
    var newCityRef = this.db
      .collection("blogposts")
      .add({
        title: this.title,
        content: this.content,
        createDate: updated,
        updateDate: updated
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        this.toggleDisplay();
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  private toggleDisplay() {
    this.display = !this.display;
  }
}

