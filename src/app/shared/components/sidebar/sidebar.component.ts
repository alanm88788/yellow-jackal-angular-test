import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('acc') acc: any;
  showSidebar = true;
  activePanel = 'summary';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/login' || val.urlAfterRedirects === '/login') {
          this.showSidebar = false;
        } else {
          this.showSidebar = true;
        }
      }
    });
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'summary') {
      this.router.navigateByUrl('dashboard');
    }
  }

  navigateTo(route: string): void {
    if (route === 'home') {
      this.router.navigateByUrl('dashboard');
    } else {
      this.router.navigateByUrl(`tickets/${route}`);
    }
  }
}
