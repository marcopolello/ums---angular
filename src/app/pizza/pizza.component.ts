import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  jsonDataResult: any;

  constructor(private http: HttpClient) { 
    this.http.get('assets/pizze.json').subscribe((res) => {
      this.jsonDataResult = res;
      console.log('--- result :: ',  this.jsonDataResult);
    });
  }

  ngOnInit(): void {
  }

}
