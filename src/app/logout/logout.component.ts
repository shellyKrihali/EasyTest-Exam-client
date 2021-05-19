import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../services/account.service';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  handIcon = faHandshake;

  constructor(private service: AccountService, private router: Router,private cookieService: CookieService) {

   }

  ngOnInit(): void {
 //this.service.logOut(courseAppId);
 this.service.getExamsDetiels().then((exam)=>{
   console.log(exam.course._id);
   this.service.logOut(exam.course._id);
 });
  //
  //console.log(this.timer.courseAppId+"--------------");
    console.log("In logout component");
    /*this.cookieService.delete("user");
    this.cookieService.delete("token");*/
  }

}
