import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {SidebarItems} from '../../constants/index.constants';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    NgClass,
    ScrollPanelModule,
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
    const currentUrl = this.router.url;
    for (const group of this.sidebarItems) {
      const matchedItem = group.items.find(item => currentUrl.includes(item.route));
      if (matchedItem) {
        return matchedItem.Id;
      }
    }
    return null;
  }

  ngOnInit(): void {
    this.activeId = this.getActiveIdFromRoute() ?? 1;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeId = this.getActiveIdFromRoute() ?? 1;
      }
    });
  }

  setActive(item: any): void {
    this.router.navigate([item.route]);
    this.activeId = item.Id;
  }


  togglePin(): void {
    this.isPinned = !this.isPinned;
    this.pinnedChange.emit(this.isPinned);
  }

  get sidebarExpanded(): boolean {
    return this.isPinned || this.isHovered;
  }

}
