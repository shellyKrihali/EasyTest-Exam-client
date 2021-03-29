import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  confirmationNumber : String;

  constructor(private router: Router) {
    console.log("In logoutcomponent");

   }

  ngOnInit(): void {
    //this.confirmationNumber= web confirmation number
  }
login(){
  this.router.navigate(['/login']);
}
}
