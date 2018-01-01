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
  EditorModule,
  DialogModule
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
import { BlogpostService } from "./services/blogpost.service";
import { BlogComponent } from './components/blog/blog.component';
import { BlogitemComponent } from './components/blog/blogitem/blogitem.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, EditblogComponent, BlogComponent, BlogitemComponent],
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
    EditorModule,
    DialogModule
  ],
  providers: [BlogpostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
