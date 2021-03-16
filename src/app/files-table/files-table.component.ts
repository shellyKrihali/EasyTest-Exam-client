import { Component, OnInit } from '@angular/core';
import { Summary } from '../models/summary';
import { AccountService } from '../services/account.service';
//import {}
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})
export class FilesTableComponent implements OnInit {

  files: Summary[] = [];
  element: Element;
  page: number = 0;
  pages: number[] = [];
  public courseName: String;

  name: string;
  private sub: Subscription;

  constructor( private router: ActivatedRoute
    , private service: AccountService) {
    this.sub = service.summariesSub.subscribe((value) => {
      this.files = value;
    });
    this.courseName=service.courseName;
  }


  ngOnInit(): void {
  }


}
