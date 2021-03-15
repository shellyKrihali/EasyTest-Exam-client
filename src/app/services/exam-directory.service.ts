import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../models/course';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ExamDirectoryService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private cookieServise: CookieService) {

  }
  public getExamDirectory(directoryId: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
    // GET /exam-directories/{directoryId}
    return this.http.get<any>(`${environment.apiUrl}/exam-directories/${directoryId}`, options)
      .toPromise()
    // .then(json=>{
    //     console.log(json);
    // });
  }
}