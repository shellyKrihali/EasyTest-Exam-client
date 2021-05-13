import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import {  SafeExamBrowser} from '../middlewares/SafeExamBrowser.middleware';

import { HomeComponent } from './home/home.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesComponent } from './files/files.component';
import { FileDisplayComponent } from './files/file-display/file-display.component';
import { LogoutComponent } from './logout/logout.component';
import { TimerComponent } from './timer/timer.component';
import { WaitingRoomComponent } from './timer/waiting-room/waiting-room.component';
import { ExamNotFoundDialogComponent } from './login/exam-not-found-dialog/exam-not-found-dialog.component';
import { ExamIsOverDialogComponent } from './timer/exam-is-over-dialog/exam-is-over-dialog.component';

const appRoutes: Routes=[
   
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard,SafeExamBrowser] },
    { path: '', component: LoginComponent},
    {
        path: 'file/:id', component:FilesComponent, canActivate: [AuthGuard,SafeExamBrowser]
        , children: [
            { path: "", redirectTo: "display", pathMatch: "full" },
            { path: 'display', component: FileDisplayComponent },
        ]
    },
    { path: 'login', component: LoginComponent, canActivate: [SafeExamBrowser] },

    {path: 'logout',component: LogoutComponent},

    {path: 'waiting-room', component: WaitingRoomComponent, canActivate: [SafeExamBrowser] },
    {path: 'exam-not-found', component: ExamNotFoundDialogComponent},
    {path: 'exam-is-over-dialog', component:ExamIsOverDialogComponent},
    {path:'home', component:HomeComponent, canActivate: [SafeExamBrowser] },
    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}