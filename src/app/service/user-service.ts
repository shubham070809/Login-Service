import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

export class UserService {

  private baseUrl = 'http://localhost:9090/validate';

  constructor(private http: HttpClient) { }

  validate(email:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${email}`);
  }


}
