import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../classes/Pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-form-pizza',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  @Input() pizza: Pizza | undefined;
  showPizzaForm:boolean | undefined;

  constructor(private pizzaService: PizzaService) {
    this.pizza = {
      id: 0,
      name: '',
      toppings: []
    }
  }

  ngOnInit(): void {
  }

  savePizza() {
    
  }

}
