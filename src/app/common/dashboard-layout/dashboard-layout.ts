import { Component } from '@angular/core';
import {Header} from '../header/header';
import {NgClass} from '@angular/common';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    Header,
    NgClass,
    Sidebar
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
