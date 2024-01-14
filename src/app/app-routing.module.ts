import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './components/main-section-components/explore/explore.component';
import { HomeComponent } from './components/main-section-components/home/home.component';
import { ProfileComponent } from './components/main-section-components/profile/profile.component';

const routes: Routes = [
  {path: "",
  component: HomeComponent},
  {path: "explore",
  component: ExploreComponent},
  {path: "profile",
  component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
