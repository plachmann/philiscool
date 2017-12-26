import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  InputTextModule,
  ButtonModule,
  ConfirmDialogModule,
  MenubarModule,
  InputTextareaModule,
  CaptchaModule,
  PanelModule,
  EditorModule
} from "primeng/primeng";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { ContactComponent } from "./components/contact/contact.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EditblogComponent } from './components/editblog/editblog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, EditblogComponent],
  imports: [
    BrowserModule,
    InputTextModule,
    InputTextareaModule,
    BrowserModule,
    ReactiveFormsModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MenubarModule,
    CaptchaModule,
    FormsModule,
    PanelModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
