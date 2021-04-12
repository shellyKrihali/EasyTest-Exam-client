import { Component,Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-exam-is-over-dialog',
  templateUrl: './exam-is-over-dialog.component.html',
  styleUrls: ['./exam-is-over-dialog.component.css']
})
export class ExamIsOverDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExamIsOverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) {}

  
  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
