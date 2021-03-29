import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  collapsed = true;
  imagePath: string;
  headerEmail: string;
  fileSearch: string;
  user: User;

  @Output() messageEvent = new EventEmitter<string>();


  constructor(private service: AccountService, private router: Router, private cookieService: CookieService) {

   }

  ngOnInit(): void {
  }
  getLoggedUser() {
    const isAuth = this.cookieService.check("user");
    if (isAuth) {
      this.user = this.service.user;
      return true;
    } else {
      return false;
    }
  }
  sendMessage() {
    this.messageEvent.emit("sec")
  }

  logOut() {
    console.log("Log Out");
    this.cookieService.delete("user");
    this.cookieService.delete("token");
    //this.router.navigate(['/login']);
    this.router.navigate(['/logout']);
  }
}
