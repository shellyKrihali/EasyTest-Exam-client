import { Component, OnInit } from '@angular/core';
import { Summary } from '../models/summary';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  summaries: Summary[] = [];
  searchKeyWord: string;//search for summary in here
  constructor(private service: AccountService) { }

  ngOnInit(): void {
  }
  onSearchSummary(){

  }
}
