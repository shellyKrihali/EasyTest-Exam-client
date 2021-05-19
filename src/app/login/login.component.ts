import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from '../models/user'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

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
    public service: AccountService,
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

    
    this.service.login(email, password)
    .then(() => {
      console.log(this.service.isValid);
      if (this.service.isValid==true)
      this.gotoHome();
      else
        this.serverErr = this.service.serverErr;
      
    });
    
    this.isValid=this.service.isValid;
  }
  logOut() {
    console.log("Log Out");
    /*this.cookieService.delete("user");
    this.cookieService.delete("token");*/
    this.router.navigate(['/logout']);
  }
  gotoHome() {
    this.router.navigate(['/home']);
  }

}
