import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-already-logged-user-dialog',
  templateUrl: './already-logged-user-dialog.component.html',
  styleUrls: ['./already-logged-user-dialog.component.css']
})
export class AlreadyLoggedUserDialogComponent implements OnInit {

  constructor(   public dialogRef: MatDialogRef<AlreadyLoggedUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) { }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
