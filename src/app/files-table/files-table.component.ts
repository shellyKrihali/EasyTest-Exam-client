import { Component, OnInit } from '@angular/core';
import { Summary } from '../models/summary';
import { AccountService } from '../services/account.service';
//import {}
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})
export class FilesTableComponent implements OnInit {
  summariesSub: Subject<Summary[]> = new Subject<Summary[]>();
  public summaries: Summary[] = [];
  files: Summary[] = [];
  element: Element;
  page: number = 0;
  pages: number[] = [];
  public courseName: String;

  name: string;
  private sub: Subscription;

  constructor(private router: Router
    , private service: AccountService) {
     
  }


  ngOnInit(): void {
    /*this.summariesSub.subscribe((value) => {
      this.summaries = value;
    });*/
  this.courseName=this.service.courseName;

    this.service.getExamsDetiels().then((exam)=>{
      const summaries = exam.directory.summaries; 
      this.files = summaries;
      this.courseName=exam.course.name;
    }).catch(err => {
      if(this.service.isValid==true){ 
      console.log("there is no exam nearby");
      this.router.navigate(['/exam-not-found']);}
      else{
        console.log("invalid password");
        this.router.navigate(['/login']);
      }
         
       })
    // this.sub = this.service.summariesSub.subscribe((value) => {
    //   this.files = value;
    // });
  }


}
