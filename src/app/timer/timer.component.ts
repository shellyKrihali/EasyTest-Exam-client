import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit,OnDestroy  {

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
    private service: AccountService) { 
       this.optionA = service.examA;
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
    }
  add_minutes(dt, minutes){
    return new Date(dt.getTime()+minutes*60000);
  }
  ngOnInit(): void {
    this.subscription = interval(1000)
    .subscribe(x => { this.getTimeDifference(); });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
 }
}
