import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesComponent } from './files/files.component';
import { FileDisplayComponent } from './files/file-display/file-display.component';
import { LogoutComponent } from './logout/logout.component';
import { TimerComponent } from './timer/timer.component';
import { WaitingRoomComponent } from './timer/waiting-room/waiting-room.component';
import { ExamNotFoundDialogComponent } from './login/exam-not-found-dialog/exam-not-found-dialog.component';

const appRoutes: Routes=[
   
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'file/:id', component:FilesComponent, canActivate: [AuthGuard]
        , children: [
            { path: "", redirectTo: "display", pathMatch: "full" },
            { path: 'display', component: FileDisplayComponent },
        ]
    },
    { path: 'login', component: LoginComponent },

    {path: 'logout',component: LogoutComponent},

    {path: 'waiting-room', component: WaitingRoomComponent},
    {path: 'exam-not-found', component: ExamNotFoundDialogComponent},
    {path:'home', component:HomeComponent},

    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}