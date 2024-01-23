import { Component, TemplateRef } from '@angular/core';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faEllipsis,
  faHouse,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/shared/modal.service';

@Component({
  selector: 'app-side-header',
  templateUrl: './side-header.component.html',
  styleUrls: ['./side-header.component.css'],
})
export class SideHeaderComponent {
  twitterIcon = faXTwitter;
  homeIcon = faHouse;
  searchIcon = faSearch;
  userIcon = faUser;
  ellipsisIcon = faEllipsis;

  constructor(private modalService: ModalService) {}

  openModal(modalTemplate: TemplateRef<any>): void {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Foo' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
