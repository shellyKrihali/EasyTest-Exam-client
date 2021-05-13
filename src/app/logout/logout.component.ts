import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  handIcon = faHandshake;

  constructor(private router: Router,private cookieService: CookieService) {

   }

  ngOnInit(): void {
    console.log("In logout component");
    this.cookieService.delete("user");
    this.cookieService.delete("token");
  }

}
