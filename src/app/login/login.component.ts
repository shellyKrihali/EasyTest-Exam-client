import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user'
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { ExamNotFoundDialogComponent } from './exam-not-found-dialog/exam-not-found-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  serverErr: string;
  isValid: boolean = true;
  loginForm = this.fb.group({
    email: ['', { validators: [Validators.required, Validators.email] }

  ],
  password: ['', { validators: [Validators.required, Validators.minLength(5)] }],
});
  constructor(

    private router: Router,
    private service: AccountService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.cookieService.delete("user");
    this.cookieService.delete("token");
    this.user = this.service.user;
    //alert(navigator.userAgent);
  }

  onSubmitLogIn() {

const email = this.loginForm.get('email').value;
const password = this.loginForm.get('password').value;

    
    this.isValid = true;
    this.service.login(email, password)
    .catch((err: HttpErrorResponse) => {
      //this.serverErr = err.error.message;
     // console.log('An error occurred:', err.error);
     //console.log("there is no exam nearby");
     //this.router.navigate(['/']);
     //this.openDialog();
      //this.serverErr = err.error.message;
      this.isValid = false;
      this.router.navigate(['/login']);
    }).then(() => {
      if (this.isValid==true)
      this.gotoHome();
    });
  }
  openDialog(): void {

    this.router.navigate(['/exam-not-found']);
    
  }
  logOut() {
    console.log("Log Out");
    this.cookieService.delete("user");
    this.cookieService.delete("token");
    this.router.navigate(['/logout']);
  }
  gotoHome() {
    this.router.navigate(['/home']);
  }

  isValidEmailCheack() { return this.isValid }
}
