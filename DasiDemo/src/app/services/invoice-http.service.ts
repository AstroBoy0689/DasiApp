/**
 * ----------------------------
 * --author: Sandro del Valle--
 * ----------------------------
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITableInfo } from '../interfaces/ITableInfo';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class InvoiceHttpService {

  private _url: string = "/assets/data/tableInfo.json";//_url of the data

  constructor(private http: HttpClient) { }

  //get data
  getTableInfo():Observable<ITableInfo[]>{
    return this.http.get<ITableInfo[]>(this._url).catch(this.errorHandler);
  }

  //method for handling errors
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Cannot connect to source!")
  }
}
