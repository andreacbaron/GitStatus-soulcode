import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
