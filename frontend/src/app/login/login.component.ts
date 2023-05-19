import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  toggle = false;

  constructor(private fb: FormBuilder,  private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePassword(pwd: any) {
    this.toggle = !this.toggle;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(localStorage.getItem('signup'));
      this.router.navigate(['/notes']);
    }
  }
}
