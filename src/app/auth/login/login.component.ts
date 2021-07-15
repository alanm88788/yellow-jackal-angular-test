import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isSubmitted = false;

  get formControls() {
    return this.userForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this.isSubmitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.authService.login(this.userForm.value);
    this.router.navigateByUrl('/dashboard');

    this.userForm.reset();
  }
}
