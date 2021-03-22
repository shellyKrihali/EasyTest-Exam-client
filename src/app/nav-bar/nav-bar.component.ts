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
    ////once Bar adds duration to server
    /*var currentDate=  new Date();
  
    var finishExamA= new Date(this.service.examA.getTime()+(this.service.duration * 60 * 1000));
    var finishExamB= new Date(this.service.examB.getTime()+(this.service.duration * 60 * 1000));

    if(currentDate> finishExamA || currentDate> finishExamB){
      this.router.navigate(['/logout']);
      //also add pop up window that the exam is over
    }
    */
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
    //TODO add logout page, with page logout confirmation
    //this.router.navigate(['/login']);
    this.router.navigate(['/logout']);
  }
}
