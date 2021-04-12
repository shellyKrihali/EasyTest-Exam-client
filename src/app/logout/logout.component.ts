import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  confirmationNumber : String;

  constructor(private router: Router,private cookieService: CookieService) {

   }

  ngOnInit(): void {
    //this.confirmationNumber= web confirmation number
    console.log("In logout component");
    this.cookieService.delete("user");
    this.cookieService.delete("token");
  }
login(){
  this.router.navigate(['/login']);
}
}
