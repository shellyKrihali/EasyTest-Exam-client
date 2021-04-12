import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {

  dialogRef:MatDialogRef<ConfirmationDialogComponent>

  collapsed = true;
  imagePath: string;
  headerEmail: string;
  fileSearch: string;
  user: User;

  @Output() messageEvent = new EventEmitter<string>();


  constructor(private service: AccountService, private router: Router, private cookieService: CookieService, public dialog:MatDialog) {

   }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
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
  openConfirmationDialog(){
    this.dialogRef=this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage="are you sure you want to leave your exam?"
    this.dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.logOut();
      }
      this.dialogRef=null;
    });

  }
  logOut() {
    console.log("Log Out");
    this.cookieService.delete("user");
    this.cookieService.delete("token");
    //this.router.navigate(['/login']);
    this.router.navigate(['/logout']);
  }
}
