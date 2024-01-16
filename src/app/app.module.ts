import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SideHeaderComponent } from './components/side-header/side-header.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/main-section/home/home.component';
import { ExploreComponent } from './components/main-section/explore/explore.component';
import { ProfileComponent } from './components/main-section/profile/profile.component';
import { PostComponent } from './components/shared/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SideHeaderComponent,
    SidePanelComponent,
    HomeComponent,
    ExploreComponent,
    ProfileComponent,
    PostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
