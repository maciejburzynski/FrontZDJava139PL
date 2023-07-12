import {Component, OnInit} from '@angular/core';
import {DogServiceService} from "./dog-service.service";
import {Dog} from "./Dog";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontZDJava139PL';

  public dogs: Dog[] = []

  constructor(private dogServiceService: DogServiceService) {
  }

  ngOnInit(): void {
    this.getDogs();
  }


  private getDogs() {
    this.dogServiceService.getDogs().subscribe(
      (response: Dog[]) => {
        console.log("Success!");
        console.log(response);
        this.dogs = response
      },
      (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    )
  }
}
