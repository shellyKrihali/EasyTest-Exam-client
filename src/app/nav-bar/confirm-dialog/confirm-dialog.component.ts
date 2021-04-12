import { Component,Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  public confirmMessage:string;
  constructor(public dialogRef:MatDialogRef<ConfirmationDialogComponent>) { }


  ngOnInit(): void {
  }

}
