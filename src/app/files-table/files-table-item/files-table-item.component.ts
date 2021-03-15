import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import { Summary } from 'src/app/models/summary';
import { AccountService } from 'src/app/services/account.service';
import * as AOS from 'aos';

@Component({
  selector: 'files-table-item',
  templateUrl: './files-table-item.component.html',
  styleUrls: ['./files-table-item.component.css']
})
export class FilesTableItemComponent implements OnInit {

  @Input() file: Summary;
  card: Card;
  currentRate: number;
  url: string;
  icons: string[] = [];

  constructor(private router: Router,
    private service: AccountService) { }

  ngOnInit(): void {
    this.url = this.file.pathUrl;

    AOS.init({
      offset: 0,
      delay: 0, 
      duration: 800,
      debounceDelay: 50,
      once: false,  
      mirror: true, 

    });

    this.card = new Card(
      ["read more"], "simaster A 2019", this.icons, this.url
      , this.file.title,
      this.file.title
    );
  }
  showFile() {
    // this.fileService.currentFileDisplied = this.summary;
    // this.router.navigate(['/file', this.summary._id]);
  }
  addToDirectory() {
    //this.directoryService.addFileToExamDirectory()

  }

}
