import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ExamDirectory } from '../models/examDirectory';
import { Summary } from '../models/summary';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AccountService {
    user: User;
    public directory: ExamDirectory;
    public summaries: Summary[] = [];
    public courseName: String;
    duration=180;////once Bar adds it to server-delete 180
    public examA= new Date();
    public examB= new Date();
    summariesSub: Subject<Summary[]> = new Subject<Summary[]>();
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient, private cookieServise: CookieService) {
        this.summariesSub.subscribe((value) => {
            this.summaries = value;
          });
        if (cookieServise.check("user")) {
            this.user = JSON.parse(cookieServise.get("user"));
        }
    }

    public getExamsDetiels(): Promise<any> {
        let headers = new HttpHeaders();//getvalidexam
        headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
        const options = { headers: headers };

        return this.http.get<any>(`${environment.apiUrl}/users/exam`, options)
            .toPromise()
    }

    public login(email: string, password: string): Promise<any> {
        return this.http.post<any>(`${environment.apiUrl}/users/login`, { email: email, password: password })
            .toPromise()
            .then(json => {
                // console.log(json.user);
                this.user = json["user"];
                console.log(this.user);
                this.cookieServise.set("user", JSON.stringify(json.user));
                this.cookieServise.set("token", json.token);
                this.getExamsDetiels().then(exam => {
                    console.log(exam);
                    this.examA=exam.course.exams.exam;//from server+3hours=the current date
                    this.examB=exam.course.exams.remake;
                    console.log(this.examA);
                    const summaries = exam.directory.summaries; 
                    console.log(exam.course.name);
                    this.courseName=exam.course.name;
                    this.directory = exam.directory;
                    //this.summariesSub = res.;//sub-non
                    this.summariesSub.next(summaries);
                    //this.duration=exam.course.exams.duration;//once Bar adds it to server
                }).catch(err => {
                        //console.log("catch exam will start in less than an hour");
                })
            }).catch(err => {

            });
    }
    /*public searchForAFile(keyWord: string,courseId:string) {
        return this.http.post<any>(`${environment.apiUrl}/summaries/search/key-word`, { keyWord: keyWord,courseId:courseId })
          .toPromise();
      }*/
    public logOut() {
        this.cookieServise.delete("user");
        this.cookieServise.delete("token");
    }



}