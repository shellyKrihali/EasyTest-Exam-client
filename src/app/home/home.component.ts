import { Component, OnInit } from '@angular/core';
import { Summary } from '../models/summary';
import { AccountService } from '../services/account.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  files: Summary[] = [];  //searchKeyWord: string;//search for summary in here
  private sub: Subscription;
  public isValid;
  constructor(private service: AccountService,private router: Router) { 
  }

  ngOnInit(): void {
    this.isValid=this.service.isValid;
  //   this.service.getExamsDetiels().then(exam => {
     
  //     this.files =  exam.directory.summaries; 
  //     //this.duration=exam.course.exams.duration;//once Bar adds it to server
  // }).catch(err => {
  //     console.log("there is no exam nearby");
  //     this.router.navigate(['/exam-not-found']);
  // })
  }
  onSearchSummary(){

  }
}
