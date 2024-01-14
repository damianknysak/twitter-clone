import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeSection: string = "for-you";

  changeSection(section: string) {
    this.activeSection = section; 
  }
}
