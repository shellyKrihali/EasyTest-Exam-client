import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-exam-not-found-dialog',
  templateUrl: './exam-not-found-dialog.component.html',
  styleUrls: ['./exam-not-found-dialog.component.css']
})
export class ExamNotFoundDialogComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private service: AccountService,
    private cookieServise: CookieService,
  ) { }
  
  ngOnInit(): void {
    this.user = this.service.user;
    this.logOut();
  }
  close() {
    this.router.navigate(['/login']);

}
public logOut() {
  this.cookieServise.delete("user");
  this.cookieServise.delete("token");
}


}
