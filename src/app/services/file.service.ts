  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Summary } from 'src/app/models/summary';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public currentFileDisplied: Summary;

  constructor(private http: HttpClient, private cookieServise: CookieService) { }
  public getFilesFullDetailes(fileId: string): Promise<any> {//,courseAppID: string
    let headers = new HttpHeaders();
    console.log(fileId);
    headers = headers.set('Authorization', `Bearer ${this.cookieServise.get("token")}`);
    const options = { headers: headers };
      return this.http.get<any>(`${environment.apiUrl}/summaries/${fileId}`,
      options
    )
      .toPromise();
    //console.log(json);
  }
}