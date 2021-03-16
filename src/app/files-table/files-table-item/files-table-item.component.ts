import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import { Summary } from 'src/app/models/summary';
import { AccountService } from 'src/app/services/account.service';
import { Subscription } from 'rxjs';

import * as AOS from 'aos';
import { FileService } from 'src/app/services/file.service';

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
  private fileId: string;
  private subscription: Subscription;
  constructor(private router: Router,private route: ActivatedRoute,
    private service: AccountService,private fileService:FileService) { 
      //this.subscription = route.parent.params.subscribe(
       // (param: any) => this.fileId = param['id']
      //);
    }

  ngOnInit(): void {
    //this.url = this.file.pathUrl;
    this.url=this.file.pathUrl;
    
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
   /* console.log(this.fileId);
    this.fileService.getFilesFullDetailes(this.fileId).then(json => {
      console.log("re");
      console.log(json);
      this.file = json.summary;


      this.url = this.file.pathUrl;
    });*/
  }
  
  showFile() {
    this.fileService.currentFileDisplied = this.file;
    this.router.navigate(['/file',this.file._id]);
  }
  

}
