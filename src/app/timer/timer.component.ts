import { Component, OnInit  } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';
import { ExamIsOverDialogComponent } from './exam-is-over-dialog/exam-is-over-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { AlreadyLoggedUserDialogComponent } from './already-logged-user-dialog/already-logged-user-dialog.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  dialogRef:MatDialogRef<AlreadyLoggedUserDialogComponent>

  private subscription: Subscription;
    public dateNow = new Date();
    public dDay 
    optionA;
    optionB;
    duration;
    isloggedin;
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
    if(this.hoursToDday==0 && this.minutesToDday==0 && this.secondsToDday==0){
      this.openDialog();//popup window the exam is over, Good Luck!
    }
}
  constructor(    
    private service: AccountService, private router: Router, public dialog: MatDialog,private cookieService: CookieService)
     { }
  add_minutes(dt, minutes){
    return new Date(dt.getTime()+minutes*60000);
  }

  ngOnInit(): void {
    this.service.getExamsDetiels().then((exam)=>{

      this.optionA=new Date(exam.course.exams.exam);
      this.optionB=new Date(exam.course.exams.remake);
      this.duration=exam.course.exams.duration;

      console.log(this.duration+" duration");
      console.log(this.optionA+" exam A timer");

      exam.course.students.forEach(element => {
        console.log(element._id);

        if(element._id == this.service.user._id)
            this.isloggedin=element.loggedIn;
            console.log(element.loggedIn);
            this.service.loginWithCourse(exam.course._id);
           if(element.loggedIn){
             this.openUserAlreadyLoggedInDialog();
              this.router.navigate(['/login']);
              console.log("unauthorized user, user already logged in the system");//add new component "unauthorized user, user already logged in the system"
            }
      });
      if(this.dateNow.getDay==this.optionA.getDay){
        if(this.optionA.getTime()>this.dateNow.getTime()){
          console.log("waitingroom");
          this.router.navigate(['/waiting-room']);
        }
        this.dDay=this.add_minutes(this.optionA, this.duration);
        console.log(this.dDay+"exam A finale timer");
        if(this.dDay.getTime()<this.dateNow.getTime()){
          console.log("exam not found already over");
          this.router.navigate(['/exam-not-found']);
        }
      }
      else{
        if(this.optionB.getTime()>this.dateNow.getTime()){
          console.log("waitingroom");
          this.router.navigate(['/waiting-room']);
        }
        this.dDay=this.add_minutes(this.optionB, this.duration);
        console.log(this.service.examA+"exam B finale timer");
      } 
      if(this.dDay.getTime()<this.dateNow.getTime()){
        //this.openDialog();
      }
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });

     }).catch((err)=>{
       console.log("timer error");
     })
  }
  
 openDialog(): void {
  const timeout = 10000;
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
  /*this.cookieService.delete("user");
  this.cookieService.delete("token");*/
  this.router.navigate(['/logout']);
}
openUserAlreadyLoggedInDialog(){
  this.dialogRef=this.dialog.open(AlreadyLoggedUserDialogComponent, {
    disableClose:false
  });
  this.dialogRef.afterClosed().subscribe(result=> {
    if(result)
      this.logOut();
    this.dialogRef=null;
  })
}

}
