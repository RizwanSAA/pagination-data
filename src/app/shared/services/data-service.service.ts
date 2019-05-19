import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

import { SampleData } from "../models/sample-data.model";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  constructor(private _http: HttpClient) {}

  getDataFromTypicode() {
    return (
      this._http
        .get<SampleData>("https://jsonplaceholder.typicode.com/comment")
        // .pipe(map(res => res, err => err))
        .pipe(catchError(this.handleError))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
