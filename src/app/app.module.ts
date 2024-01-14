import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { SideHeaderComponent } from './components/side-header/side-header.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/main-section-components/home/home.component';
import { ExploreComponent } from './components/main-section-components/explore/explore.component';
import { ProfileComponent } from './components/main-section-components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SideHeaderComponent,
    SidePanelComponent,
    HomeComponent,
    ExploreComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
