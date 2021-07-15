import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {
  parent = '';
  child = '';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const routeStrArray = val.url.split('/');
        if (val.url === '/dashboard') {
          this.parent = 'Dashboard';
          this.child = 'SUMMARY';
        } else {
          this.child = routeStrArray[routeStrArray.length - 1];
          this.parent = routeStrArray[routeStrArray.length - 2];
        }
      }
    });
  }

  ngOnInit(): void {}
}
