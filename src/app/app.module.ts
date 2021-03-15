import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/*import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';*/
//import { HeaderComponent } from './header/header.component';
//import { ExamsComponent } from './exams/exams.component';
//import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
//import { ExamListComponent } from './exams/exam-list/exam-list.component'
//import { ExamItemComponent } from './exams/exam-list/exam-item/exam-item.component'
import { ReactiveFormsModule } from '@angular/forms';

//import { MytestsComponent } from './mytests/mytests.component';
//import { TestListComponent } from './mytests/test-list/test-list.component';
//import { MyTestsComponent } from './my-tests/my-tests.component';
//import { TestListComponent } from './test-list/test-list.component';
import { HttpClientModule } from '@angular/common/http';
//import { UserRegistrationService } from './user-registration.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesTableItemComponent } from './files-table/files-table-item/files-table-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FilePipePipe } from './file-pipe.pipe';
import { SafePipe } from './helpers/SafePipe';
import { LoginComponent } from './login/login.component'
import {
  IgxDropDownModule, IgxButtonModule, IgxToggleModule
  , IgxCardModule, IgxRippleModule, IgxIconModule
} from "igniteui-angular";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
//import { LogInComponent } from './log-in/log-in.component';
//import { MainLogoComponent } from './main-logo/main-logo.component';
//import { SearchFilesComponent } from './search-files/search-files.component';
//import { UserItemComponent } from './search-files/user-item/user-item.component';
//import { FileUploaderComponent } from './file-uploader/file-uploader.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilesTableComponent,
    FilesTableItemComponent,
    NavBarComponent,
    LoginComponent,
    SafePipe,
    FilePipePipe
    //ServerComponent,
    //ServersComponent,
    //HeaderComponent,
    //ExamsComponent,
    //ReactiveFormsModule,

    //ExamDetailComponent,
    //ExamListComponent,
    //ExamItemComponent,
    //LogInComponent,
    //DetailsComponent,
    //MainLogoComponent,
    //SearchFilesComponent,
    //UserItemComponent,
    //FileUploaderComponent
    //MytestsComponent,
    //TestListComponent,
    //MyTestsComponent,
    //TestListComponent
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
    IgxIconModule
  ],
  providers: [
    //UserRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
