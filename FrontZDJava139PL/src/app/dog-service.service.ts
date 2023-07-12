import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dog} from "./Dog";

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  constructor(private http: HttpClient) { }

  public getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('http://localhost:8080/api/dogs');
  }
}
