import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { EditblogComponent } from "./components/editblog/editblog.component";
import { BlogComponent } from "./components/blog/blog.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "admin/editblog",
    component: EditblogComponent
  },
  {
    path: "blog",
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}