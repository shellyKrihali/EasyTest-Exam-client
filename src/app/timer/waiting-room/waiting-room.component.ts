import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Subscription, interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent implements OnInit , OnDestroy{
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
  if(this.hoursToDday<=0 && this.minutesToDday<=0 && this.secondsToDday<=0){
    this.router.navigate(['/home']);
  }
}

constructor( private service: AccountService, private router: Router) {

   }

   ngOnInit(): void {
    this.service.getExamsDetiels().catch((err)=>{
      console.log("waitingroom error");
    }).then((exam)=>{
      this.optionA=new Date(exam.course.exams.exam);
      this.optionB=new Date(exam.course.exams.remake);
      if(this.dateNow.getDay==this.optionA.getDay){
        this.dDay=this.optionA;
        console.log(this.dDay+"exam A finale timer");
      }
      else{
        this.dDay=this.optionB;
        console.log(this.service.examA+"exam B finale timer");
      }
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });})
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
 }

}
