import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilePipePipe } from './file-pipe.pipe';
import { SafePipe } from './helpers/SafePipe';
import {
  IgxDropDownModule, IgxButtonModule, IgxToggleModule
  , IgxCardModule, IgxRippleModule, IgxIconModule
} from "igniteui-angular";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MAT_DIALOG_DEFAULT_OPTIONS,MAT_DIALOG_DATA} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesTableItemComponent } from './files-table/files-table-item/files-table-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { FilesComponent } from './files/files.component';
import { FileDisplayComponent } from './files/file-display/file-display.component';
import { LogoutComponent } from './logout/logout.component';
import { TimerComponent } from './timer/timer.component';
import { WaitingRoomComponent } from './timer/waiting-room/waiting-room.component';
import { ExamIsOverDialogComponent } from './timer/exam-is-over-dialog/exam-is-over-dialog.component';
import { ExamNotFoundDialogComponent } from './login/exam-not-found-dialog/exam-not-found-dialog.component';
import { ConfirmationDialogComponent } from './nav-bar/confirm-dialog/confirm-dialog.component'

const dialogMock = {
  close: (dialogRef: MatDialogRef<ExamNotFoundDialogComponent>) => { 
    console.log("heloo");
  }
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilesTableComponent,
    FilesTableItemComponent,
    NavBarComponent,
    LoginComponent,
    SafePipe,
    FilePipePipe,
    FilesComponent,
    FileDisplayComponent,
    LogoutComponent,
    TimerComponent,
    WaitingRoomComponent,
    ExamIsOverDialogComponent,
    ExamNotFoundDialogComponent,
    ConfirmationDialogComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    IgxDropDownModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxCardModule,
    IgxRippleModule,
    IgxIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    ExamIsOverDialogComponent,
//ExamNotFoundDialogComponent,
ConfirmationDialogComponent  ],
  providers: [//{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},//check if nessesary
    {
    provide: MatDialogRef,
    useValue: dialogMock
  }, { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
