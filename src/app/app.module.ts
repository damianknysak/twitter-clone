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
import { PostComponent } from './components/shared/posts/post/post.component';
import { PostsComponent } from './components/shared/posts/posts.component';
import { HomeNavigationComponent } from './components/main-section/home/home-navigation/home-navigation.component';
import { AddPostComponent } from './components/main-section/home/add-post/add-post.component';
import { WhoToFollowComponent } from './components/side-panel/who-to-follow/who-to-follow.component';
import { TrendsComponent } from './components/side-panel/trends/trends.component';
import { SearchPanelComponent } from './components/side-panel/search-panel/search-panel.component';
import { TrendsForYouComponent } from './components/main-section/explore/trends-for-you/trends-for-you.component';
import { SearchPanelExploreComponent } from './components/main-section/explore/search-panel-explore/search-panel-explore.component';

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
    PostsComponent,
    HomeNavigationComponent,
    AddPostComponent,
    WhoToFollowComponent,
    TrendsComponent,
    SearchPanelComponent,
    TrendsForYouComponent,
    SearchPanelExploreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
