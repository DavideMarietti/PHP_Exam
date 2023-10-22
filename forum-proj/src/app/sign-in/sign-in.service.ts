import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utente} from "../variable-type";
import {catchError} from "rxjs/operators";
import {Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  fetchUsers() {
    return this.http
      .get<Utente[]>('http://localhost:3000/api/v1/users/read.php')
      .pipe(
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  newUser(user: any){
    console.log("service body", user);
    return this.http
      .post<Utente>(
        'http://localhost:3000/api/v1/users/create.php',
        user
      ).pipe(
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
}
