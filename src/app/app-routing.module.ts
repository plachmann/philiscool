import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { SkillsComponent } from './skills/skills.component';
import { SonglistComponent } from './pheve/songlist/songlist.component';
import { AddComponent } from './pheve/songlist/add/add.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: WelcomeComponent },
  { path: 'pheve/songlist', component: SonglistComponent},
  { path: 'pheve/songlist/add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
