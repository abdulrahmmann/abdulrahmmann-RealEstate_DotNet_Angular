import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {Header} from '../header/header';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    Sidebar,
    Header,
    NgClass
  ],
  templateUrl: './dashboard-layout.html',
  styles: ``
})
export class DashboardLayout {
  isSidebarPinned: boolean = false;

  handleSidebarPin(isPinned: boolean) {
    this.isSidebarPinned = isPinned;
  }
}
