import { PizzaInterface } from './../interfaces/pizza';

export class Pizza implements PizzaInterface {
    constructor(public id: number, public name: string, public toppings: string[]) {};
}

export class PizzaMaker {
    static create(event: Pizza) {
      return new Pizza(event.id, event.name, event.toppings);
    }
}
