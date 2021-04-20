import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, map, retry, timeout } from 'rxjs/operators';

@Injectable()
export class DataHTTPService {

  hostURL = 'http://localhost';
  port = ':4000'; //TODO: get this from .env
  timeOutOnConnectionTry = 5000;

  constructor(private http: HttpClient) { }

  findData(): Observable<any> {
    const completeURL = `${this.hostURL}${this.port}`;
    const res = this.http.get<any>(completeURL)
      .pipe(
        catchError(this.handleError),
        map((res) => {
          if (!res.data) { console.log('error, no data on res', res); }
          return res.data
        }),
        timeout(this.timeOutOnConnectionTry),
      )

    return res;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
