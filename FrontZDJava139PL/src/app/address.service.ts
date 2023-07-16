import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Address} from "./Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  public getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>('http://localhost:8080/api/addresses');
  }
}
