import { Injectable } from '@angular/core';
import { Pizza } from '../classes/Pizza';
import { PizzaInterface } from '../interfaces/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizze: Pizza[] = [

  ];

  createPizza(pizza:Pizza){
    this.pizze.push(pizza);
  }
}
