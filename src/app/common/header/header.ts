import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';
import {UserDropdown} from '../user-dropdown/user-dropdown';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
    UserDropdown
  ],
  templateUrl: './header.html',
  styles: ``
})
export class Header {
  isSidebarPinned = input.required<boolean>();

  isDropdownActive: boolean = false;

  setDropdownClick(): void {
    this.isDropdownActive = !this.isDropdownActive;
  }

  toggleFullscreen() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  breadcrumbMap: Record<string, string> = {
    '/dashboard': 'Dashboards',
    '/crm': 'CRM',
    '/factory': 'Factory',

    '/schedules': 'Schedules',
    '/chat': 'Chat',

    '/users': 'Users',
    '/add-user': 'Add User',
    '/users-departments': 'Users Departments',

    '/agents': 'Agents',
    '/add-agent': 'Add Agent',
    '/agents-departments': 'Agents Departments',

    '/agencies': 'Agencies',
    '/add-agency': 'Add Agency',
    '/agencies-departments': 'Agencies Departments',

    '/categories': 'Categories',

    '/properties': 'Properties',
    '/property/details/': 'property-details',

    '/add-properties': 'Add Properties',
    '/Reviews': 'reviews',

    '/user-login': 'Login',
    '/user-register': 'Register',
    '/change-password': 'Change Password',

    '/profile-info': 'Profile Info',
    '/email-settings': 'Email Settings',
    '/security': 'Security',
    '/preferences': 'Preferences',
  };
}
