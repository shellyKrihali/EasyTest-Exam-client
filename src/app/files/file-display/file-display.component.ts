import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-display',
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.css']
})
export class FileDisplayComponent implements OnInit {
  url: string;
  summary: Summary;
  fileId: string;
  private subscription: Subscription;
  constructor( private route: ActivatedRoute, private fileService: FileService) {
    this.subscription = route.parent.params.subscribe(
      (param: any) => this.fileId = param['id']
    );
   }

  ngOnInit(): void {
    console.log(this.fileId);
    this.fileService.getFilesFullDetailes(this.fileId).then(json => {
      console.log("re");
      console.log(json);
      this.summary = json.summary;


      this.url = this.summary.pathUrl;
    });
  }


}
