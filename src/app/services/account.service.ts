import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    public email:string;
    public password: string;
    public serverErr;
    public name: string;
    public directory: ExamDirectory;
    public summaries: Summary[] = [];
    public courseName: String;
    public examA;
    public examB;
    isValid: boolean = true;

    summariesSub: Subject<Summary[]> = new Subject<Summary[]>();
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient, private cookieServise: CookieService, private router: Router) {
        this.summariesSub.subscribe((value) => {
            this.summaries = value;
          });
        if (cookieServise.check("user")) {
            this.user = JSON.parse(cookieServise.get("user"));
        }
    }

    public getExamsDetiels(): Promise<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
        const options = { headers: headers };

        return this.http.get<any>(`${environment.apiUrl}/users/exam`, options)
            .toPromise()/*.catch((err)=>{
                console.log("getExamsDetiels service");
            })*/
    }

    public login(email: string, password: string): Promise<any> {
        this.email=email;
        this.password=password;
        return this.http.post<any>(`${environment.apiUrl}/users/login-exam`, { email: email, password: password })
            .toPromise()
            .then(json => {
                // console.log(json.user);
                this.user = json["user"];
                console.log(this.user);
                this.name=this.user.name;
                this.cookieServise.set("user", JSON.stringify(json.user));
                this.cookieServise.set("token", json.token);
                this.isValid=true;
                
            }).catch((err: HttpErrorResponse) =>{
                console.log("login service");
                this.serverErr=err.error.message;
                this.isValid=false;
            });
    }
 
      public loginWithCourse(courseAppId){
        return this.http.post<any>(`${environment.apiUrl}/users/login`, { email: this.email, password: this.password, courseAppId: courseAppId })
        .toPromise().catch((err) =>{
            console.log("already logged in");
        });
        
      }
    public logOut(courseAppId) {
  
                
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
        const options = { headers: headers };

        this.cookieServise.delete("user");
        this.cookieServise.delete("token");
        return this.http.post<any>(`${environment.apiUrl}/users/logout`, {courseAppId: courseAppId} , options).toPromise();
        
    
    }



}