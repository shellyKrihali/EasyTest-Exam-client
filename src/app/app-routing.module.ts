import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesComponent } from './files/files.component';
import { FileDisplayComponent } from './files/file-display/file-display.component';
//import { ExamDetailComponent } from './exams/exam-detail/exam-detail.component';
//import { ExamListComponent } from './exams/exam-list/exam-list.component';
//import { LogInComponent } from './log-in/log-in.component'
//import { MainLogoComponent } from './main-logo/main-logo.component';
//import { SearchFilesComponent } from './search-files/search-files.component'
const appRoutes: Routes=[
    //{ path: '',redirectTo: '/exams', pathMatch: 'full' },
   // { path: 'exams',component: ExamListComponent },
    //{ path: "search-page", component: SearchFilesComponent },
    //{ path: 'exam-detail',component: ExamDetailComponent },
    //{ path: 'log-in',component: LogInComponent },
    //{ path: "feed", component: MainLogoComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {
        path: 'file/:id', component: FilesComponent, canActivate: [AuthGuard]
        , children: [
            { path: "", redirectTo: "display", pathMatch: "full" },
            { path: 'display', component: FileDisplayComponent },
        ]
    },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}