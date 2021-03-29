import { Component, OnInit  } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';
import { ExamIsOverDialogComponent } from './exam-is-over-dialog/exam-is-over-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  private subscription: Subscription;
  
    public dateNow = new Date();
    public dDay //= new Date('Jan 01 2021 00:00:00');//examDateAenddate or examDateBenddate
    optionA;
    optionB;
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference;
    public secondsToDday;
    public minutesToDday;
    public hoursToDday;
    public daysToDday;

    private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}
  constructor(    
     service: AccountService, private router: Router, public dialog: MatDialog,private cookieService: CookieService) { 
       this.optionA = service.examA;//TODO retrive examA from the service properly+ add 3hours to examA to match the datenow
       console.log(service.examA+"exam A timer");
      this.optionB=service.examB;
      if(this.dateNow.getDay==this.optionA.getDay){
        this.dDay=this.add_minutes(this.optionA, service.duration);
        console.log(this.dDay+"exam A finale timer");
      }
      else{
        this.dDay=this.add_minutes(this.optionB, 180);
        console.log(service.examA+"exam B finale timer");
      }

      this.hoursToDday=0;
      this.minutesToDday=0;
      this.secondsToDday=0;
      if(this.hoursToDday==0 && this.minutesToDday==0 && this.secondsToDday==0){
        this.openDialog();//popup window the exam is over, Good Luck!

      }
    }
  add_minutes(dt, minutes){
    //this.parseDate(dt);
    return new Date(dt.getTime()+minutes*60000);
  }
 /* // parse a date in yyyy-mm-dd format
 parseDate(input) {
  var parts = input.match(/(\d+)/g);
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}
*/
  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
  }
  
 openDialog(): void {
  const timeout = 5000;
  const dialogRef = this.dialog.open(ExamIsOverDialogComponent, {
    width: '250px',
    data: {}
  });
  dialogRef.afterOpened().subscribe(_ => {
    setTimeout(() => {
       dialogRef.close();
    }, timeout)
  });
  this.logOut();
  
}
logOut() {
  console.log("Log Out");
  this.cookieService.delete("user");
  this.cookieService.delete("token");
  //this.router.navigate(['/login']);
  this.router.navigate(['/logout']);
}


}
