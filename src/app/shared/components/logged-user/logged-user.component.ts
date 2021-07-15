import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss'],
})
export class LoggedUserComponent implements OnInit {
  firstName = 'John';
  lastName = 'Doe';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('');
  }
}
