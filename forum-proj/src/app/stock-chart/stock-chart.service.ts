import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StockChartService {

  private apiKey = 'GI9ZJ7T8NBICANYP';
  private apiUrl = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) {}

  getStockData(symbol: string): Observable<any>{
    const url = `${this.apiUrl}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apiKey}`;
    return this.http
      .get(
        url,
        {responseType: "json"}
      ).pipe(
        map(responseData => {
          console.log("responseData: ", responseData)
          let responseData_ = responseData["Time Series (Daily)"]
          const stockData: any[] = [];
          for (const key in responseData_) {
            if (responseData_.hasOwnProperty(key)) {
              stockData.push(convertIntObj({ ...responseData_[key], data: new Date(key).getTime() }));
            }
          }
          console.log("stockData: ", stockData)
          return stockData;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
}


function convertIntObj(obj) {
  for (const key in obj) {
    for (const prop in obj[key]) {
      obj[key] = Number(obj[key]);
    }
  }
  return obj;
}
