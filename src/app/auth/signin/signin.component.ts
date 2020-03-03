import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private router : Router, private authService : AuthService) { }

  email : string;
  password : string;

  signinForm : FormGroup;

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }

  signIn() {
    this.email = this.signinForm.get('email').value;
    this.password = this.signinForm.get('password').value;
    this.authService.signInUser(this.email, this.password);
    this.router.navigate(['books']);
  }
}
