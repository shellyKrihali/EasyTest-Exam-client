import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exam-is-over-dialog',
  templateUrl: './exam-is-over-dialog.component.html',
  styleUrls: ['./exam-is-over-dialog.component.css']
})
export class ExamIsOverDialogComponent implements OnInit {
  hourglassEndIcon = faHourglassEnd;

  constructor(
    public dialogRef: MatDialogRef<ExamIsOverDialogComponent> ) {}

  
  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
