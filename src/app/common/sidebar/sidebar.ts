import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {SidebarItems} from '../../constants/index.constants';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    NgClass,
    ScrollPanelModule,
    NgIf,
  ],
  templateUrl: './sidebar.html',
  styles: ``
})
export class Sidebar implements OnInit{
  private router = inject(Router);

    // sidebar items data
  protected readonly sidebarItems = SidebarItems;

  // sidebar item active clicked
  isHovered: boolean = false;
  isPinned: boolean = false;
  activeId: number = 1;

  @Output() pinnedChange = new EventEmitter<boolean>();


  getActiveIdFromRoute(): number | null {
    // const currentUrl = this.router.url;
    // const matchedItem = this.sidebarItems
    //   .find(item => currentUrl.includes(''));
    // return matchedItem?.Id ?? null;
    return 1;
  }

  ngOnInit(): void {
    this.activeId = this.getActiveIdFromRoute() ?? 1;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeId = this.getActiveIdFromRoute() ?? 1;
      }
    });
  }

  setActive(item: any) {
    this.router.navigate!([item.route]);
    this.activeId = item.Id;
  }

  togglePin() {
    this.isPinned = !this.isPinned;
    this.pinnedChange.emit(this.isPinned);
  }

  get sidebarExpanded(): boolean {
    return this.isPinned || this.isHovered;
  }

}
