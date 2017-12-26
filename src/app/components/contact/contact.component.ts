import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public sampleForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.sampleForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      whatcanidoforyou: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    console.log('Form successful submit.');
    console.log(this.sampleForm.value);
  }

  showResponse(response) {
    //call to a backend to verify against recaptcha with private key
    console.log('Show Response Called');
}
}
