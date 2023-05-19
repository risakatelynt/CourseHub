import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signupForm: FormGroup;
  submitted = false;
  toggle = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword(pwd: any) {
    this.toggle = !this.toggle;
  }
  signup() {
    this.submitted = true;
    if (this.signupForm.valid) {
      localStorage.setItem('signup', JSON.stringify(this.signupForm.value));
      this.router.navigate(['/notes']);
    }
  }

}
