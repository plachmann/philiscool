import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message } from "primeng/components/common/api";
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:  [ConfirmationService]
})
export class HomeComponent implements OnInit {
    public items: Observable<any[]>;
  ngOnInit() {
  }
  name: string;
  userResponse: Message[]=[];
  theUserSaid: string;


  constructor(db: AngularFirestore, private confirmationService: ConfirmationService) {
    this.items = db.collection('log').valueChanges();
}

  onChangeEvent({target}){
      this.name = target.value;
  }

  greetMe(){

      this.confirmationService.confirm({
          message: ` Hey ${this.name}, do you like PrimeNG?`,
          header: 'Greeting',
          icon: 'fa fa-question-circle',
          accept: () => {
              this.userResponse = [];
              this.userResponse.push({severity:"info", summary:'Confirmed', 
                                    detail:'I like PrimeNG'});
              this.theUserSaid = this.name + " responded " + 
                                   this.userResponse[0].detail;
          },
          reject: () => {
              this.userResponse = [];
              this.userResponse.push({severity:'info', summary:'Rejected', 
                    detail:'I don\'t really like PrimeNG'});
              this.theUserSaid = this.name + " responded " +
                        this.userResponse[0].detail;
          }
      });
  }
}
