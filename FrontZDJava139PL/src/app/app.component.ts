import {Component, OnInit} from '@angular/core';
import {AddressService} from "./address.service";
import {Address} from "./Address";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontZDJava139PL';

  public addresses: Address[] = []

  constructor(private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.getAddresses();
  }


  private getAddresses() {
    this.addressService.getAddresses().subscribe(
      (response: Address[]) => {
        console.log("Success!");
        console.log(response);
        this.addresses = response
      },
      (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    )
  }
}
