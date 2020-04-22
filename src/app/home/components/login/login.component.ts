import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  activeUser: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.authService.currentUser.subscribe(value => this.activeUser = value);
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  submitForm() {
    const credentials = this.authForm.value;
    this.authService.login(credentials.email, credentials.password);
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }
}
