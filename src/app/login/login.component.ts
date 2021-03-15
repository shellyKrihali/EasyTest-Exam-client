import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  isValidDetails: Boolean;

  constructor(

    private router: Router,
    private service: AccountService,
  ) { }

  ngOnInit(): void {
    this.isValidDetails = true;
  }

  onSubmitLogIn() {
    this.isValidDetails = true;

    this.service.login(this.email, this.password).catch((err: HttpErrorResponse) => {
      console.log('An error occurred:', err.error);
      this.isValidDetails = false;
    }).then(() => {
      if (this.isValidDetails)
        this.gotoHome();
    });

  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

  isValidEmailCheack() { return this.isValidDetails }
}
